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

function CardsGallery(props) {
  let { id, img, place, title, childTitle } = props;
  return (
    <>
      <Col>
        <Card className="content">
          <div
            className="background_parent"
            style={{
              height: "300px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <div
              className="background_image"
              style={{
                backgroundImage:
                  "url(" +
                  `https://drive.google.com/uc?export=view&id=${img}` +
                  ")",
              }}
            >
              <div
                className="background_cover"
                style={{
                  height: "300px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    padding: "30px",
                  }}
                >
                  <h1
                    className="child_title_project"
                    style={{ color: "#ffffff" }}
                  >
                    {`${childTitle}`}
                  </h1>
                  <div
                    className="title_project"
                    style={{ color: "#ffffff" }}
                  >{`${title}, ${place}`}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

CardsGallery.propTypes = {
  id: PropTypes.any,
  img: PropTypes.any,
  place: PropTypes.any,
  title: PropTypes.any,
  childTitle: PropTypes.any,
};

export default CardsGallery;
