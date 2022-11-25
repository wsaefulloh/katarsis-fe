import React, { useEffect, useState } from "react";

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

  const getAllDepartement = async () => {
    const data = await fetchWrapper.get(`api/get-departement`);
    if (data) {
      setDepartement(data.data);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    getAllDepartement();
  }, []);

  return (
    <>
      <div>
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
          <source src={require("assets/Katarsis HD.mp4")} type="video/mp4" />
        </video>
      </div>
      <div id="top" data-aos="fade-up" className="my-5 py-3">
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

      {departement.map((val, index) => {
        if (index == departement.length - 1) {
          return (
            <div data-aos="fade-up">
              <CardsCareer
                description_departement={val.description_departement}
                title_departement={val.title_departement}
                id={val.id}
                last={true}
              />
            </div>
          );
        } else {
          return (
            <div data-aos="fade-up">
              <CardsCareer
                description_departement={val.description_departement}
                title_departement={val.title_departement}
                id={val.id}
                last={false}
              />
            </div>
          );
        }
      })}

      <div
        data-aos="fade-up"
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
    </>
  );
}

Career.layout = HomeLayout;

export default Career;
