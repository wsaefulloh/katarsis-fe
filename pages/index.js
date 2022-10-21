import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
// core components

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";

import Link from "next/link";

import "../assets/css/main/main.module.css";

function Home() {
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
      <div className="py-5 visi_misi" style={{ backgroundColor: "#000000" }}>
        <Slider {...visiMission}>
          <div>
            <div className="text-center header-cover">
              <div
                className="pb-4"
                style={{ color: "#ffffff", fontSize: "18px" }}
              >
                Our Vision
              </div>
              <h1
                className="m-0 pb-4"
                style={{ color: "#ffffff", fontSize: "32px" }}
              >
                We believe in quality-experiential entertainment to empower
                Indonesia’s creative potential.
              </h1>
            </div>
          </div>

          <div>
            <div className="text-center header-cover">
              <div
                className="pb-4"
                style={{ color: "#ffffff", fontSize: "18px" }}
              >
                Our Mission
              </div>
              <h1
                className="m-0 pb-4"
                style={{ color: "#ffffff", fontSize: "32px" }}
              >
                We aim to entertain and inspire through dramatic experiences,
                transmedia storytelling and creative imagineering.
              </h1>
            </div>
          </div>
        </Slider>
      </div>

      <Container className="py-4">
        <Row>
          <Col
            className="py-5 d-flex"
            style={{ borderRight: "2px solid #000000" }}
          >
            <Row className="align-items-center w-100">
              <Col>
                <div className="mx-4">
                  <h3 className="m-0">Original IP</h3>
                </div>
              </Col>
              <Col>
                <div className="mx-4">
                  <div>Experiences</div>
                  <div>Content</div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="py-5 d-flex">
            <Row className="align-items-center w-100">
              <Col>
                <div className="mx-4">
                  <h3 className="m-0">Business to Business (B2B)</h3>
                </div>
              </Col>
              <Col>
                <div className="mx-4">
                  <div>Marketing & Sponsorship</div>
                  <div>Ceremonies & Events</div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="py-5" style={{ backgroundColor: "#000000" }}>
        <Container className="py-4">
          <div style={{ color: "#ffffff", paddingLeft: "15px" }}>
            Original IP / Work
          </div>
        </Container>

        <Container>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            <Col>
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div>
                    <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                      Relive the magic of movie theatre 1950s
                    </h1>
                    <div style={{ color: "#ffffff" }}>
                      Drive-In Senja, Alam Sutera
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div>
                    <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                      Relive the magic of movie theatre 1950s
                    </h1>
                    <div style={{ color: "#ffffff" }}>
                      Drive-In Senja, Alam Sutera
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div
                  style={{
                    height: "300px",
                    width: "100%",
                  }}
                  className="background_image"
                >
                  <div>
                    <h1 style={{ color: "#ffffff", fontSize: "36px" }}>
                      Relive the magic of movie theatre 1950s
                    </h1>
                    <div style={{ color: "#ffffff" }}>
                      Drive-In Senja, Alam Sutera
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </div>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              style={{
                fontSize: "48px",
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              How We Do It
            </h1>
            <div
              style={{
                width: "300px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <h2
              style={{
                color: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="py-4"
            >
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <div
              style={{
                maxWidth: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#000000",
                fontSize: "16px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo.
            </div>
            <div
              style={{
                maxWidth: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#000000",
                fontSize: "16px",
              }}
              className="py-4"
            >
              Process :
            </div>
          </div>
        </Container>
      </div>

      <div>
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

      <div className="py-5">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              style={{
                fontSize: "48px",
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Media Coverage
            </h1>
            <div
              style={{
                width: "300px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <div className="media_coverage">
              <Slider {...mediaCoverage}>
                <Col>
                  <Row
                    className="justify-content-center align-items-center"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <img
                      alt="..."
                      src={`https://drive.google.com/uc?export=view&id=1Lx3nwfu2wNY6udxg150QbSG2zUXFHZy_`}
                      width="100%"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row
                    className="justify-content-center align-items-center"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <img
                      alt="..."
                      src={`https://drive.google.com/uc?export=view&id=1Lx3nwfu2wNY6udxg150QbSG2zUXFHZy_`}
                      width="100%"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row
                    className="justify-content-center align-items-center"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <img
                      alt="..."
                      src={`https://drive.google.com/uc?export=view&id=1Lx3nwfu2wNY6udxg150QbSG2zUXFHZy_`}
                      width="100%"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row
                    className="justify-content-center align-items-center"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <img
                      alt="..."
                      src={`https://drive.google.com/uc?export=view&id=1Lx3nwfu2wNY6udxg150QbSG2zUXFHZy_`}
                      width="100%"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row
                    className="justify-content-center align-items-center"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <img
                      alt="..."
                      src={`https://drive.google.com/uc?export=view&id=1Lx3nwfu2wNY6udxg150QbSG2zUXFHZy_`}
                      width="100%"
                    />
                  </Row>
                </Col>
                <Col>
                  <Row
                    className="justify-content-center align-items-center"
                    style={{ height: "100px", width: "100%" }}
                  >
                    <img
                      alt="..."
                      src={`https://drive.google.com/uc?export=view&id=1Lx3nwfu2wNY6udxg150QbSG2zUXFHZy_`}
                      width="100%"
                    />
                  </Row>
                </Col>
              </Slider>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-5">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              style={{
                fontSize: "48px",
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Our Team
            </h1>
            <div
              style={{
                width: "300px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
          </div>
        </Container>
      </div>
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
