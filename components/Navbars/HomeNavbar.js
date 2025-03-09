import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";
import "../../assets/css/main/main.module.css";
import { Container, NavbarBrand } from "reactstrap";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";

const MENU_LIST = [
  { text: "HOME", href: "/", link: "/" },
  { text: "ABOUT", href: "/#about", link: "about" },
  { text: "SERVICES", href: "/#service", link: "service" },
  { text: "UPCOMING", href: "/#event", link: "event" },
  { text: "CAREER", href: "/career", link: "career" },
  { text: "CONTACT US", href: "/#footer_id", link: "footer_id" },
];

const NavItem = ({ text, href, active, link, activeScroll }) => {
  const [cookies, setCookie] = useCookies(["hash"]);
  const router = useRouter();
  const url_page = router.asPath;

  if (url_page === '/') {
    if (href.includes("#")) {
      return (
        <Link
          activeClass="active"
          to={link}
          spy={true}
          smooth={true}
          offset={-200}
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
          offset={-200}
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
  }



  // if (link == "career" || link == "about") {
  //   return (
  //     <a href={href}>
  //       <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active === true ? 'active' : ''}`} >
  //         <a>{text}</a>
  //       </div>
  //     </a>
  //   );
  // } else {
  //   if (url_page == "/") {
  //     return (
  //       <Link
  //         activeClass="active"
  //         to={link}
  //         spy={true}
  //         smooth={true}
  //         offset={-500}
  //         duration={500}
  //       >
  //         <a href={href}>
  //           <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active === true ? 'active' : ''}`}>
  //             <a>{text}</a>
  //           </div>
  //         </a>
  //       </Link>
  //     );
  //   } else {
  //     return (
  //       <a
  //         href={"/"}
  //         onClick={() => {
  //           setCookie("hash", `${link}`, { path: "/" });
  //         }}
  //       >
  //         <div style={{ cursor: "pointer", color: "#FFFFFF" }} className={`px-3 nav__link ${active === true ? 'active' : ''}`}>
  //           <a>{text}</a>
  //         </div>
  //       </a>
  //     );
  //   }
  // }
};

const HomeNavbar = ({ activeScroll }) => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const url_page = router.asPath;
  console.log(url_page)
  const [url, setUrl] = useState(`${url_page}`);

  return (
    <header style={{ backgroundColor: "#000000" }}>
      <nav style={{ backgroundColor: "#000000" }}>
        <Container className="d-desktop align-items-center justify-content-between text-center">
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
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`} style={{ backgroundColor: "#000000", width: "100%", justifyContent: "center", marginTop: "40px" }}>
            {MENU_LIST.map((menu, idx) => {
              return (
                <div
                  key={menu.text}
                  style={{ backgroundColor: "#000000" }}
                >
                  <NavItem active={url === `${menu.href}`} activeScroll={activeScroll} {...menu} />
                </div>
              );
            })}
          </div>

        </Container>

        <Container className="d-mobile align-items-center justify-content-between text-center">
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
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
            <div style={{ backgroundColor: "#FFFFFF" }}></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`} style={{ backgroundColor: "#000000", marginTop: "40px" }}>
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
      <Container >
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
    </header>
  );
};

export default HomeNavbar;
