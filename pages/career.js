import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
import Filter from "../components/Filter/Filter";
import SliderProcess from "../components/SliderProcess/SliderProcess";
import WorkflowGraph from "../components/WorkflowGraph/WorkflowGraph";
import CardsProject from "../components/Cards/CardsProjects";
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

      <Filter />

      <div className="py-5" style={{ backgroundColor: "#000000" }}>
        <Container className="pb-5">
          <div style={{ color: "#ffffff", paddingLeft: "15px" }}>
            Work / Original IP -{">"} Experiences
          </div>
        </Container>

        <Container>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            <CardsProject />
            <CardsProject />
          </div>
        </Container>
      </div>

      <div className="pt-5 pb-4">
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
          </div>
        </Container>
      </div>

      <SliderProcess />

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <WorkflowGraph />

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div className="pb-5 pt-3">
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

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div className="pt-3">
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

      <div className="py-3">
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

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <Container>
        <div
          className="pb-5"
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAYAAADHyrhzAAAABmJLR0QA/wD/AP+gvaeTAAAKn0lEQVR4nO2caZBcVRXHf+e+CcmQAIEwSUB2h3S/vpNxYBBwKcMiVIHFEoooKAoFYokIIlgIIoIbJULhilXs+1ICFiUFFbGEAJYIOFAO/fr1JEMScCUTQEgymZlM3+OHnu55r6dn6Z7XoxX9f+p77rnn/O959e67y7ktzBCstfMAX1RTKppGpQXRXXDMFWEO8I4iWwS3yWHWGON6CgXpCcPw9ZniKA20baxNLRP1jlH0KKATaKrDzt8VnjLI07OGhh57pbe3L2GeZSQejPZUKlXwvLPAnQGyV8Lmt4GsVLinubn50a6urm1JGk8sGL7vH2zgCoSTAVND035gEJhfI5/XEa7bsmXrbevXrx+ohet4mHYwfN/f1xN+rHDyBGoDoH8QzHOohmpMD/BGEATvAFpS6uzs3LG/v7/FgyVqWILKIaBHAvtOYPsfglyazeXui9qqB3UHo7Ozc9bAwJZLULkS2LGKyhaEX4novZs3Dzw7nafX1tb2ftXCqSifBWxVJeEZEe+8bDYb1uunrmBYa/cB9yDKh6pUv6HI9SJyRxAEm+slNh4ymcxhIvp1lJOofB2FrTguDMLw1nps1xwM3/ePN8I9wG4VlvpAvwnenUEQDNVDphZkMhkroteifGJsrdw/p7n53K6urv5abNYUjDbfP0cNN6F4EbEKerOK940gCN6uxV4SyGQyJwn6U2CfWIXyB4w5oRZOUw6GtenLULmmos1Gp5wZhuETU7XTCHR0dMzftm3wdpTlFVW5puHCsX9evfpvU7EzpWBY378I4Udxqb7kNQ2f0t3d+9cpMW48xFr/IpTriY8luYLTj+Xz+bcmNTCZgrXp01G5N+5AnxocGl7e29v7Xh2kGwrf9082wgPAnIj4RcQcPdmAPuHkyPf9w1G5K6on8CjiHfffGAiAMAwfdcoJFCdyJRyq6m6brK03XkVHR8d81cKTwIKyUFm1ZevW5WvWrBkcr91/AzZu3Lh24cJF3aArGHmQAnbh7i19fRs3vjReu3GDsWDBrvdXzCNycwYHjwnXrduSHO3Goa+vr6elZeG/BI4rC4WjFy1a8NiGDW+9Wa1N1dekzfeXV4zM/Yp8smvt2neTpQzt7a17WZv6CA1YNOZyuZ8p/DIimoMzNzFOv8cI29vb56rw46hMlAtzuVyQLFWw1n6wMDwrQM3vre/fkbR9gKGhbeeCrC2VFQ63Nn1ONd0xwSgMD19KdAKjrMqG4e1Jk7TW7iDqbgd2BkA401p7atJ+ent730Pk/JhQ5ZqRzaYYYsFobW3dGfSCiGjYqF7INFeD1aBauFyhLS50P1u6dOmuSfsKgmAlyq8iot1F9YuVerFgzJ496zygTEbh1lfz+VeTJmetzQhyeZWqxc4NX5e0PwDxvEsRCqWyopd8aK+9mqM65WCsAA/lwkjdcFPB/bABvAzO3QLMrlqrnG2tPSppp9ls9jVRfTAiWvzuzjufFic2gpxNfxzYc5QTD3b39KxLmpS1/nkIH55ARVB3U+VTSwIFlR/EHKl+LloefU3UxCuMTjpjqxWpVGpP4PtTUG19b5edrk7afxiGWeDFskBY1p5K7V8qGijuWoGeGGn3ejabfzZpMk1N5maUXaakrFzs+/7BSXNA9J5oqWDMSaWCARgY2HwoUP7UCPIw4JLkUFzwVduIGRdNRrj1iCOOqOd4YVyIND1E9OsoUh6fiq+JM0dGGxRUn0qSQDqdXoDKjybXHIOD+t588+IkuWSz2TcFIhNIPaIU8GIw4gPasHPuuSQJeJ7cACyqq7Hhamtta5J8HLGHvVNfX19b0VURfqlGIN/T07MpKcfW2qNGdrXrg9IM7lYSXLsYTGzlKs6lAMx+++03B2HvUd/Sk5TTzs7OHVG9hel2RFlmfb/qeqIucxLvoxotBmPu3LkHRDd4BVYn5XSgv/97oAckYky4zvf9PZIwNTg4WPHApRXAiBTmx+SqVdf6tcJa24GJzWini/nGcEMShoqLN7aWBa64BGlSZaeYpkgi44UpFDxnpAsZfwMJpY3YtFzWIvrOBGYTeVBF37oJpDjLNcUYNBGZXwA4SOQU7NV8vgs4bCIdm/FXAweW+cFluSB8KAn/k0M2AQtHCvMAjHNSiKmIG/9Jbl+YVf6lDAMYGfta7MT/Bsr9FNgEVYIxZgzZPiFEhgeVkWB4w8OxtCAzcS7EdoFUKrUHkddEVDcAmO6enteBcu6EYpbMPL2ZRVMTqWi5NAkzgENYE6ny2d7hTKyPzlEOBsRWcexTTEbZrvHRaMEYk4XS0ZujYiOncCTbLwQh0j9ZGwTBGzASjGHV38XU1Rw7g+RmFNbadmBxWSD6dOmnAcjn86uBSCaunlTtkGX7gPtMtKQqT5Z+R85N5IGIzlycO6XhvGYeBtXTI+XNTU1Nj49WliAS3SgF4UsNpzbD8H3/xFjWsvJId3d3OaugHIwgCHLAC5G2h2UymaNnhOUMwcAV0bJ4emdFfaRSuTZWFr2ycdRmFr7vH49wSKks8MdsNr8qqhMLRjYMHxXIlgXKskwm88mGMx2BiCR+wA3FE/8xG0NGxxxmVaYkqIr5dlQgojekUqkGLd5G8yaKzvW1RnhRLVyCxqbgL2Sz+ccr9cbkZwRB8DDCb0ct8b5ZnvykESQRuVjgZeAtRK/K5XKvJO3CWvsBQb416pOCcXo+VdIsqu5a+75/oBG6iaYPip4VBPm7kibbSFhr56H6Emi6LBR+EQTh+dX0q+Y2hWG4RpD44Klyo7X2g0mSbSRWgCfq7okFAnoHB7dVywsBJsj229DX9/zClpYOoGRsB9Dlixfv9tiGDW9tTIhzw2Ay6Z8ocmZENOiU41avXr1+3DYT2FPEnF0xyO3uCt5K3/cPHLfVfx7Slslcr0g0HQtFvhKG4csTNZwwQzgIgrfFmGOBf0bE+xrhj77vH14/38ZgBXjW+jcreklUrug1uVzupsnaT+nYb2k63emMPE18s3gzol8IgvwD47WbSVhrF6OF+0BiKVAKt+dy4eeZQpLelM9A29pSh6iaJ1BaKkzcPKe5+au1XnRJEplM5mhB7yW6NIfSl+MCpphrUtOBsO/7BxrDb1D2r6haj5ivBEHw61rsTRft7e0LC4Vt142c8sf7InpVEOS/U4u9mk/HD2ptbRnaYdZdRHOyy9CVxvGdV/P552u1Wws6Dzhgl8HZs7+swtcoXgEdhfAu6DlBkH+kVrv1pgqItf6lKN8lejI1Wv20GPfzgYHhx3t7exO7gVC+QCx6XtXcMOVP4nmnZbPZuqb108qbGLk0dyPKsnFU3gF5SFRXqjHP1HGHzSxNpw9SkaNUOBU4dBy990T51u6LFt24atWq4Rp9lJFENoxkMplPC3o1MFG6kUPJYghR6UHcOvA2O+f+BeB5OkcLMg9YjGEJyhLgICpvScaxDeFu57gyDMN/TLsj0zVQwgrwcjb9KZDLUJYmZbcqirkVdzjHD5P8F4WG/EuCtfZQ0cIZKnLa2E9x3XAoz6rI3UNDQ4804lpYI/8yghXg5dPpjpF3/kiKtwj2nqzdCPqBHoTnQZ8qFFg1lRuI00FDg1EN1tp5zrklIrIImCfidgUQJ1uBzaL6tvO8dUEQ/IUGXO34P6aIfwOWKr9o82CRrwAAAABJRU5ErkJggg=="
            style={{ width: "50px", height: "50px" }}
          />
          <div className="pt-2">TOP</div>
        </div>
      </div>
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
