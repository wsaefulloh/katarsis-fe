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
// core components

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";

import Link from "next/link";

import "../assets/css/main/main.module.css";

function Career() {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col className="text-center justify-content-center">
          <h1 style={{ fontSize: "48px" }}>Coming Soon</h1>
          <div
            className="mx-auto mt-3"
            style={{
              backgroundColor: "#000000",
              height: "5px",
              width: "20px",
            }}
          ></div>
        </Col>
      </div>
      <HomeFooter />
    </>
  );
}

export default Career;
