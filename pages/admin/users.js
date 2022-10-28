import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  Card,
  Spinner,
  Form,
  Input,
} from "reactstrap";
// layout for this page
import HomeLayoutAdmin from "layouts/Admin.js";
// core components
// import CardTimeline from "components/Cards/Admin/CardsTimeline.js";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

import "../../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function Users() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oldPass, setOldPass] = useState("");
  const [dataValueServer, setDataValueServer] = useState({
    username: "",
    password: "",
  });
  const [dataValueInput, setDataValueInput] = useState({
    id: 1,
    username: "Admin",
    password: "",
  });

  const router = useRouter();

  const getbyID = async () => {
    const data = await fetchWrapper.get(`../api/admin/users`);
    if (data) {
      let newData = data.data;
      let obj = newData[0];
      setDataValueServer({
        ...dataValueServer,
        username: obj.username,
        password: obj.password,
      });
    }
  };

  const updateData = async () => {
    setLoading(true);

    if (oldPass == dataValueServer.password) {
      try {
        const response = await fetch(`../api/admin/users`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataValueInput),
        });
        const data = await response.json();
        if (data) {
          if (data.statusCode != 201) {
            Swal.fire("FAILED", "Lengkapi semua data!", "error");
            setLoading(false);
          } else {
            await Swal.fire("OK", "Password berhasil diubah", "success");
            router.reload(window.location.pathname);
          }
        }
        setLoading(false);
      } catch (error) {
        Swal.fire("FAILED", "Data gagal di proses", "error");
        setLoading(false);
      }
    } else {
      Swal.fire("FAILED", "Password lama anda salah!", "error");
    }
  };

  useEffect(() => {
    getbyID();
  }, []);

  return (
    <>
      <Col xl="9" style={{ paddingLeft: "7.5px", paddingRight: "7.5px" }}>
        <Card style={{ height: "100%" }}>
          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Change Password</h3>
                  </Col>
                </Row>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <Input
                            placeholder="Password Lama"
                            type="password"
                            onChange={(e) => {
                              setOldPass(e.target.value);
                            }}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <Input
                            type="password"
                            placeholder="Password Baru"
                            onChange={(e) => {
                              setDataValueInput({
                                ...dataValueInput,
                                password: e.target.value,
                              });
                            }}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>

                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    updateData();
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>
        </Card>
      </Col>
    </>
  );
}

Users.layout = HomeLayoutAdmin;

export default Users;
