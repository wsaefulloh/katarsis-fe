import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components

import HomeFooter from "../../components/Footers/HomeFooter";
import CardsGallery from "../../components/Cards/CardsGallery";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Slider from "react-slick";

import "../../assets/css/main/main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";

function Work() {
  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(6, url_page.length);

  const [projects, setProjects] = useState({});
  const [gallery, setGallery] = useState([]);

  const getDetailProject = async () => {
    const data = await fetchWrapper.get(
      `../api/project/detail-project?id_project=${id}`
    );
    if (data) {
      let object = data.data;
      setProjects(object[0]);
      console.log();
    }
  };

  const getFile = async () => {
    const data = await fetchWrapper.get(`../api/gallery?id_project=${id}`);
    if (data) {
      setGallery(data.data);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
    getDetailProject();
    getFile();
  }, []);

  return (
    <>
      <div
        id="top_work"
        style={{
          height: "500px",
          width: "100%",
          backgroundImage:
            "url(" +
            `https://drive.google.com/uc?export=view&id=${projects.url_image_cover}` +
            ")",
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
            <a href={`${projects.url_video}`}>
              <a target="_blank">
                <div data-aos="fade-up" className="button_header">
                  <h5 className="m-0 p-0" style={{ color: "#ffffff" }}>
                    WATCH THE VIDEO
                  </h5>
                </div>
              </a>
            </a>
          </div>
        </div>
      </div>
      <div className="display-large">
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
                  <h2 className="m-0 p-0">{`${projects.title_project}`}</h2>
                </div>
              </Col>
              <Col className="m-0 p-0">
                <div
                  className="d-flex align-items-center "
                  style={{ height: "100px" }}
                >
                  <div className="mx-4 p-0" style={{ fontSize: "10px" }}>
                    {`${projects.short_desc}`}
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
                  <a href={`/`}>
                    <div
                      data-aos="fade-up"
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      {`${projects.type_project}`}
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="m-0 p-0">
                <div
                  data-aos="fade-up"
                  className="d-flex align-items-center "
                  style={{ height: "100px" }}
                >
                  <div className="mx-4 p-0">{`${projects.year_project}, ${projects.place_project}`}</div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div data-aos="fade-up" className="display-small">
        <div className="m-0 p-0" style={{ borderBottom: "1px solid #000000" }}>
          <Container>
            <div className="m-0 p-0">
              <div
                data-aos="fade-up"
                className="d-flex align-items-center justify-content-center"
                style={{ height: "100px" }}
              >
                <h2 className="m-0 p-0">{`${projects.title_project}`}</h2>
              </div>
            </div>
          </Container>
          <div
            style={{ height: "1px", backgroundColor: "#000000", width: "100%" }}
          ></div>
          <Container>
            <div className="m-0 p-0">
              <div
                className="d-flex align-items-center justify-content-center text-center"
                style={{ height: "100px" }}
              >
                <div
                  data-aos="fade-up"
                  className="m-0 p-0"
                  style={{ fontSize: "10px" }}
                >
                  {`${projects.short_desc}`}
                </div>
              </div>
            </div>
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
                  className="d-flex align-items-center justify-content-center text-center"
                  style={{ height: "100px" }}
                >
                  <a href={`/`}>
                    <div
                      data-aos="fade-up"
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      {`${projects.type_project}`}
                    </div>
                  </a>
                </div>
              </Col>
              <Col className="m-0 p-0">
                <div
                  className="d-flex align-items-center justify-content-center text-center"
                  style={{ height: "100px" }}
                >
                  <div
                    data-aos="fade-up"
                    className="mx-4 p-0"
                  >{`${projects.year_project}, ${projects.place_project}`}</div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div data-aos="fade-up" className="py-4">
        <Container>
          <h3>About</h3>
          <div>{`${projects.about}`}</div>
        </Container>
      </div>

      <div
        className="my-3"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up" className="py-4">
        <Container>
          <h1 className="pb-2">Result</h1>
          <div
            style={{
              backgroundColor: "#000000",
              height: "2px",
              width: "180px",
            }}
          ></div>
        </Container>
      </div>

      <div data-aos="fade-up" className="display-large">
        <div className="py-4">
          <Container>
            <Row className="m-0 p-0 align-items-center">
              <Col className="m-0 p-0">
                <h3>{`${projects.impression_result}`}</h3>
                <div
                  style={{
                    color: "#FF0000",
                  }}
                >
                  Accounts Reached
                </div>
              </Col>
              <Col className="m-0 p-0">
                <h3>{`${projects.media_result}`}</h3>
                <div
                  style={{
                    color: "#FF0000",
                  }}
                >
                  Social Media Impression
                </div>
              </Col>
              <Col className="m-0 p-0">
                <h3>{`${projects.desc_result}`}</h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div data-aos="fade-up" className="display-small">
        <div className="py-4">
          <Container>
            <Row className="m-0 p-0 align-items-center">
              <Col className="m-0 p-0">
                <h1>{`${projects.impression_result}`}</h1>
                <div
                  style={{
                    color: "#FF0000",
                  }}
                >
                  Accounts Reached
                </div>
              </Col>
              <Col className="m-0 p-0">
                <h1>{`${projects.media_result}`}</h1>
                <div
                  style={{
                    color: "#FF0000",
                  }}
                >
                  Social Media Impressions
                </div>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col className="m-0 p-0">
                <h1>{`${projects.desc_result}`}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="py-4">
        <Container className="p-0">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            {gallery.map((val) => {
              return (
                <div data-aos="fade-up">
                  <CardsGallery
                    img={val.url}
                    place={val.place}
                    id={val.id}
                    childTitle={val.title}
                    title={val.name_project}
                  />
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <div data-aos="fade-up">
        <Container className="d-flex align-items-center justify-content-center">
          <a href={`${projects.url_website}`}>
            <a target="_blank">
              <h3
                style={{
                  padding: "15px",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                {`${projects.url_website}`}
              </h3>
            </a>
          </a>
        </Container>
      </div>

      <div
        data-aos="fade-up"
        className="pt-3 text-center justify-content-center"
      >
        <Link
          activeClass="active"
          to={"top_work"}
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

      <HomeFooter />
    </>
  );
}

export default Work;
