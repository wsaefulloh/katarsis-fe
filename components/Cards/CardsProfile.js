import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";

import "../../assets/css/main/main.module.css";

import PropTypes from "prop-types";

function CardsProfile(props) {
  let { img, name, id, url, position } = props;

  return (
    <>
      <Col>
        <div
          className="mx-auto"
          style={{ width: "340px", marginBottom: "30px" }}
        >
          <img
            src={`https://drive.google.com/uc?export=view&id=${img}`}
            alt="A random image from Flickr"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
          <div className="mt-2">
            <div className="d-flex align-items-center">
              <h1 className="m-0 py-2 pr-2">Lorem Ipsum</h1>
              <Link href={`${url}`}>
                <a target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    height="25px"
                    viewBox="0 0 50 50"
                    style={{ fill: "#000000" }}
                  >
                    <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path>
                  </svg>
                </a>
              </Link>
            </div>

            <div>CO-FOUNDER KATARSIS</div>
          </div>
        </div>
      </Col>
    </>
  );
}

CardsProfile.propTypes = {
  img: PropTypes.any,
  name: PropTypes.any,
  id: PropTypes.any,
  url: PropTypes.any,
  position: PropTypes.any,
};

export default CardsProfile;
