import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components

import HomeFooter from "../../components/Footers/HomeFooter";
import CardsProject from "../../components/Cards/CardsProjects";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Slider from "react-slick";

import Link from "next/link";

import "../../assets/css/main/main.module.css";
import { useRouter } from "next/router";

function Work() {
  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(14, url_page.length);
  console.log(url_page);

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
                <div
                  className="py-1 arrow_hover "
                  style={{ width: "fit-content", cursor: "pointer" }}
                >
                  Original IP
                </div>
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

      <div
        className="my-3"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

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
            <CardsProject />
            <CardsProject />
            <CardsProject />
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
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            https://duniamencekam.com/
          </h3>
        </Container>
      </div>

      <div className="pt-5 text-center justify-content-center">
        <div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            cursor: "pointer",
            width: "fit-content",
          }}
        >
          <img
            src="data:image/png;base64,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"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="pt-2">TOP</div>
        </div>
      </div>

      <HomeFooter />
    </>
  );
}

export default Work;
