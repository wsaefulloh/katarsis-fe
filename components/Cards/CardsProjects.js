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

function CardsProject(props) {
  let { id, img, place, title, childTitle } = props;
  return (
    <>
      <Col>
        <Card className="content">
          <Link href={`/work/${id}`}>
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
                    <h1 style={{ color: "#ffffff", fontSize: "28px" }}>
                      {`${childTitle}`}
                    </h1>
                    <div
                      style={{ color: "#ffffff" }}
                    >{`${title}, ${place}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      </Col>
    </>
  );
}

CardsProject.propTypes = {
  id: PropTypes.any,
  img: PropTypes.any,
  place: PropTypes.any,
  title: PropTypes.any,
  childTitle: PropTypes.any,
};

export default CardsProject;
