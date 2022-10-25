import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

import "../../assets/css/main/main.module.css";

function SliderProcess() {
  return (
    <>
      <div
        className="py-4 justify-content-center"
        style={{
          width: "100%",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Row className="align-items-center">
          <Col>
            <div className="justify-content-center text-center">
              <div>Lorem Ipsum</div>
              <div
                className="my-2"
                style={{
                  backgroundColor: "#000000",
                  height: "10px",
                  width: "10px",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
          </Col>
          <Col className="m-0 p-0">
            <div
              style={{
                backgroundColor: "#000000",
                height: "2px",
                width: "100%",
              }}
            ></div>
          </Col>
          <Col>
            <div className="justify-content-center text-center">
              <div>Lorem Ipsum</div>
              <div
                className="my-2"
                style={{
                  backgroundColor: "#000000",
                  height: "10px",
                  width: "10px",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
          </Col>
          <Col className="m-0 p-0">
            <div
              style={{
                backgroundColor: "#000000",
                height: "2px",
                width: "100%",
              }}
            ></div>
          </Col>
          <Col>
            <div className="justify-content-center text-center">
              <div>Lorem Ipsum</div>
              <div
                className="my-2"
                style={{
                  backgroundColor: "#000000",
                  height: "10px",
                  width: "10px",
                  borderRadius: "20px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="py-4">
        <Container>
          <img
            src="https://medias.momentfactory.com/2015/12/about-team-all.png"
            alt="A random image from Flickr"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Container>
      </div>

      <div className="py-4">
        <Container>
          <Row style={{ alignItems: "center" }}>
            <Col lg="2">
              <h2
                style={{
                  color: "#000000",
                }}
              >
                LOREM IPSUM
              </h2>
            </Col>
            <Col>
              <div
                style={{
                  color: "#000000",
                  fontSize: "16px",
                  borderLeft: "1px solid #000000",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  textAlign: "justify",
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo.
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SliderProcess;
