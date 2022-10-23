import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components

import HomeFooter from "../../components/Footers/HomeFooter";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Slider from "react-slick";

import Link from "next/link";

import "../../assets/css/main/main.module.css";

function Work() {
  const visiMission = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const mediaCoverage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        style={{
          height: "500px",
          width: "100%",
        }}
        className="background_image"
      >
        <div
          className="background_work"
          style={{
            height: "500px",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: "15px",
            }}
          >
            <div className="button_header">
              <h5 className="m-0 p-0" style={{ color: "#ffffff" }}>
                WATCH THE VIDEO
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="m-0 p-0" style={{ borderBottom: "1px solid #000000" }}>
        <Container>
          <Row>
            <Col
              className="m-0 p-0"
              style={{ borderRight: "1px solid #000000" }}
            >
              <div
                className="d-flex align-items-center "
                style={{ height: "100px" }}
              >
                <h1 className="m-0 p-0">DRIVE-IN SENJA</h1>
              </div>
            </Col>
            <Col className="m-0 p-0">
              <div
                className="d-flex align-items-center "
                style={{ height: "100px" }}
              >
                <div className="mx-4 p-0" style={{ fontSize: "16px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="m-0 p-0" style={{ borderBottom: "1px solid #000000" }}>
        <Container>
          <Row>
            <Col
              className="m-0 p-0"
              style={{ borderRight: "1px solid #000000" }}
            >
              <div
                className="d-flex align-items-center "
                style={{ height: "100px" }}
              >
                <div className="m-0 p-0">Original IP</div>
              </div>
            </Col>
            <Col className="m-0 p-0">
              <div
                className="d-flex align-items-center "
                style={{ height: "100px" }}
              >
                <div className="mx-4 p-0">2021, Alam Sutera</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-4">
        <Container>
          <h3>About</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.{" "}
          </div>
        </Container>
      </div>

      <div className="py-4">
        <Container>
          <h1>Result</h1>
          <div
            style={{
              backgroundColor: "#000000",
              height: "2px",
              width: "180px",
            }}
          ></div>
        </Container>
      </div>

      <div className="py-4">
        <Container>
          <Row className="m-0 p-0 align-items-center">
            <Col className="m-0 p-0">
              <h1>43 Million</h1>
              <div
                style={{
                  color: "#FF0000",
                }}
              >
                Impression
              </div>
            </Col>
            <Col className="m-0 p-0">
              <h1>76 Million</h1>
              <div
                style={{
                  color: "#FF0000",
                }}
              >
                Media Impression
              </div>
            </Col>
            <Col className="m-0 p-0">
              <h1>And a 349 ticket sold on Loket.com</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="py-4">
        <Container className="p-0">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            <Col lg="6">
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div
                    className="background_cover"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                        Relive the magic of movie theatre 1950s
                      </h1>
                      <div style={{ color: "#ffffff" }}>
                        Drive-In Senja, Alam Sutera
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div
                    className="background_cover"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                        Relive the magic of movie theatre 1950s
                      </h1>
                      <div style={{ color: "#ffffff" }}>
                        Drive-In Senja, Alam Sutera
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div
                    className="background_cover"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                        Relive the magic of movie theatre 1950s
                      </h1>
                      <div style={{ color: "#ffffff" }}>
                        Drive-In Senja, Alam Sutera
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div
                    className="background_cover"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                        Relive the magic of movie theatre 1950s
                      </h1>
                      <div style={{ color: "#ffffff" }}>
                        Drive-In Senja, Alam Sutera
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div
                    className="background_cover"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                        Relive the magic of movie theatre 1950s
                      </h1>
                      <div style={{ color: "#ffffff" }}>
                        Drive-In Senja, Alam Sutera
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div
                    className="background_cover"
                    style={{
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        padding: "15px",
                      }}
                    >
                      <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                        Relive the magic of movie theatre 1950s
                      </h1>
                      <div style={{ color: "#ffffff" }}>
                        Drive-In Senja, Alam Sutera
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </div>
        </Container>
      </div>
      <div>
        <Container className="d-flex align-items-center justify-content-center">
          <h3
            style={{
              padding: "15px",
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "20px",
            }}
          >
            https://duniamencekam.com/
          </h3>
        </Container>
      </div>

      <HomeFooter />
    </>
  );
}

export default Work;
