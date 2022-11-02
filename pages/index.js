import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
import Filter from "../components/Filter/Filter";
import SliderProcess from "../components/SliderProcess/SliderProcess";
import WorkflowGraph from "../components/WorkflowGraph/WorkflowGraph";
import CardsProject from "../components/Cards/CardsProjects";
import CardsProfile from "../components/Cards/CardsProfile";
import AOS from "aos";
import "aos/dist/aos.css";

// core components

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";

import "../assets/css/main/main.module.css";

function Home() {
  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
  const [HWDI, setHWDI] = useState({});
  const [ourTeam, setOurTeam] = useState({});

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

  const getHowWeDoIt = async () => {
    const data = await fetchWrapper.get(`api/content/get-how`);
    if (data) {
      let obj = data.data;
      setHWDI(obj[0]);
    }
  };

  const getOurTeam = async () => {
    const data = await fetchWrapper.get(`api/content/get-our-team`);
    if (data) {
      let obj = data.data;
      setOurTeam(obj[0]);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    getDataProfile();
    getDataOriginalIP();
    getDataMedia();
    getHowWeDoIt();
    getOurTeam();
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
            <div data-aos="fade-up" className="text-center header-cover">
              <div className="pb-4 text_vision_mision">Our Vision</div>
              <h1 className="m-0 pb-4 text_title_vision_mision">
                We believe in quality-experiential entertainment to empower
                Indonesia’s creative potential.
              </h1>
            </div>
          </div>

          <div>
            <div className="text-center header-cover">
              <div className="pb-4 text_vision_mision">Our Mission</div>
              <h1 className="m-0 pb-4 text_title_vision_mision">
                We aim to entertain and inspire through dramatic experiences,
                transmedia storytelling and creative imagineering.
              </h1>
            </div>
          </div>
        </Slider>
      </div>
      <div data-aos="fade-up">{renderFilter}</div>

      <div id="work" className="py-5" style={{ backgroundColor: "#000000" }}>
        <Container className="pb-5">
          <div
            data-aos="fade-up"
            style={{ color: "#ffffff", paddingLeft: "15px", fontSize: "16px" }}
          >
            {`Work / ${menu}`}
          </div>
        </Container>

        <Container>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            {project.map((val) => {
              return (
                <div data-aos="fade-up">
                  <CardsProject
                    img={val.url_image_cover}
                    place={val.place_project}
                    id={val.id}
                    childTitle={val.child_title}
                    title={val.title_project}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      <div className="pt-5 pb-4">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              data-aos="fade-up"
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              How We Do It
            </h1>
            <div
              data-aos="fade-up"
              style={{
                width: "180px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <h2
              data-aos="fade-up"
              style={{
                color: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="py-4"
            >
              {`${HWDI.title}`}
            </h2>
            <div
              data-aos="fade-up"
              className="desc_section"
              style={{
                maxWidth: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#000000",
              }}
            >
              {`${HWDI.description}`}
            </div>
          </div>
        </Container>
      </div>

      <div data-aos="fade-up">
        <SliderProcess />
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up">
        <WorkflowGraph />
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up" className="pb-5 pt-3">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Media Coverage
            </h1>
            <div
              style={{
                width: "180px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <div className="media_coverage">
              <Container>
                <Card className="content">
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

      <div data-aos="fade-up" className="pt-3">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Our Team
            </h1>
            <div
              style={{
                width: "180px",
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
        <Container className="display-large">
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 box">
            {profile.map((val) => {
              return (
                <div data-aos="fade-up">
                  <CardsProfile
                    img={val.url_image}
                    name={val.name}
                    id={val.id}
                    url={val.url_linkedin}
                    position={val.position}
                  />
                </div>
              );
            })}
          </div>
        </Container>

        <div className="display-small media_coverage">
          <Container>
            <Card className="content">
              <Container>
                <Slider {...slider}>
                  {profile.map((val) => {
                    return (
                      <div data-aos="fade-up">
                        <CardsProfile
                          img={val.url_image}
                          name={val.name}
                          id={val.id}
                          url={val.url_linkedin}
                          position={val.position}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Container>
            </Card>
          </Container>
        </div>
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <Container>
        <div
          data-aos="fade-up"
          className="pb-5 desc_section"
          style={{
            color: "#000000",
            paddingLeft: "50px",
            paddingRight: "50px",
            textAlign: "justify",
          }}
        >
          {`${ourTeam.description}`}
        </div>
      </Container>

      <img
        data-aos="fade-up"
        src={`https://drive.google.com/uc?export=view&id=${ourTeam.url_image}`}
        alt="A random image from Flickr"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      <div
        data-aos="fade-up"
        className="pt-3 text-center justify-content-center"
      >
        <Link
          activeClass="active"
          to={"top"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <img
              src={require("assets/img/icons/common/up.svg")}
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
