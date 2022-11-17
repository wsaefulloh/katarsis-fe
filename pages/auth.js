import React, { Component, useEffect, useState } from "react";
import Router from "next/router";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  NavbarBrand,
  Spinner,
} from "reactstrap";
import "../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import Link from "next/link";
import { fetchWrapper } from "../helpers/fetch-wrapper";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser] = useState({
    username: "",
    password: "",
  });
  const [dataUserServer, setDataUserServer] = useState({
    username: "",
    password: "",
  });

  const getUser = async () => {
    const data = await fetchWrapper.get(`api/get-user`);

    if (data) {
      let newData = data.data;
      let obj = newData[0];
      setDataUserServer({
        ...dataUserServer,
        username: obj.username,
        password: obj.password,
      });
    }
  };

  const router = useRouter();
  const [cookies, setCookie] = useCookies(["token"]);

  const login = async () => {
    setLoading(true);

    if (
      dataUser.username == dataUserServer.username &&
      dataUser.password == dataUserServer.password
    ) {
      setCookie("token", "tokenuserlogin", { path: "/", maxAge: 3600 });
      setCookie("pass", `${dataUserServer.password}`, {
        path: "/",
        maxAge: 3600,
      });
      await Swal.fire("OK", "Login Berhasil", "success");
      router.push("/admin/visi-misi");
    } else {
      Swal.fire("FAILED", "Username dan Password Tidak Cocok", "error");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="justify-content-center justify-items-center mx-auto text-center py-4">
      <Card
        style={{
          width: "300px",
          borderRadius: "20px",
        }}
        className="mx-auto pt-3 pb-4 px-3 justify-content-center justify-items-center"
      >
        <div>
          <img
            alt="..."
            src={require("assets/img/brand/Logo Katarsis png.png")}
            style={{ height: "25px" }}
          />
        </div>
        <h4 className="m-0 mt-3 mb-3 p-0">Login Page</h4>
        <div>
          <Form>
            <div className="form-row">
              <Col className="my-3 p-0">
                <Input
                  type="text"
                  placeholder="Username"
                  onChange={(e) => {
                    setDataUser({
                      ...dataUser,
                      username: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0">
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setDataUser({
                      ...dataUser,
                      password: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
        </div>
        <div className="alignt-items-center">
          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#000000",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              login();
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Login</>
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
}
