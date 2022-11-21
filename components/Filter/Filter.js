import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
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
import { fetchWrapper } from "../../helpers/fetch-wrapper";

function Filter() {
  const [menu, setMenu] = useState("Original IP / Original IP");
  const [originalIP, setOriginalIP] = useState({});
  const [b2b, setB2B] = useState({});
  const [menuOriginalIP, setMenuOriginalIP] = useState([]);
  const [menuB2B, setMenuB2B] = useState([]);

  const getOriginalIP = async () => {
    const data = await fetchWrapper.get(`api/content/get-original`);
    if (data) {
      let obj = data.data;
      setOriginalIP(obj[0]);
    }
  };

  const getMenuOriginalIP = async () => {
    const data = await fetchWrapper.get(`api/get-submenu?id=1`);
    if (data) {
      setMenuOriginalIP(data.data);
    }
  };

  const getMenuB2B = async () => {
    const data = await fetchWrapper.get(`api/get-submenu?id=2`);
    if (data) {
      setMenuB2B(data.data);
    }
  };

  const getB2B = async () => {
    const data = await fetchWrapper.get(`api/content/get-b2b`);
    if (data) {
      let obj = data.data;
      setB2B(obj[0]);
    }
  };

  useEffect(() => {
    getB2B();
    getOriginalIP();
    getMenuB2B();
    getMenuOriginalIP();
  }, []);

  const onClickMenu1 = () => {
    setMenu("Original IP / Original IP");
    const filter = document.getElementById("filter");
    const menu = document.getElementById("menu1");
    const img = document.getElementById("close1");
    img.classList.remove("d-none");
    filter.classList.remove("m-fadeIn");
    filter.classList.add("m-fadeOut");
    filter.classList.add("filter_display_none");
    filter.classList.remove("filter_height");
    menu.classList.remove("m-fadeOut");
    menu.classList.remove("filter_display_none");
    menu.classList.add("m-fadeIn");
  };

  const onClickMenu2 = () => {
    setMenu("Business to Business (B2B) / B2B");
    const filter = document.getElementById("filter");
    const menu = document.getElementById("menu2");
    const img = document.getElementById("close2");
    img.classList.remove("d-none");
    filter.classList.add("filter_display_none");
    filter.classList.remove("filter_height");
    filter.classList.remove("m-fadeIn");
    filter.classList.add("m-fadeOut");
    menu.classList.remove("m-fadeOut");
    menu.classList.remove("filter_display_none");
    menu.classList.add("m-fadeIn");
  };

  const closeMenu1 = () => {
    const filter = document.getElementById("filter");
    const menu = document.getElementById("menu1");
    const img = document.getElementById("close1");
    img.classList.add("d-none");
    menu.classList.add("filter_display_none");
    filter.classList.add("filter_height");
    menu.classList.remove("m-fadeIn");
    menu.classList.add("m-fadeOut");
    filter.classList.remove("m-fadeOut");
    filter.classList.remove("filter_display_none");
    filter.classList.add("m-fadeIn");
  };

  const closeMenu2 = () => {
    const filter = document.getElementById("filter");
    const menu = document.getElementById("menu2");
    const img = document.getElementById("close2");
    img.classList.add("d-none");
    menu.classList.add("filter_display_none");
    menu.classList.remove("m-fadeIn");
    menu.classList.add("m-fadeOut");
    filter.classList.remove("m-fadeOut");
    filter.classList.add("filter_height");
    filter.classList.remove("filter_display_none");
    filter.classList.add("m-fadeIn");
  };

  return {
    menu,
    renderFilter: (
      <>
        <Container className="py-4">
          <Row id="filter" className="filter_height">
            <Col className="py-4 d-flex border_filter">
              <Row className="align-items-center w-100">
                <Col style={{ minWidth: "262px" }}>
                  <div className="mx-4">
                    <h3
                      onClick={() => onClickMenu1()}
                      className="m-0 py-1 underline_hover"
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      Original IP
                    </h3>
                  </div>
                </Col>
                <Col style={{ minWidth: "262px" }}>
                  <div className="mx-4">
                    {menuOriginalIP.map((val) => {
                      return (
                        <Link
                          activeClass="active"
                          to={"work"}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <div
                            className="py-1 arrow_hover "
                            onClick={() =>
                              setMenu(
                                `Original IP -> ${val.name_submenu} / ${val.id}`
                              )
                            }
                            style={{ width: "fit-content", cursor: "pointer" }}
                          >
                            {val.name_submenu}
                          </div>
                        </Link>
                      );
                    })}
                    {/* <div
                      className="py-1 arrow_hover "
                      onClick={() => setMenu("Original IP -> Experiences")}
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      Experiences
                    </div>
                    <div
                      onClick={() => setMenu("Original IP -> Content")}
                      className="py-1 arrow_hover"
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      Content
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className="py-4 d-flex">
              <Row className="align-items-center w-100">
                <Col style={{ minWidth: "262px" }}>
                  <div className="mx-4">
                    <h3
                      onClick={() => onClickMenu2()}
                      className="m-0 py-1 underline_hover"
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      Business to Business (B2B)
                    </h3>
                  </div>
                </Col>
                <Col style={{ minWidth: "262px" }}>
                  <div className="mx-4">
                    {menuB2B.map((val) => {
                      return (
                        <Link
                          activeClass="active"
                          to={"work"}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          <div
                            className="py-1 arrow_hover "
                            onClick={() =>
                              setMenu(
                                `Business to Business (B2B) -> ${val.name_submenu} / ${val.id}`
                              )
                            }
                            style={{ width: "fit-content", cursor: "pointer" }}
                          >
                            {val.name_submenu}
                          </div>
                        </Link>
                      );
                    })}
                    {/* <div
                      onClick={() =>
                        setMenu(
                          "Business to Business (B2B) -> Marketing & Sponsorship"
                        )
                      }
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      Marketing & Sponsorship
                    </div>
                    <div
                      onClick={() =>
                        setMenu(
                          "Business to Business (B2B) -> Ceremonies & Events"
                        )
                      }
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      Ceremonies & Events
                    </div> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row id="menu1" className="filter_display_none">
            <Col className="py-5">
              <h2 className="m-0 p-0 mb-3">Original IP</h2>
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  cursor: "pointer",
                }}
              >
                <img
                  onClick={() => closeMenu1()}
                  id="close1"
                  className="d-none"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACbklEQVRYhe3XSY8NURQH8N/rJkTaFOloJLQprGkrSRMRU/RG+AAiIj6BnWFtQ8TwJYgxvaJZGRJiiCFEzEOwY2PjWdxTqUeq6tV7zYp/cpPKPf/zP3c4de+5/OtodMhdiRGsxVzMCdt7fMAYLuI2mn9ykCO4F6J12mPs0NkEC7EQt1qE3+A4tmAZpqIvvjfjGF618G9isNvgq/ExhD5hHybV8OuRZv88fL9gXafB1+B7CIxiRqcC0uqcD43voVkLC/E5HE+ht4vgGXpwRL6KbbejId/z0XEGbx3E2dC8oU1i7gjiO90texmmSgncxPYyUkP6fZrY+weDZ9gV2o+UrMKqILzFxBKR+VJi9RfY+nEBi0p8e/EyYgwVEQ6F8WSJAHlWP/htEP3R18TlCv+jwTlQZLwWxpEKgdZA2SBa+x5LR3QZNgZvrMj4LIzLKwSKBpF9P8JAG99FwX1aZPwWxultRLJB3Pfr2T+n0iNhMn7ga9bR02LMbq86F0i3N10jWqF/3S2Yhbv+whZc1T4JZ+JO8B5idrSH6iXhBhVJeDCMJyoEzgXniV9nOxB9peKB7F7YX2Qckt/5ZQfRUlxRPMu5YVta4tuLFxFjZRGhIe1jE3tKRMaDnfKtK0307fLjuM7vWBd9eB3a26qIDamMakrFZU8VuSYaOB2a19X4zQel4qEp1XjjGUQDh+UFyYK6jsPykuwipnURvA9n5CXZcKcCw/KVeIPdmFDDr1dKuOzq/dRN8AyDUhmVnfmvpG3ZjCWYEm0xNkn/+YsW/nUdLHsV1vtLD5NOn2YrsFX+NJsXtnfS82wMl+TH9X+0xU/nf8f7CQu+owAAAABJRU5ErkJggg=="
                />
              </div>
              <div style={{ maxWidth: "800px" }}>{originalIP.description}</div>
            </Col>
          </Row>

          <Row id="menu2" className="filter_display_none">
            <Col className="py-5">
              <h2 className="m-0 p-0 mb-3">Business to Business (B2B)</h2>
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  cursor: "pointer",
                }}
              >
                {" "}
                <img
                  onClick={() => closeMenu2()}
                  id="close2"
                  className="d-none"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACbklEQVRYhe3XSY8NURQH8N/rJkTaFOloJLQprGkrSRMRU/RG+AAiIj6BnWFtQ8TwJYgxvaJZGRJiiCFEzEOwY2PjWdxTqUeq6tV7zYp/cpPKPf/zP3c4de+5/OtodMhdiRGsxVzMCdt7fMAYLuI2mn9ykCO4F6J12mPs0NkEC7EQt1qE3+A4tmAZpqIvvjfjGF618G9isNvgq/ExhD5hHybV8OuRZv88fL9gXafB1+B7CIxiRqcC0uqcD43voVkLC/E5HE+ht4vgGXpwRL6KbbejId/z0XEGbx3E2dC8oU1i7gjiO90texmmSgncxPYyUkP6fZrY+weDZ9gV2o+UrMKqILzFxBKR+VJi9RfY+nEBi0p8e/EyYgwVEQ6F8WSJAHlWP/htEP3R18TlCv+jwTlQZLwWxpEKgdZA2SBa+x5LR3QZNgZvrMj4LIzLKwSKBpF9P8JAG99FwX1aZPwWxultRLJB3Pfr2T+n0iNhMn7ga9bR02LMbq86F0i3N10jWqF/3S2Yhbv+whZc1T4JZ+JO8B5idrSH6iXhBhVJeDCMJyoEzgXniV9nOxB9peKB7F7YX2Qckt/5ZQfRUlxRPMu5YVta4tuLFxFjZRGhIe1jE3tKRMaDnfKtK0307fLjuM7vWBd9eB3a26qIDamMakrFZU8VuSYaOB2a19X4zQel4qEp1XjjGUQDh+UFyYK6jsPykuwipnURvA9n5CXZcKcCw/KVeIPdmFDDr1dKuOzq/dRN8AyDUhmVnfmvpG3ZjCWYEm0xNkn/+YsW/nUdLHsV1vtLD5NOn2YrsFX+NJsXtnfS82wMl+TH9X+0xU/nf8f7CQu+owAAAABJRU5ErkJggg=="
                />
              </div>
              <div style={{ maxWidth: "800px" }}>{b2b.description}</div>
            </Col>
          </Row>
        </Container>
      </>
    ),
  };
}

export default Filter;
