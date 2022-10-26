import React, { useEffect, useState } from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
import Filter from "../components/Filter/Filter";
import SliderProcess from "../components/SliderProcess/SliderProcess";
import WorkflowGraph from "../components/WorkflowGraph/WorkflowGraph";
import CardsProject from "../components/Cards/CardsProjects";
import CardsProfile from "../components/Cards/CardsProfile";
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
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { menu, renderFilter } = Filter();

  const [project, setProject] = useState([]);
  const [profile, setProfile] = useState([]);
  const [media, setMedia] = useState([]);

  const getDataOriginalIP = async () => {
    const data = await fetchWrapper.get(`api/project/originalIP`);
    if (data) {
      setProject(data.data);
    }
  };

  const getDataOriginalIPExperiences = async () => {
    const data = await fetchWrapper.get(`api/project/originalIP-experiences`);
    if (data) {
      setProject(data.data);
    }
  };

  const getDataOriginalIPContent = async () => {
    const data = await fetchWrapper.get(`api/project/b2b`);
    if (data) {
      setProject(data.data);
    }
  };

  const getDataB2B = async () => {
    const data = await fetchWrapper.get(`api/project/b2b`);
    if (data) {
      setProject(data.data);
    }
  };

  const getDataB2BMarketingSponsor = async () => {
    const data = await fetchWrapper.get(`api/project/b2b-marketing-sponsor`);
    if (data) {
      setProject(data.data);
    }
  };

  const getDataB2BCeremoniesEvent = async () => {
    const data = await fetchWrapper.get(`api/project/b2b-ceremonies-event`);
    if (data) {
      setProject(data.data);
    }
  };

  const getDataProfile = async () => {
    const data = await fetchWrapper.get(`api/profile`);
    if (data) {
      setProfile(data.data);
    }
  };

  const getDataMedia = async () => {
    const data = await fetchWrapper.get(`api/media`);
    if (data) {
      setMedia(data.data);
    }
  };

  useEffect(() => {
    getDataProfile();
    getDataOriginalIP();
    getDataMedia();
  }, []);

  useEffect(() => {
    if (menu == "Original IP") {
      getDataOriginalIP();
    } else if (menu == "Original IP -> Experiences") {
      getDataOriginalIPExperiences();
    } else if (menu == "Original IP -> Content") {
      getDataOriginalIPContent();
    } else if (menu == "Business to Business (B2B)") {
      getDataB2B();
    } else if (
      menu == "Business to Business (B2B) -> Marketing & Sponsorship"
    ) {
      getDataB2BMarketingSponsor();
    } else if (menu == "Business to Business (B2B) -> Ceremonies & Events") {
      getDataB2BCeremoniesEvent();
    }
  }, [menu]);

  return (
    <>
      <div
        id="top"
        className="py-6 visi_misi"
        style={{ backgroundColor: "#000000" }}
      >
        <Slider {...visiMission}>
          <div>
            <div className="text-center header-cover">
              <div className="pb-4 text_vision_mision">Our Vision</div>
              <h1 className="m-0 pb-4 text_title_vision_mision">
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
      <div>{renderFilter}</div>

      <div id="work" className="py-5" style={{ backgroundColor: "#000000" }}>
        <Container className="pt-5 pb-5">
          <div
            style={{ color: "#ffffff", paddingLeft: "15px", fontSize: "16px" }}
          >
            {`Work / ${menu}`}
          </div>
        </Container>

        <Container>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            {project.map((val) => {
              return (
                <CardsProject
                  img={val.url_image_cover}
                  place={val.place_project}
                  id={val.id}
                  childTitle={val.child_title}
                  title={val.title_project}
                />
              );
            })}
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
              <Container>
                <Card>
                  <Container>
                    <Slider {...mediaCoverage}>
                      {media.map((val) => {
                        return (
                          <Col>
                            <Row
                              className="justify-content-center mb-4 align-items-center"
                              style={{ height: "100px", width: "100%" }}
                            >
                              <img
                                alt="..."
                                src={`https://drive.google.com/uc?export=view&id=${val.url}`}
                                width="100%"
                              />
                            </Row>
                          </Col>
                        );
                      })}
                    </Slider>
                  </Container>
                </Card>
              </Container>
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
            {profile.map((val) => {
              return (
                <CardsProfile
                  img={val.url_image}
                  name={val.name}
                  id={val.id}
                  url={val.url_linkedin}
                  position={val.position}
                />
              );
            })}
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
        <Link href="/">
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
        </Link>
      </div>
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
