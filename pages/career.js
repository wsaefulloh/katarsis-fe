import React, { useEffect, useState } from "react";
import { API_APPS_HOST } from "../config/index";
import Fade from 'react-reveal/Fade';

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
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

function Career() {
  const [departement, setDepartement] = useState([]);
  const [status, setStatus] = useState({});
  const [video, setVideo] = useState();

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

  const getVideo = async () => {
    const data = await fetchWrapper.get(`api/strapi/career/get-video`);
    if (data) {
      let obj = data.data;
      setVideo(obj.attributes.video.data.attributes.url);
      // console.log(`https://admin.katarsis.co.id${obj.attributes.video.data.attributes.url}`)
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    getAllDepartement();
    getStatus();
    getVideo();
  }, []);

  return (
    <>

      {status == "true" || status == "True" || status == true ? (
        <>
          {departement.map((val, index) => {
            if (index == departement.length - 1) {
              return (
                <Fade bottom duration={2000}>
                  <Container>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                  </Container>
                  <div>
                    <CardsCareer
                      job_description={val.attributes.job_description}
                      requirements={val.attributes.requirements}
                      title_departement={val.attributes.title_departement}
                      id={val.id}
                      last={true}
                    />
                  </div>
                  <Container>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                  </Container>
                </Fade>
              );
            } else {
              return (
                <Fade bottom duration={2000}>
                  <Container>
                    <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                  </Container>
                  <div>
                    <CardsCareer
                      description_departement={val.attributes.description_departement}
                      title_departement={val.attributes.title_departement}
                      id={val.id}
                      last={false}
                    />
                  </div>
                </Fade>
              );
            }
          })}
        </>
      ) : (
        <>
          <Container>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
          </Container>
          <Fade bottom duration={2000}>
            <div
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
          </Fade>
          <Container>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
          </Container>
        </>
      )}

    </>
  );
}

Career.layout = HomeLayout;

export default Career;
