import React, { useState } from "react";
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

function SliderProcess() {
  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [index, setIndex] = useState(1);

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
                      Carousel 1
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
                    <div className="title_slider ">Carousel 1</div>
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
                      Carousel 2
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
                    <div className="title_slider ">Carousel 2</div>
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
                      Carousel 3
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
                    <div className="title_slider ">Carousel 3</div>
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
          <div className="py-4">
            <Container>
              <img
                src="https://medias.momentfactory.com/2015/12/about-team-all.png"
                alt="A random image from Flickr"
                style={{
                  width: "100%",
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
                    CAROUSEL 1
                  </h2>
                </Col>
                <Col>
                  <div
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      borderLeft: "1px solid #000000",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div id="menu_carousel2" className="filter_display_none m-fadeOut">
          <div className="py-4">
            <Container>
              <img
                src="https://medias.momentfactory.com/2015/12/about-team-all.png"
                alt="A random image from Flickr"
                style={{
                  width: "100%",
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
                    CAROUSEL 2
                  </h2>
                </Col>
                <Col>
                  <div
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      borderLeft: "1px solid #000000",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        <div id="menu_carousel3" className="filter_display_none m-fadeOut">
          <div className="py-4">
            <Container>
              <img
                src="https://medias.momentfactory.com/2015/12/about-team-all.png"
                alt="A random image from Flickr"
                style={{
                  width: "100%",
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
                    CAROUSEL 3
                  </h2>
                </Col>
                <Col>
                  <div
                    style={{
                      color: "#000000",
                      fontSize: "16px",
                      borderLeft: "1px solid #000000",
                      paddingLeft: "30px",
                      paddingRight: "30px",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo.
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>

      <div className="display-small media_coverage">
        <Container>
          <Card>
            <Container>
              <Slider {...slider}>
                <div>
                  <div className="text-center title_slider title_slider_active">
                    Carousel 1
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
                        src="https://medias.momentfactory.com/2015/12/about-team-all.png"
                        alt="A random image from Flickr"
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
                            CAROUSEL 2
                          </h2>
                        </div>
                        <div>
                          <div
                            style={{
                              paddingTop: "15px",
                              color: "#000000",
                              fontSize: "16px",
                              borderTop: "1px solid #000000",
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              textAlign: "justify",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo.
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>

                <div>
                  <div className="text-center title_slider title_slider_active">
                    Carousel 1
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
                        src="https://medias.momentfactory.com/2015/12/about-team-all.png"
                        alt="A random image from Flickr"
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
                            CAROUSEL 2
                          </h2>
                        </div>
                        <div>
                          <div
                            style={{
                              paddingTop: "15px",
                              color: "#000000",
                              fontSize: "16px",
                              borderTop: "1px solid #000000",
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              textAlign: "justify",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo.
                          </div>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>

                <div>
                  <div className="text-center title_slider title_slider_active">
                    Carousel 1
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
                        src="https://medias.momentfactory.com/2015/12/about-team-all.png"
                        alt="A random image from Flickr"
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
                            CAROUSEL 2
                          </h2>
                        </div>
                        <div>
                          <div
                            style={{
                              paddingTop: "15px",
                              color: "#000000",
                              fontSize: "16px",
                              borderTop: "1px solid #000000",
                              paddingLeft: "30px",
                              paddingRight: "30px",
                              textAlign: "justify",
                            }}
                          >
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec
                            quam felis, ultricies nec, pellentesque eu, pretium
                            quis, sem. Nulla consequat massa quis enim. Donec
                            pede justo, fringilla vel, aliquet nec, vulputate
                            eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                            venenatis vitae, justo.
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
