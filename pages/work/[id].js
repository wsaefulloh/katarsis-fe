import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Fade from 'react-reveal/Fade';

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";

// core components

import CardsGallery from "../../components/Cards/CardsGallery";

import { fetchWrapper } from "../../helpers/fetch-wrapper";

import Slider from "react-slick";

import "../../assets/css/main/main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import HomeFooterDetails from "../../components/Footers/HomeFooterDetails";

function Work() {
  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(6, url_page.length);

  const [projects, setProjects] = useState({});
  const [gallery, setGallery] = useState([]);
  // const [next, setNext] = useState("");
  // const [previous, setPrevious] = useState("");

  const getDetailProject = async () => {
    const data = await fetchWrapper.get(
      `../api/strapi/get-project-details?id=${id}`
    );
    if (data) {
      let object = data.data;
      setProjects(object[0]);
      console.log(data);
    }
  };

  const getFile = async () => {
    const data = await fetchWrapper.get(`../api/strapi/get-project-file?id=${id}`);
    if (data) {
      setGallery(data.data);
      console.log(data)
    }
  };

  // const getNextandPrevious = async (submenu) => {
  //   const data = await fetchWrapper.get(
  //     `../api/new-project/get-next-previous?id_project=${id}&submenu=${submenu}`
  //   );
  //   if (data) {
  //     let object = data.data;
  //     let dataObj = object[0];
  //     setNext(dataObj.next);
  //     setPrevious(dataObj.previous);
  //   }
  // };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
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
            `https://admin.katarsis.co.id${projects.attributes?.images_cover?.data?.attributes?.url}` +
            // `https://drive.google.com/uc?export=view&id=${projects.url_image_cover}` +
            ")",
        }}
        className="background_image"
      >
        <h2
          onClick={() => {
            router.push("/");
          }}
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            width: "35px",
            cursor: "pointer",
            color: "#ffffff",
          }}
        >
          BACK
        </h2>
        <div
          className="background_work"
          style={{
            height: "500px",
            width: "100%",
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          {/* {previous == null ? (
            <a href={`#`} style={{ cursor: "unset" }}>
              <div className="col d-flex align-items-center">
                <div className="img-nav"></div>
                <div className="text-right ml-3 text-prevnext">
                  <div style={{ color: "transparent" }}>PREVIOUS</div>
                  <div style={{ color: "transparent" }}>PROJECT</div>
                </div>
              </div>
            </a>
          ) : (
            <a href={`/work/${previous}`}>
              <div className="col d-flex align-items-center">
                <img
                  className="img-nav"
                  src={require("assets/img/icons/common/Group 24 (1).png")}
                />
                <div className="text-right ml-3 text-prevnext">
                  <div style={{ color: "#ffffff" }}>PREVIOUS</div>
                  <div style={{ color: "#ffffff" }}>PROJECT</div>
                </div>
              </div>
            </a>
          )} */}

          <div
            style={{
              padding: "0px",
            }}
            className="col justify-content-center mx-auto"
          >
            <div className=" mx-auto" style={{ width: "180px" }}>
              <a href={`${projects?.url_video}`}>
                <a target="_blank">
                  <Fade bottom duration={2000}>
                    <div
                      // data-aos="fade-up"
                      className="button_header mx-auto text-center"
                    >
                      <h5 className="m-0 p-0" style={{ color: "#ffffff" }}>
                        WATCH THE VIDEO
                      </h5>
                    </div>
                  </Fade>

                </a>
              </a>
            </div>
          </div>

          {/* {next == null ? (
            <a href={`#`} style={{ cursor: "unset" }}>
              <div className="col d-flex align-items-center justify-content-end">
                <div className="text-left mr-3 text-prevnext">
                  <div style={{ color: "transparent" }}>NEXT</div>
                  <div style={{ color: "transparent" }}>PROJECT</div>
                </div>
                <div className="img-nav"></div>
              </div>
            </a>
          ) : (
            <a href={`/work/${next}`}>
              <div className="col d-flex align-items-center justify-content-end">
                <div className="text-left mr-3 text-prevnext">
                  <div style={{ color: "#ffffff" }}>NEXT</div>
                  <div style={{ color: "#ffffff" }}>PROJECT</div>
                </div>
                <img
                  src={require("assets/img/icons/common/Group 24.png")}
                  className="img-nav"
                />
              </div>
            </a>
          )} */}
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
                  <h2 className="m-0 p-0">{`${projects?.attributes?.title_project}`}</h2>
                </div>
              </Col>
              <Col className="m-0 p-0">
                <div
                  className="d-flex align-items-center "
                  style={{ height: "100px" }}
                >
                  <div className="mx-4 p-0" style={{ fontSize: "10px" }}>
                    {`${projects?.attributes?.short_desc}`}
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
                    <Fade bottom duration={2000}>
                      <div
                        // data-aos="fade-up"
                        className="py-1 arrow_hover "
                        style={{ width: "fit-content", cursor: "pointer" }}
                      >
                        {`${projects?.attributes?.menu?.data?.attributes?.title}`}
                      </div>
                    </Fade>

                  </a>
                </div>
              </Col>
              <Col className="m-0 p-0">
                <Fade bottom duration={2000}></Fade>
                <div
                  // data-aos="fade-up"
                  className="d-flex align-items-center "
                  style={{ height: "100px" }}
                >
                  <div className="mx-4 p-0">{`${projects?.attributes?.year_project}, ${projects?.attributes?.place_project}`}</div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Fade bottom duration={2000}>
        <div
          // data-aos="fade-up"
          className="display-small">
          <div className="m-0 p-0" style={{ borderBottom: "1px solid #000000" }}>
            <Container>
              <div className="m-0 p-0">
                <Fade bottom duration={2000}>
                  <div
                    // data-aos="fade-up"
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "100px" }}
                  >
                    <h2 className="m-0 p-0">{`${projects?.attributes?.title_project}`}</h2>
                  </div>
                </Fade>

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
                  <Fade bottom duration={2000}>
                    <div
                      // data-aos="fade-up"
                      className="m-0 p-0"
                      style={{ fontSize: "10px" }}
                    >
                      {`${projects?.attributes?.short_desc}`}
                    </div>
                  </Fade>

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
                      <Fade bottom duration={2000}>
                        <div
                          // data-aos="fade-up"
                          className="py-1 arrow_hover "
                          style={{ width: "fit-content", cursor: "pointer" }}
                        >
                          {`${projects?.attributes?.menu?.data?.attributes?.title}`}
                        </div>
                      </Fade>
                    </a>
                  </div>
                </Col>
                <Col className="m-0 p-0">
                  <div
                    className="d-flex align-items-center justify-content-center text-center"
                    style={{ height: "100px" }}
                  >
                    <Fade bottom duration={2000}>
                      <div
                        // data-aos="fade-up"
                        className="mx-4 p-0"
                      >{`${projects?.attributes?.year_project}, ${projects?.attributes?.place_project}`}</div>
                    </Fade>

                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fade>

      <Fade bottom duration={2000}>
        <div
          // data-aos="fade-up"
          className="py-4">
          <Container>
            <h3>About</h3>
            <div>{`${projects?.attributes?.about}`}</div>
          </Container>
        </div>
      </Fade>


      <div
        className="my-3"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <Fade bottom duration={2000}>
        <div
          //  data-aos="fade-up" 
          className="py-4">
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

      </Fade>


      <Fade bottom duration={2000}>
        <div
          // data-aos="fade-up"
          className="display-large">
          <div className="py-4">
            <Container>
              <Row className="m-0 p-0 align-items-center">
                <Col className="m-0 p-0">
                  <h3>{`${projects?.attributes?.metrics_one_desc}`}</h3>
                  <div
                    style={{
                      color: "#FF0000",
                    }}
                  >
                    {`${projects?.attributes?.metrics_one_title}`}
                  </div>
                </Col>
                <Col className="m-0 p-0">
                  <h3>{`${projects?.attributes?.metrics_two_desc}`}</h3>
                  <div
                    style={{
                      color: "#FF0000",
                    }}
                  >
                    {`${projects?.attributes?.metrics_two_title}`}
                  </div>
                </Col>
                <Col className="m-0 p-0">
                  {projects?.attributes?.desc_result !== null ? (
                    <h3>{`${projects?.attributes?.desc_result}`}</h3>
                  ) : (
                    <></>
                  )}

                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fade>


      <Fade bottom duration={2000}>
        <div
          // data-aos="fade-up"
          className="display-small">
          <div className="py-4">
            <Container>
              <Row className="m-0 p-0 align-items-center">
                <Col className="m-0 p-0">
                  <h3>{`${projects?.attributes?.metrics_one_desc}`}</h3>
                  <div
                    style={{
                      color: "#FF0000",
                    }}
                  >
                    {`${projects?.attributes?.metrics_one_title}`}
                  </div>
                </Col>
                <Col className="m-0 p-0">
                  <h3>{`${projects?.attributes?.metrics_two_desc}`}</h3>
                  <div
                    style={{
                      color: "#FF0000",
                    }}
                  >
                    {`${projects?.attributes?.metrics_two_title}`}
                  </div>
                </Col>
              </Row>
              <Row className="pt-4">
                <Col className="m-0 p-0">
                  {projects?.attributes?.desc_result !== null ? (
                    <h1>{`${projects?.attributes?.desc_result}`}</h1>
                  ) : (
                    <></>
                  )}
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Fade>


      <div className="py-4">
        <Container className="p-0">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            {gallery.map((val) => {
              return (
                <Fade bottom duration={2000}>
                  <div
                  // data-aos="fade-up"
                  >
                    <CardsGallery
                      img={val.attributes?.images?.data?.attributes?.url}
                      place={val?.attributes?.place}
                      id={val?.attributes?.id}
                      childTitle={val?.attributes?.title}
                      title={val?.attributes?.project?.data?.attributes?.title_project}
                    />
                  </div>
                </Fade>

              );
            })}
          </div>
        </Container>
      </div>
      {projects?.attributes?.url_website !== null ? (
        <Fade bottom duration={2000}>
          <div
          // data-aos="fade-up"
          >
            <Container className="d-flex align-items-center justify-content-center">
              <a href={`${projects?.attributes?.url_website}`}>
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
                    {`${projects?.attributes?.url_website}`}
                  </h3>
                </a>
              </a>
            </Container>
          </div>
        </Fade>

      ) : (
        <></>
      )}

      <Fade bottom duration={2000}>
        <div
          // data-aos="fade-up"
          className="pt-5 d-flex align-items-center text-center justify-content-center"
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
          }}
        >
          {/* {previous == null ? (
          <a href={`#`} style={{ cursor: "unset", width: "250px" }}>
            <div className="col d-flex align-items-center">
              <div className="img-nav"></div>
              <div className="text-right ml-3 text-prevnext">
                <div style={{ color: "transparent" }}>PREVIOUS</div>
                <div style={{ color: "transparent" }}>PROJECT</div>
              </div>
            </div>
          </a>
        ) : (
          <a href={`/work/${previous}`} style={{ width: "250px" }}>
            <div className="col d-flex align-items-center">
              <img
                src={require("assets/img/icons/common/Group 24 (3).png")}
                className="img-nav"
              />
              <div className="text-right ml-3 text-prevnext">
                <div>PREVIOUS</div>
                <div>PROJECT</div>
              </div>
            </div>
          </a>
        )} */}
          <div className="col">
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
                  className="img-nav"
                />
                <div className="pt-2">TOP</div>
              </div>
            </Link>
          </div>

          {/* {next == null ? (
          <a href={`#`} style={{ cursor: "unset", width: "250px" }}>
            <div className="col d-flex align-items-center justify-content-end">
              <div className="text-right mr-3 text-prevnext">
                <div style={{ color: "transparent" }}>NEXT</div>
                <div style={{ color: "transparent" }}>PROJECT</div>
              </div>
              <div className="img-nav"></div>
            </div>
          </a>
        ) : (
          <a href={`/work/${next}`} style={{ width: "250px" }}>
            <div className="col d-flex align-items-center justify-content-end">
              <div className="text-left mr-3 text-prevnext">
                <div>NEXT</div>
                <div>PROJECT</div>
              </div>
              <img
                src={require("assets/img/icons/common/Group 24 (2).png")}
                className="img-nav"
              />
            </div>
          </a>
        )} */}
        </div>
      </Fade>


      <HomeFooterDetails />
    </>
  );
}

export default Work;
