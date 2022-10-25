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

function CardsProject() {
  return (
    <>
      <Col>
        <Card>
          <div
            className="background_parent"
            style={{
              height: "300px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <div className="background_image">
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
                    Relive the magic of movie theatre 1950s
                  </h1>
                  <div style={{ color: "#ffffff" }}>
                    Drive-In Senja, Alam Sutera
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default CardsProject;
