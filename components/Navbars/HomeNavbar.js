import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "../../assets/css/main/main.module.css";
import { Container, NavbarBrand } from "reactstrap";
import { useRouter } from "next/router";

const MENU_LIST = [
  { text: "About", href: "/" },
  { text: "Work", href: "/#work" },
  { text: "Career", href: "/career" },
  { text: "Contact", href: "/#footer_id" },
];

const NavItem = ({ text, href, active }) => {
  console.log(active);
  if (active) {
    return (
      <Link href={href}>
        <div style={{ cursor: "pointer" }} className="px-3 nav__link active">
          <a>{text}</a>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href={href}>
        <div style={{ cursor: "pointer" }} className="px-3 nav__link">
          <a>{text}</a>
        </div>
      </Link>
    );
  }
};

const HomeNavbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const router = useRouter();
  const url_page = router.asPath;
  console.log(url_page);

  return (
    <header>
      <nav className="shadow-sm">
        <Container className="d-flex align-items-center justify-content-between">
          <Link href="/">
            <span>
              <NavbarBrand href="/">
                <img
                  alt="..."
                  src={require("assets/img/brand/Logo Katarsis png.png")}
                  height="20px"
                />
              </NavbarBrand>
            </span>
          </Link>
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
                  }}
                  key={menu.text}
                >
                  <NavItem active={url_page === `${menu.href}`} {...menu} />
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
