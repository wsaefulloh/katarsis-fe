import { Link } from "react-scroll";
import React, { useState } from "react";
import "../../assets/css/main/main.module.css";
import { Container, NavbarBrand } from "reactstrap";
import { useRouter } from "next/router";

const MENU_LIST = [
  { text: "HOME", href: "/", link: "/" },
  { text: "ABOUT", href: "/#about", link: "about" },
  { text: "SERVICES", href: "/#service", link: "service" },
  { text: "UPCOMING", href: "/#event", link: "event" },
  { text: "CAREER", href: "/career", link: "career" },
  { text: "CONTACT US", href: "/#", link: "contact_us" },
];

const NavItem = ({ text, href, active, link, activeScroll }) => {
  const router = useRouter();
  const url_page = router.asPath;

  if (url_page === '/' || url_page.includes('#')) {
    if (href.includes("#")) {
      return (
        <Link
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-230}
          duration={500}
        >
          <a href={href}>
            <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${activeScroll === link ? 'active' : ''}`}>
              <a>{text}</a>
            </div>
          </a>
        </Link>
      )
    } else if (href === '/') {
      return (
        <Link
          activeClass="active"
          to={'home'}
          spy={true}
          smooth={true}
          offset={-220}
          duration={500}
        >
          <a href={href}>
            <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${(activeScroll === 'home' || activeScroll === null) ? 'active' : ''}`}>
              <a>{text}</a>
            </div>
          </a>
        </Link>
      )
    } else {
      return (
        <a href={href}>
          <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active === true ? 'active' : ''}`} >
            <a>{text}</a>
          </div>
        </a>
      )
    }
  } else {
    if (href.includes("#")) {
      return (
        <a href={href}>
          <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link`}>
            <a>{text}</a>
          </div>
        </a>
      )
    } else if (href === '/') {
      return (
        <a href={href}>
          <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link`}>
            <a>{text}</a>
          </div>
        </a>
      )
    } else {
      return (
        <a href={href}>
          <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active === true ? 'active' : ''}`} >
            <a>{text}</a>
          </div>
        </a>
      )
    }
  }
};

const HomeNavbar = ({ activeScroll, logoUrl, whatsapp }) => {
  const [navActive, setNavActive] = useState(null);
  const router = useRouter();
  const url_page = router.asPath;
  const [url, setUrl] = useState(`${url_page}`);

  return (
    <header style={{ backgroundColor: "#000000" }}>
      <nav style={{ backgroundColor: "#000000" }}>
        <Container className="d-desktop align-items-center justify-content-between text-center">
          <a href="/" style={{ margin: "unset" }}>
            <span>
              <NavbarBrand href="/" style={{ margin: "unset" }}>
                {logoUrl.includes('undefined') ? (
                  <img
                    alt="..."
                    src={require("assets/img/Rectangle 5.png")}
                    width="120px"
                  />
                ) : (
                  <img
                    alt="..."
                    src={logoUrl}
                    width="120px"
                  />
                )}
              </NavbarBrand>
            </span>
          </a>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`} style={{ backgroundColor: "#000000", width: "100%", justifyContent: "center", marginTop: "40px" }}>
            {MENU_LIST.map((menu, idx) => {
              if (menu.text === "CONTACT US") {
                return (
                  <div
                    key={menu.text}
                    style={{ backgroundColor: "#000000" }}
                  >
                    <NavItem active={url === `https://wa.me/${whatsapp}`} activeScroll={activeScroll} text={menu.text} href={`https://wa.me/${whatsapp}`} link={'contact_us'} />
                  </div>
                );
              } else {
                return (
                  <div
                    key={menu.text}
                    style={{ backgroundColor: "#000000" }}
                  >
                    <NavItem active={url === `${menu.href}`} activeScroll={activeScroll} {...menu} />
                  </div>
                );
              }
            })}
          </div>

        </Container>

        <Container className="d-mobile align-items-center justify-content-between text-center">
          <a href="/" style={{ margin: "unset" }}>
            <span>
              <NavbarBrand href="/" style={{ margin: "unset" }}>
                {logoUrl.includes('undefined') ? (
                  <img
                    alt="..."
                    src={require("assets/img/Rectangle 5.png")}
                    width="100px"
                  />
                ) : (
                  <img
                    alt="..."
                    src={logoUrl}
                    width="100px"
                  />
                )}
              </NavbarBrand>
            </span>
          </a>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`} style={{ backgroundColor: "#000000", marginTop: "40px" }}>
            {MENU_LIST.map((menu, idx) => {
              if (menu.text === "CONTACT US") {
                return (
                  <div
                    onClick={() => {
                      setNavActive(false);
                    }}
                    key={menu.text}
                    style={{ backgroundColor: "#000000" }}
                  >
                    <NavItem active={url === `https://wa.me/${whatsapp}`} activeScroll={activeScroll} text={menu.text} href={`https://wa.me/${whatsapp}`} link={'contact_us'} />
                  </div>
                );
              } else {
                return (
                  <div
                    onClick={() => {
                      setNavActive(false);
                    }}
                    key={menu.text}
                    style={{ backgroundColor: "#000000" }}
                  >
                    <NavItem active={url === `${menu.href}`} activeScroll={activeScroll} {...menu} />
                  </div>
                );
              }
            })}
          </div>
        </Container>
      </nav>
      <Container >
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
    </header>
  );
};

export default HomeNavbar;
