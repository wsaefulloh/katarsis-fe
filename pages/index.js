import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
import SliderProcess from "../components/SliderProcess/SliderProcess";
import WorkflowGraph from "../components/WorkflowGraph/WorkflowGraph";
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
            <Col>
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
            <Col>
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

      <SliderProcess />

      <WorkflowGraph />

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

      <div className="py-5">
        <Container>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 box">
            <Col>
              <div
                className="mx-auto"
                style={{ width: "340px", marginBottom: "30px" }}
              >
                <img
                  src="https://loremflickr.com/1500/1000"
                  alt="A random image from Flickr"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="mt-2">
                  <div className="d-flex align-items-center">
                    <h1 className="m-0 py-2 pr-2">Lorem Ipsum</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="25px"
                      viewBox="0 0 50 50"
                      style={{ fill: "#000000" }}
                    >
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path>
                    </svg>
                  </div>

                  <div>CO-FOUNDER KATARSIS</div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="mx-auto"
                style={{ width: "340px", marginBottom: "30px" }}
              >
                <img
                  src="https://loremflickr.com/1500/1000"
                  alt="A random image from Flickr"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="mt-2">
                  <div className="d-flex align-items-center">
                    <h1 className="m-0 py-2 pr-2">Lorem Ipsum</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="25px"
                      viewBox="0 0 50 50"
                      style={{ fill: "#000000" }}
                    >
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path>
                    </svg>
                  </div>

                  <div>CO-FOUNDER KATARSIS</div>
                </div>
              </div>
            </Col>
            <Col>
              <div
                className="mx-auto"
                style={{ width: "340px", marginBottom: "30px" }}
              >
                <img
                  src="https://loremflickr.com/1500/1000"
                  alt="A random image from Flickr"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="mt-2">
                  <div className="d-flex align-items-center">
                    <h1 className="m-0 py-2 pr-2">Lorem Ipsum</h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      height="25px"
                      viewBox="0 0 50 50"
                      style={{ fill: "#000000" }}
                    >
                      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path>
                    </svg>
                  </div>

                  <div>CO-FOUNDER KATARSIS</div>
                </div>
              </div>
            </Col>
          </div>
        </Container>
      </div>

      <Container>
        <div
          style={{
            color: "#000000",
            fontSize: "16px",
            paddingLeft: "50px",
            paddingRight: "50px",
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo.
        </div>
      </Container>

      <img
        src="https://medias.momentfactory.com/2015/12/about-team-all.png"
        alt="A random image from Flickr"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
