import React, { useEffect, useState } from "react";
import { API_APPS_HOSTE } from "../config/index2";
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
      <div id="top">
        {/* <iframe
          src="https://drive.google.com/file/d/1A13ARf1AdzIubv7aGc4ZgmN5eXz8IaU_/preview"
          width="100%"
          height="300px"
          allow="autoplay"
        ></iframe> */}
        {/* <iframe
          style={{ border: "unset" }}
          src="http://drive.google.com/file/d/1A13ARf1AdzIubv7aGc4ZgmN5eXz8IaU_/preview"
          width="100%"
          height="480"
          allow="autoplay"
        ></iframe> */}
        {video ? (
          <video
            style={{
              width: "100%",
              maxHeight: "400px",
              objectFit: "contain",
              backgroundColor: "#000000",
            }}
            // autoplay="autoplay"
            // loop="true"
            controls
          >
            {/* <source src={require("assets/Katarsis HD.mp4")} type="video/mp4" /> */}
            <source src={`https://admin.katarsis.co.id${video}`} type="video/mp4" />
          </video>
        ) : (
          <></>
        )}

      </div>
      {status == "true" || status == "True" || status == true ? (
        <>
          <Fade bottom duration={2000}>
            <div
              // data-aos="fade-up"
              className="my-5 py-3">
              <Container>
                <div className="text-center justify-content-center">
                  <h1
                    className="title_section"
                    style={{
                      color: "#000000",
                      fontStyle: "bold",
                    }}
                  >
                    We're Hiring
                  </h1>
                  <div>what role would you like to be cast for?</div>
                </div>
              </Container>
            </div>
          </Fade>


          {departement.map((val, index) => {
            if (index == departement.length - 1) {
              return (
                <Fade bottom duration={2000}>
                  <div
                  // data-aos="fade-up"
                  >
                    <CardsCareer
                      description_departement={val.attributes.description_departement}
                      title_departement={val.attributes.title_departement}
                      id={val.id}
                      last={true}
                    />
                  </div>
                </Fade>

              );
            } else {
              return (
                <Fade bottom duration={2000}>
                  <div
                  // data-aos="fade-up"
                  >
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
          <Fade bottom duration={2000}>
            <div
              // data-aos="fade-up"
              className="mt-5 py-3">
              <Container>
                <div className="text-center justify-content-center">
                  <h1
                    className="title_section"
                    style={{
                      color: "#000000",
                      fontStyle: "bold",
                    }}
                  >
                    Coming Soon
                  </h1>
                </div>
              </Container>
            </div>
          </Fade>
        </>
      )}
      <Fade bottom duration={2000}>
        <div
          // data-aos="fade-up"
          className="pt-5 text-center justify-content-center"
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
      </Fade>

    </>
  );
}

Career.layout = HomeLayout;

export default Career;
