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
} from "reactstrap";

import "../../assets/css/main/main.module.css";

import Cookie from "js-cookie";

function HomeNavbarAdmin() {
  const router = useRouter();
  const url_page = router.asPath;

  const handleLogout = async (e) => {
    Cookie.remove("token");
    return router.push("/auth");
  };

  return (
    <>
      <div className="sticky-top">
        <Navbar
          className="navbar-horizontal navbar-main navbar-light shadow-sm bg-white"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <Link href="/">
              <span>
                <NavbarBrand href="/">
                  <img
                    alt="..."
                    src={require("assets/img/brand/DIS_Logo_1 1.png")}
                  />
                </NavbarBrand>
              </span>
            </Link>

            <span className="mx-4 nav-link-inner--text">
              Admin Panel Drive-In Senja
            </span>

            <button
              aria-controls="navbar-collapse"
              aria-expanded={false}
              aria-label="Toggle navigation"
              className="navbar-toggler"
              data-target="#navbar-collapse"
              data-toggle="collapse"
              id="navbar-collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <UncontrolledCollapse
              className="navbar-custom-collapse justify-content-end"
              navbar
              toggler="#navbar-collapse"
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link href="/">
                      <a target="" href="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/DIS_Logo_1 1.png")}
                        />
                      </a>
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      aria-controls="navbar-collapse"
                      aria-expanded={true}
                      aria-label="Toggle navigation"
                      className="navbar-toggler"
                      data-target="#navbar-collapse"
                      data-toggle="collapse"
                      id="navbar-collapse"
                      type="button"
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>
                <NavItem className="m-0">
                  <a target="" href="/auth">
                    <NavLink
                      href="/auth"
                      onClick={() => {
                        handleLogout();
                      }}
                      className="py-1"
                    >
                      <span className="nav-link-inner--text navbar__text">
                        Logout
                      </span>
                    </NavLink>
                  </a>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default HomeNavbarAdmin;
