import React, { useEffect, useState } from "react";
import { API_APPS_HOST } from "../config/index";
import Fade from 'react-reveal/Fade';

// reactstrap components
import { Button, Card, Container, Row, Col, Modal, Spinner } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";

import Filter from "../components/Filter/Filter";
import SliderProcess from "../components/SliderProcess/SliderProcess";
import WorkflowGraph from "../components/WorkflowGraph/WorkflowGraph";
import CardsProject from "../components/Cards/CardsProjects";
import HomeFooter from "../components/Footers/HomeFooter";
import CardsCareer from "../components/Cards/CardsCareer";
// core components

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";

import { Link, animateScroll as scroll } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";

import "../assets/css/main/main.module.css";
import HomeNavbar from "../components/Navbars/HomeNavbar";

function Career() {
  const [departement, setDepartement] = useState([]);
  const [status, setStatus] = useState({});
  const [video, setVideo] = useState();
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [homepage, setHomepage] = useState({});
  const [whatsapp, setWhatsapp] = useState("");

  const API_APPS_HOST = process.env.NEXT_PUBLIC_API_HOST;

  const getAllDepartement = async () => {
    const data = await fetchWrapper.get(`api/strapi/career/get-departement`);
    if (data) {
      setDepartement(data.data);
    }
  };

  const getStatus = async () => {
    const data = await fetchWrapper.get(`api/strapi/career/get-status-career`);
    if (data) {
      let obj = data.data;
      setStatus(obj[0].attributes.status);
    }
  };

  const getHomepage = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-homepage`);
    if (data) {
      setHomepage(data?.data?.attributes)
    }
  };

  const getWhatsapp = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-link?type=whatsapp`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setWhatsapp(link.attributes.url);
    }
  };

  const getAllData = async () => {
    setIsLoadingPage(true)
    await getStatus();
    setIsLoadingPage(false)
    await getWhatsapp();
    await getHomepage();
    await getAllDepartement();
  };

  useEffect(() => {
    getAllData();

    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);

  }, []);

  return (
    <>
      <HomeNavbar whatsapp={whatsapp} activeScroll={null} logoUrl={`${API_APPS_HOST}${homepage?.logo?.data?.attributes?.url ?? undefined}`} />
      {isLoadingPage ? (
        <Container className="py-4 text-center">
          <Spinner
            color="light"
            type="grow"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            Loading...
          </Spinner>
          <Spinner
            color="light"
            type="grow"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            Loading...
          </Spinner>
          <Spinner
            color="light"
            type="grow"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            Loading...
          </Spinner>
        </Container>
      ) : (
        <>
          {status == "true" || status == "True" || status == true ? (
            <>
              {departement.map((val, index) => {
                if (index == departement.length - 1) {
                  return (
                    <>
                      <Container>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                      </Container>
                      <div data-aos="fade-up">
                        <CardsCareer
                          job_description={val.attributes.job_description}
                          requirements={val.attributes.requirements}
                          title_departement={val.attributes.title_career_content}
                          url={val.attributes.url}
                          id={val.id}
                          last={true}
                        />
                      </div>
                      <Container>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                      </Container>
                    </>
                  );
                } else if (index == 0) {
                  return (
                    <>
                      <div data-aos="fade-up">
                        <CardsCareer
                          job_description={val.attributes.job_description}
                          requirements={val.attributes.requirements}
                          title_departement={val.attributes.title_career_content}
                          url={val.attributes.url}
                          id={val.id}
                          last={false}
                        />
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Container>
                        <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                      </Container>
                      <div data-aos="fade-up">
                        <CardsCareer
                          job_description={val.attributes.job_description}
                          requirements={val.attributes.requirements}
                          title_departement={val.attributes.title_career_content}
                          url={val.attributes.url}
                          id={val.id}
                          last={false}
                        />
                      </div>
                    </>
                  );
                }
              })}
            </>
          ) : (
            <>
              {/* <Container>
                <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
              </Container> */}
              <div data-aos="fade-up"
                className="py-3" style={{ marginTop: "150px", marginBottom: "150px" }}>
                <Container>
                  <div className="text-center justify-content-center">
                    <h1
                      className="title_section"
                      style={{
                        color: "#FFFFFF",
                        fontStyle: "bold",
                      }}
                    >
                      Coming Soon ...
                    </h1>
                  </div>
                </Container>
              </div>
              <Container>
                <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
              </Container>
            </>
          )}
        </>
      )}
    </>
  );
}

Career.layout = HomeLayout;

export default Career;
