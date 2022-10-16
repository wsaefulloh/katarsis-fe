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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#000000" }}>
        <Slider {...settings}>
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
          <Col className="py-5" style={{ borderRight: "2px solid #000000" }}>
            <Row className="align-items-center">
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
          <Col className="py-5">
            <Row className="align-items-center">
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
          <Row>
            <Col className="py-5" style={{ borderRight: "2px solid #000000" }}>
              <Row className="align-items-center">
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
            <Col className="py-5">
              <Row className="align-items-center">
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
      </div>
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
