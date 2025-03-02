import React, { useEffect, useState } from "react";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import "../../assets/css/main/main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import ProjectLayout from "layouts/Project.js";

function Work() {

  const API_APPS_HOST = process.env.NEXT_PUBLIC_API_HOST;

  const mediaCoverage = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  const mediaCoverage2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
    arrows: false
  };

  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(6, url_page.length);

  const [projects, setProjects] = useState({});
  const [gallery, setGallery] = useState([]);

  const getDetailProject = async () => {
    const data = await fetchWrapper.get(
      `../api/strapi/get-service-details?id=${id}`
    );
    if (data) {
      setProjects(data.data[0]);
    }
  };

  // const getFile = async () => {
  //   const data = await fetchWrapper.get(`../api/strapi/get-project-file?id=${id}`);
  //   if (data) {
  //     setGallery(data.data);
  //     console.log(data)
  //   }
  // };

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
  }, []);

  return (
    <>
      <Container>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
      </Container>
      <Container className="py-4">
        <Row>
          <Col xl='3' className="py-4 d-flex flex-column" style={{ alignItems: "center", justifyContent: "space-between" }}>
            <img
              alt="..."
              src={`${API_APPS_HOST}${projects?.attributes?.image_logo?.data?.attributes?.url}`}
              style={{
                width: "100%",
                paddingBottom: "7.5px",
              }}
            />
          </Col>
          <Col className="py-4 d-flex">
            <div className="py-4">
              <div className="service-title">{projects?.attributes?.name}</div>
              <div className="service-desc">{projects?.attributes?.description}</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl='3' className="py-4 d-flex flex-column" style={{ justifyContent: "end" }}>
            <div className="py-4">
              <div className="service-desc" style={{ marginTop: "0px" }}>{projects?.attributes?.description_image}</div>
            </div>
          </Col>
          <Col xl='9' className="py-4">
            <Slider {...mediaCoverage2} className="pb-4">
              {projects?.attributes?.image_banner_top.data.map((val) => {
                return (
                  <Col>
                    <Row
                      className="justify-content-center align-items-center"
                      style={{ height: "160px", width: "100%" }}
                    >
                      <img
                        src={`${API_APPS_HOST}${val?.attributes?.url}`}
                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                      />
                    </Row>
                  </Col>
                );
              })}
            </Slider>
            <Slider {...mediaCoverage}>
              {projects?.attributes?.image_banner_bottom.data.map((val) => {
                return (
                  <Col>
                    <Row
                      className="justify-content-center align-items-center"
                      style={{ height: "160px", width: "100%" }}
                    >
                      <img
                        src={`${API_APPS_HOST}${val?.attributes?.url}`}
                        style={{ height: "100%", width: "100%", objectFit: "cover" }}
                      />
                    </Row>
                  </Col>
                );
              })}
            </Slider>
          </Col>
        </Row>
      </Container>
      <Container>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
      </Container>
      <Container>
        <Row>
          <Col xl='5' className="py-4 d-flex flex-column justify-content-center">
            <div>
              <div className="service-title">{projects?.attributes?.title}</div>
              <div className="service-desc">{projects?.attributes?.subtitle}</div>
            </div>
          </Col>
          <Col className="py-4 d-flex justify-content-between " xl='7'>
            <Row style={{ width: "100%" }}>
              {projects?.attributes?.metrics.data.map((val) => {
                return (
                  <Col xl='6' className="px-4 py-2 d-flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
                    <div className="service-title">{val.title}</div>
                    <div className="service-title">{val.value}</div>
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
      </Container>
    </>
  );
}

Work.layout = ProjectLayout;

export default Work;
