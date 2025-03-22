import React, { useEffect, useState } from "react";
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
import Slider from "react-slick";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

function SliderProcess() {
  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [index, setIndex] = useState(1);

  const [result1, setResult1] = useState({ attributes: { image: { data: { attributes: { url: '/uploads/kuis_366c61ba51.jpg' } } } } });
  const [result2, setResult2] = useState({});
  const [result3, setResult3] = useState({});

  const getAllProcess = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-process`);
    // console.log(data)
    if (data) {
      let obj = data.data;
      setResult1(obj[0]);
      setResult2(obj[1]);
      setResult3(obj[2]);
    }
  };

  useEffect(() => {
    getAllProcess();
  }, []);

  const onClickMenuCarousel1 = () => {
    setIndex(1);
    const menu1 = document.getElementById("menu_carousel1");
    const menu2 = document.getElementById("menu_carousel2");
    const menu3 = document.getElementById("menu_carousel3");
    menu2.classList.remove("m-fadeIn");
    menu2.classList.add("m-fadeOut");
    menu2.classList.add("filter_display_none");
    menu3.classList.remove("m-fadeIn");
    menu3.classList.add("m-fadeOut");
    menu3.classList.add("filter_display_none");
    menu1.classList.remove("m-fadeOut");
    menu1.classList.remove("filter_display_none");
    menu1.classList.add("m-fadeIn");
  };

  const onClickMenuCarousel2 = () => {
    setIndex(2);
    const menu1 = document.getElementById("menu_carousel1");
    const menu2 = document.getElementById("menu_carousel2");
    const menu3 = document.getElementById("menu_carousel3");
    menu1.classList.remove("m-fadeIn");
    menu1.classList.add("m-fadeOut");
    menu1.classList.add("filter_display_none");
    menu3.classList.remove("m-fadeIn");
    menu3.classList.add("m-fadeOut");
    menu3.classList.add("filter_display_none");
    menu2.classList.remove("m-fadeOut");
    menu2.classList.remove("filter_display_none");
    menu2.classList.add("m-fadeIn");
  };

  const onClickMenuCarousel3 = () => {
    setIndex(3);
    const menu1 = document.getElementById("menu_carousel1");
    const menu2 = document.getElementById("menu_carousel2");
    const menu3 = document.getElementById("menu_carousel3");
    menu1.classList.remove("m-fadeIn");
    menu1.classList.add("m-fadeOut");
    menu1.classList.add("filter_display_none");
    menu2.classList.remove("m-fadeIn");
    menu2.classList.add("m-fadeOut");
    menu2.classList.add("filter_display_none");
    menu3.classList.remove("m-fadeOut");
    menu3.classList.remove("filter_display_none");
    menu3.classList.add("m-fadeIn");
  };

  return (
    <>
      <div
        className=" pb-2 justify-content-center text-center"
        style={{
          width: "100%",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          className="pb-4"
          style={{
            maxWidth: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            color: "#000000",
            fontSize: "16px",
          }}
        >
          Process :
        </div>
        <div className="display-large">
          <Row className="align-items-center">
            <Col>
              <div
                onClick={() => onClickMenuCarousel1()}
                className="parent_slider justify-content-center text-center"
              >
                {index == 1 ? (
                  <>
                    <div className="title_slider title_slider_active">
                      {`${result1.attributes?.type}`}
                    </div>
                    <div
                      className="my-2 dot_slider dot_slider_active"
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>
                  </>
                ) : (
                  <>
                    <div className="title_slider ">{`${result1.attributes?.type}`}</div>
                    <div
                      className="my-2 dot_slider "
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>
                  </>
                )}
              </div>
            </Col>
            <Col className="m-0 p-0 col-1">
              <div
                style={{
                  backgroundColor: "#000000",
                  height: "2px",
                  width: "100%",
                }}
              ></div>
            </Col>
            <Col>
              <div
                onClick={() => onClickMenuCarousel2()}
                className="parent_slider justify-content-center text-center"
              >
                {index == 2 ? (
                  <>
                    <div className="title_slider title_slider_active">
                      {`${result2.attributes?.type}`}
                    </div>
                    <div
                      className="my-2 dot_slider dot_slider_active"
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>
                  </>
                ) : (
                  <>
                    <div className="title_slider ">{`${result2.attributes?.type}`}</div>
                    <div
                      className="my-2 dot_slider "
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>
                  </>
                )}
              </div>
            </Col>
            <Col className="m-0 p-0 col-1">
              <div
                style={{
                  backgroundColor: "#000000",
                  height: "2px",
                  width: "100%",
                }}
              ></div>
            </Col>
            <Col>
              <div
                onClick={() => onClickMenuCarousel3()}
                className="parent_slider justify-content-center text-center"
              >
                {index == 3 ? (
                  <>
                    <div className="title_slider title_slider_active">
                      {`${result3.attributes?.type}`}
                    </div>
                    <div
                      className="my-2 dot_slider dot_slider_active"
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>
                  </>
                ) : (
                  <>
                    <div className="title_slider ">{`${result3.attributes?.type}`}</div>
                    <div
                      className="my-2 dot_slider "
                      style={{
                        height: "10px",
                        width: "10px",
                        borderRadius: "20px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></div>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="display-large">
        <div id="menu_carousel1" className="m-fadeIn">
          <div className="py-4 text-center">
            <Container>
              <img
                src={`https://admin.katarsis.co.id${result1.attributes?.image?.data?.attributes?.url}`}
                alt={`${result1.attributes?.type}`}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </Container>
          </div>

          <div className="py-4">
            <Container>
              <Row style={{ alignItems: "center" }}>
                <Col className="col-3">
                  <h2
                    style={{
                      color: "#000000",
                    }}
                  >
                    {`${result1.attributes?.type}`}
                  </h2>
                </Col>
                <Col>
                  <div
                    className="desc_section"
                    style={{
                      color: "#000000",
                      borderLeft: "1px solid #000000",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      textAlign: "justify",
                    }}
                  >
                    {`${result1.attributes?.description}`}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div id="menu_carousel2" className="filter_display_none m-fadeOut">
          <div className="py-4 text-center">
            <Container>
              <img
                // src={`https://drive.google.com/uc?export=view&id=${result2.url_image}`}
                src={`https://admin.katarsis.co.id${result2.attributes?.image?.data?.attributes?.url}`}
                alt={`${result2.type}`}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </Container>
          </div>

          <div className="py-4">
            <Container>
              <Row style={{ alignItems: "center" }}>
                <Col className="col-3">
                  <h2
                    style={{
                      color: "#000000",
                    }}
                  >
                    {result2.attributes?.type}
                  </h2>
                </Col>
                <Col>
                  <div
                    className="desc_section"
                    style={{
                      color: "#000000",

                      borderLeft: "1px solid #000000",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      textAlign: "justify",
                    }}
                  >
                    {`${result2.attributes?.description}`}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div id="menu_carousel3" className="filter_display_none m-fadeOut">
          <div className="py-4 text-center">
            <Container>
              <img
                // src={`https://drive.google.com/uc?export=view&id=${result3.url_image}`}
                src={`https://admin.katarsis.co.id${result3.attributes?.image?.data?.attributes?.url}`}
                alt={`${result3.attributes?.type}`}
                style={{
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </Container>
          </div>

          <div className="py-4">
            <Container>
              <Row style={{ alignItems: "center" }}>
                <Col className="col-3">
                  <h2
                    style={{
                      color: "#000000",
                    }}
                  >
                    {`${result3.attributes?.type}`}
                  </h2>
                </Col>
                <Col>
                  <div
                    className="desc_section"
                    style={{
                      color: "#000000",
                      borderLeft: "1px solid #000000",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      textAlign: "justify",
                    }}
                  >
                    {`${result3.attributes?.description}`}
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <div className="display-small media_coverage">
        <Container>
          <Card className="content">
            <Container>
              <Slider {...slider}>
                <div>
                  <div className="text-center title_slider title_slider_active">
                    {`${result1.attributes?.type}`}
                  </div>
                  <div
                    className="my-2 dot_slider dot_slider_active"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></div>
                  <div className="py-4">
                    <Container>
                      <img
                        // src={`https://drive.google.com/uc?export=view&id=${result1.url_image}`}
                        src={`https://admin.katarsis.co.id${result1.attributes?.image?.data?.attributes?.url}`}
                        alt={`${result1.attributes?.type}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Container>
                  </div>

                  <div className="py-4">
                    <Container>
                      <div style={{ justifyContent: "center" }}>
                        <div
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <h2
                            style={{
                              color: "#000000",
                            }}
                          >
                            {`${result1.attributes?.type}`}
                          </h2>
                        </div>
                        <div>
                          <div
                            className="desc_section"
                            style={{
                              paddingTop: "15px",
                              color: "#000000",
                              borderTop: "1px solid #000000",
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              textAlign: "justify",
                            }}
                          >
                            {`${result1.attributes?.description}`}
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>

                <div>
                  <div className="text-center title_slider title_slider_active">
                    {`${result2.attributes?.type}`}
                  </div>
                  <div
                    className="my-2 dot_slider dot_slider_active"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></div>
                  <div className="py-4">
                    <Container>
                      <img
                        // src={`https://drive.google.com/uc?export=view&id=${result2.url_image}`}
                        src={`https://admin.katarsis.co.id${result2.attributes?.image?.data?.attributes?.url}`}
                        alt={`${result2.attributes?.type}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Container>
                  </div>

                  <div className="py-4">
                    <Container>
                      <div style={{ justifyContent: "center" }}>
                        <div
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <h2
                            style={{
                              color: "#000000",
                            }}
                          >
                            {`${result2.attributes?.type}`}
                          </h2>
                        </div>
                        <div>
                          <div
                            className="desc_section"
                            style={{
                              paddingTop: "15px",
                              color: "#000000",
                              borderTop: "1px solid #000000",
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              textAlign: "justify",
                            }}
                          >
                            {`${result2.attributes?.description}`}
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>

                <div>
                  <div className="text-center title_slider title_slider_active">
                    {`${result3.attributes?.type}`}
                  </div>
                  <div
                    className="my-2 dot_slider dot_slider_active"
                    style={{
                      height: "10px",
                      width: "10px",
                      borderRadius: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  ></div>
                  <div className="py-4">
                    <Container>
                      <img
                        // src={`https://drive.google.com/uc?export=view&id=${result3.url_image}`}
                        src={`https://admin.katarsis.co.id${result3.attributes?.image?.data?.attributes?.url}`}
                        alt={`${result3.attributes?.type}`}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Container>
                  </div>

                  <div className="py-4">
                    <Container>
                      <div style={{ justifyContent: "center" }}>
                        <div
                          style={{ textAlign: "center", paddingBottom: "15px" }}
                        >
                          <h2
                            style={{
                              color: "#000000",
                            }}
                          >
                            {`${result3.attributes?.type}`}
                          </h2>
                        </div>
                        <div>
                          <div
                            className="desc_section"
                            style={{
                              paddingTop: "15px",
                              color: "#000000",
                              borderTop: "1px solid #000000",
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              textAlign: "justify",
                            }}
                          >
                            {`${result3.attributes?.description}`}
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
              </Slider>
            </Container>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default SliderProcess;
