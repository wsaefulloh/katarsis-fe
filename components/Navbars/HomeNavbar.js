import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";
import React, { useState } from "react";
import "../../assets/css/main/main.module.css";
import { Container, NavbarBrand } from "reactstrap";
import { useRouter } from "next/router";

const MENU_LIST = [
  { text: "About", href: "/", link: "top" },
  { text: "Work", href: "/#work", link: "work" },
  { text: "Career", href: "/career", link: "career" },
  { text: "Contact", href: "/#footer_id", link: "footer_id" },
];

const NavItem = ({ text, href, active, link }) => {
  console.log(active);

  if (link == "career" || link == "about") {
    return (
      <a href={href}>
        <div style={{ cursor: "pointer" }} className="px-3 nav__link">
          <a>{text}</a>
        </div>
      </a>
    );
  } else {
    return (
      <Link
        activeClass="active"
        to={link}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <a href={href}>
          <div style={{ cursor: "pointer" }} className="px-3 nav__link">
            <a>{text}</a>
          </div>
        </a>
      </Link>
    );
  }
};

const HomeNavbar = () => {
  const [navActive, setNavActive] = useState(null);

  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const url_page = router.asPath;
  const [url, setUrl] = useState(`${url_page}`);
  console.log(url_page);

  return (
    <header>
      <nav className="shadow-sm">
        <Container className="d-flex align-items-center justify-content-between">
          <a href="/">
            <span>
              <NavbarBrand href="/">
                <img
                  alt="..."
                  src={require("assets/img/brand/Logo Katarsis png.png")}
                  height="20px"
                />
              </NavbarBrand>
            </span>
          </a>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU_LIST.map((menu, idx) => {
              console.log(`${menu.href}`);
              console.log(url_page === `${menu.href}`);
              console.log(idx);
              return (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                    setUrl(`${menu.href}`);
                  }}
                  key={menu.text}
                >
                  <NavItem active={url === `${menu.href}`} {...menu} />
                </div>
              );
            })}
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default HomeNavbar;
