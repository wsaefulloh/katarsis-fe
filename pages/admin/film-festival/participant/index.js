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
import { fetchWrapper } from "../../../../helpers/fetch-wrapper";

import "../../../../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import CardParticipant from "../../../../components/Cards/Admin/CardsParticipant";

function Participant() {
  const [result, setResult] = useState([]);

  const getAll = async () => {
    const data = await fetchWrapper.get(`../../../api/admin/participant`);
    if (data) {
      setResult(data.data);
    }
  };

  useEffect(() => {
    getAll();
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
                    <h3 className="mb-0">List Participant Film Festival</h3>
                  </Col>
                </Row>
              </div>
            </Container>
          </Card>

          <Container>
            {result.map((val) => {
              return (
                <CardParticipant
                  id={val.id}
                  title={val.title_film}
                  name={val.name_participant}
                  email={val.email_participant}
                  phone_number={val.phone_participant}
                  finalist={val.finalist}
                />
              );
            })}
          </Container>
        </Card>
      </Col>
    </>
  );
}

Participant.layout = HomeLayoutAdmin;

export default Participant;
