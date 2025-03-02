import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import "../../assets/css/main/main.module.css";
import { Container, NavbarBrand } from "reactstrap";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const MENU_LIST = [
  { text: "HOME", href: "/", link: "about" },
  { text: "ABOUT", href: "/", link: "about" },
  { text: "SERVICES", href: "/", link: "about" },
  { text: "EVENTS", href: "/#work", link: "work" },
  { text: "CAREER", href: "/career", link: "career" },
  { text: "CONTACT US", href: "/#footer_id", link: "footer_id" },
];

const NavItem = ({ text, href, active, link }) => {
  const [cookies, setCookie] = useCookies(["hash"]);
  const router = useRouter();
  const url_page = router.asPath;

  if (link == "career" || link == "about") {
    return (
      <a href={href}>
        <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link`} >
          <a>{text}</a>
        </div>
      </a>
    );
  } else {
    if (url_page == "/") {
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
            <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active ? 'active' : ''}`}>
              <a>{text}</a>
            </div>
          </a>
        </Link>
      );
    } else {
      return (
        <a
          href={"/"}
          onClick={() => {
            setCookie("hash", `${link}`, { path: "/" });
          }}
        >
          <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active ? 'active' : ''}`}>
            <a>{text}</a>
          </div>
        </a>
      );
    }
  }
};

const HomeNavbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const url_page = router.asPath;
  const [url, setUrl] = useState(`${url_page}`);

  return (
    <header style={{ backgroundColor: "#000000" }}>
      <nav style={{ backgroundColor: "#000000" }}>
        <Container className="align-items-center justify-content-between text-center">
          <a href="/" style={{ margin: "unset" }}>
            <span>
              <NavbarBrand href="/" style={{ margin: "unset" }}>
                <img
                  alt="..."
                  src={require("assets/img/brand/Logo Katarsis Putih.png")}
                  height="25px"
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
          <div className={`${navActive ? "active" : ""} nav__menu-list`} style={{ backgroundColor: "#000000", width: "100%", justifyContent: "center", marginTop: "40px" }}>
            {MENU_LIST.map((menu, idx) => {
              return (
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                    setUrl(`${menu.href}`);
                  }}
                  key={menu.text}
                  style={{ backgroundColor: "#000000" }}
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
