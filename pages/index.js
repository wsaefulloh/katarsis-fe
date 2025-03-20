import React, { useEffect, useRef, useState } from "react";
import { Card, Container, Row, Col, Input, Spinner } from "reactstrap";
import { fetchWrapper } from "../helpers/fetch-wrapper";
// import { API_APPS_HOST } from "../config/index";
import Slider from "react-slick";
import HomeLayout from "layouts/Homepage.js";
import toast, { Toaster } from 'react-hot-toast';
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/main/main.module.css";
import "../assets/fonts/Maison Neue/fonts.css";
import CardsEvent from "../components/Cards/CardsEvent";
import HomeNavbar from "../components/Navbars/HomeNavbar";
import { throttle } from 'lodash'; // Untuk optimasi throttling

function Home() {

  const mediaCoverage = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const API_APPS_HOST = process.env.NEXT_PUBLIC_API_HOST;
  const NEXT_PUBLIC_HOST = process.env.NEXT_PUBLIC_HOST;

  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [noWhatsapp, setNoWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [media, setMedia] = useState([]);
  const [activationService, setActivationService] = useState([]);
  const [whyKatarsis, setWhyKatarsis] = useState([]);
  const [events, setEvents] = useState([]);
  const [homepage, setHomepage] = useState({});
  const [whatsapp, setWhatsapp] = useState("");

  const [activeService, setActiveService] = useState(0);
  const [services, setServices] = useState({
    katarsisExperience: [],
    katarsisLive: [],
    katarsisSolutions: [],
    katarsisEntertaiment: [],
  });

  const getDataService = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-services`);
    let katarsisExperience = []
    let katarsisLive = []
    let katarsisSolutions = []
    let katarsisEntertaiment = []
    if (data) {
      let newData = data.data
      for (let i = 0; i < newData.length; i++) {
        const element = newData[i];
        if (element.attributes.service_type === "Katarsis Experience") {
          katarsisExperience.push({ id: element.id, image: `${API_APPS_HOST}${element.attributes.image_logo.data.attributes.url}` })
        } else if (element.attributes.service_type === "Katarsis Live") {
          katarsisLive.push({ id: element.id, image: `${API_APPS_HOST}${element.attributes.image_logo.data.attributes.url}` })
        } else if (element.attributes.service_type === "Katarsis Solutions") {
          katarsisSolutions.push({ id: element.id, image: `${API_APPS_HOST}${element.attributes.image_logo.data.attributes.url}` })
        } else {
          katarsisEntertaiment.push({ id: element.id, image: `${API_APPS_HOST}${element.attributes.image_logo.data.attributes.url}` })
        }
      }
      setServices({
        katarsisExperience: katarsisExperience,
        katarsisLive: katarsisLive,
        katarsisSolutions: katarsisSolutions,
        katarsisEntertaiment: katarsisEntertaiment,
      })
    }
  };

  const getDataActivation = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-activation-service`);
    if (data) {
      setActivationService(data.data.slice(0, 5));
    }
  };

  const postContact = async () => {
    setIsLoading(true)
    const data = await fetchWrapper.post(`api/strapi/post-contact-us`, {
      name: name,
      email: email,
      message: message,
      subject: subject,
      no_whatsapp: noWhatsapp
    });
    if (data?.data !== null) {
      toast.success('Success send message. Thank you!');
    } else {
      toast.error('Failed! Try again later.');
    }
    setIsLoading(false)
  };

  const getWhyKatarsis = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-why-katarses`);
    if (data) {
      setWhyKatarsis(data.data);
    }
  };

  const getDataMediaNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-new-media`);
    if (data) {
      console.log(data)
      setMedia(data.data);
    }
  };

  const getHomepage = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-homepage`);
    if (data) {
      setHomepage(data?.data?.attributes)
    }
  };

  const getEvents = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-new-event`);
    if (data) {
      setEvents(data?.data)
    }
  };

  const getWhatsapp = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-link?type=whatsapp`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setWhatsapp(link.attributes.url);
    }
  };

  const getAllData = async () => {
    setIsLoadingPage(true)
    await getHomepage();
    setIsLoadingPage(false)
    await getDataMediaNew();
    await getEvents();
    await getDataActivation();
    await getWhyKatarsis();
    await getDataService();
    await getWhatsapp();
  };

  const [visibleId, setVisibleId] = useState(null);

  useEffect(() => {

    getAllData();

    AOS.init({ duration: 2000 });
    window.scrollTo(0, 0);

    const handleScroll = throttle(() => {
      const sections = ['home', 'about', 'service', 'event']; // Daftar id komponen
      let currentVisibleId = null;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Cek apakah komponen terlihat di viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentVisibleId = id;
          }
        }
      });

      // Perbarui state dengan id komponen yang terlihat
      setVisibleId(currentVisibleId);

      // Log id yang sedang terlihat ke console
      console.log('ID yang sedang terlihat:', currentVisibleId);
    }, 100); // Throttle setiap 100ms

    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HomeNavbar whatsapp={whatsapp} activeScroll={visibleId} logoUrl={`${API_APPS_HOST}${homepage?.logo?.data?.attributes?.url ?? undefined}`} />
      {isLoadingPage ? (
        <Container className="py-4 text-center">
          <Spinner
            color="light"
            type="grow"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            Loading...
          </Spinner>
          <Spinner
            color="light"
            type="grow"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            Loading...
          </Spinner>
          <Spinner
            color="light"
            type="grow"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            Loading...
          </Spinner>
        </Container>
      ) : (
        <>
          <Container className="py-4" id="home" data-aos="fade-up">
            <Row>
              <Col
                xl="12"
                className="p-4 d-flex flex-column"
                style={{
                  alignItems: "start",
                  justifyContent: "space-between",
                  minHeight: "400px",
                  maxHeight: "50vh",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage:
                    "url(" +
                    `${API_APPS_HOST}${homepage?.main_banner?.data?.attributes.url}` +
                    ")",
                }}
              >
                <Row>
                  <img
                    alt="..."
                    src={require("assets/img/Group 3.png")}
                    height="150px"
                  />
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
            ></div>
          </Container>
          <div id="about">
            <Container className="py-5" data-aos="fade-up">
              <Row className="pb-6 pt-2 justify-content-center">
                <div
                  className="title-text"
                  style={{ color: "#FFFFFF", fontWeight: "bold", textAlign: "center" }}
                >
                  {homepage?.title_about_us}
                </div>
              </Row>
              <Row className="d-flex align-items-center">
                <Col xl="6" className="sub-about pb-4 px-4 d-flex align-items-center">
                  <img
                    alt="..."
                    src={require("assets/img/Group 1 (2).png")}
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                  <div className="service-desc" style={{ marginTop: "0px", marginLeft: "20px", fontSize: "18px" }}>
                    {homepage?.sub_about_us_1}
                  </div>
                </Col>
                <Col xl="6" className="sub-about pb-4 px-4 d-flex align-items-center">
                  <img
                    alt="..."
                    src={require("assets/img/Group 1 (2).png")}
                    style={{
                      height: "50px",
                      width: "50px",
                    }}
                  />
                  <div className="service-desc" style={{ marginTop: "0px", marginLeft: "20px", fontSize: "18px" }}>
                    {homepage?.sub_about_us_2}
                  </div>
                </Col>
              </Row>
              <Row className="pt-4">
                <Col xl="4" md="6" className="d-flex flex-column" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                  <img
                    alt="..."
                    src={
                      homepage?.images_about_us?.data[0]?.attributes.url == null
                        ? require("assets/img/Rectangle 5.png")
                        : `${API_APPS_HOST}${homepage?.images_about_us?.data[0]?.attributes.url}`
                    }
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      paddingBottom: "7.5px",
                    }}
                  />
                </Col>
                <Col xl="4" md="6" className="d-flex flex-column" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                  <img
                    alt="..."
                    src={
                      homepage?.images_about_us?.data[1]?.attributes.url == null
                        ? require("assets/img/Rectangle 5.png")
                        : `${API_APPS_HOST}${homepage?.images_about_us?.data[1]?.attributes.url}`
                    }
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      paddingBottom: "7.5px",
                    }}
                  />
                </Col>
                <Col xl="4" md="6" className="d-flex flex-column" style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                  <img
                    alt="..."
                    src={
                      homepage?.images_about_us?.data[2]?.attributes.url == null
                        ? require("assets/img/Rectangle 5.png")
                        : `${API_APPS_HOST}${homepage?.images_about_us?.data[2]?.attributes.url}`
                    }
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      paddingBottom: "7.5px",
                    }}
                  />
                </Col>
              </Row>
            </Container>
            <Container>
              <div
                style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
              ></div>
            </Container>
            <Container className="pt-5" data-aos="fade-up">
              <Row>
                <Col md={2} className="py-4 d-flex align-items-center" style={{ justifyContent: "center" }}>
                  <img
                    alt="..."
                    src={require("assets/img/Group 1 (2).png")}
                    style={{
                      height: "100px",
                      width: "100px",
                    }}
                  />
                </Col>
                <Col md={10} className="py-4 d-flex align-items-center">
                  <div
                    className="title-text"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  >
                    How we do it?
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row className="pb-4 d-flex justify-content-end">
                    <Col xl="2" className="py-4 d-flex justify-content-end px-0"></Col>
                    {activationService.map((val, idx) => {
                      return (
                        <Col xl="2" className="py-2 d-flex justify-content-end px-0">
                          <div
                            style={{
                              borderTop: "1px solid #FFFFFF",
                              width: "100%",
                              color: "#FFFFFF",
                            }}
                          >
                            <div
                              style={{
                                borderRadius: "50%",
                                width: "10px",
                                height: "10px",
                                backgroundColor: "#FFFFFF",
                                marginTop: "-5px",
                              }}
                            ></div>
                            <div
                              className="py-4"
                              style={{ paddingLeft: "0px", paddingRight: "1.5rem" }}
                            >
                              <div className="service-title">
                                {val.attributes.title}
                              </div>
                              <div className="service-desc">
                                {val.attributes.description}
                              </div>
                            </div>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col xl="3"></Col>
                <Col className="pt-4 d-flex">
                  <div
                    className="title-text"
                    style={{ color: "#FFFFFF", fontWeight: "bold" }}
                  >
                    Why katarsis?
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl="3"></Col>
                <Col className="py-4 d-flex justify-content-end">
                  <Row className="py-4 d-flex justify-content-end px-0 w-100">
                    {whyKatarsis.map((val, idx) => {
                      if (idx === whyKatarsis.length - 1) {
                        return (
                          <div
                            style={{
                              borderTop: "1px solid #FFFFFF",
                              borderBottom: "1px solid #FFFFFF",
                              width: "100%",
                              color: "#FFFFFF",
                            }}
                          >
                            <Row
                              className="py-4 d-flex justify-content-between"
                              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                            >
                              <Col style={{ color: "#FFFFFF", display: "flex", alignItems: "center" }}>
                                {val.attributes.title}
                              </Col>
                              <Col
                                className="MaisonNeue-Light"
                                style={{ color: "#FFFFFF", fontSize: "12px" }}
                              >
                                {val.attributes.short_description}
                              </Col>
                            </Row>
                          </div>
                        );
                      } else {
                        return (
                          <div
                            style={{
                              borderTop: "1px solid #FFFFFF",
                              width: "100%",
                              color: "#FFFFFF",
                            }}
                          >
                            <Row
                              className="py-4 d-flex justify-content-between"
                              style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                            >
                              <Col style={{ color: "#FFFFFF", display: "flex", alignItems: "center" }}>
                                {val.attributes.title}
                              </Col>
                              <Col
                                className="MaisonNeue-Light"
                                style={{ color: "#FFFFFF", fontSize: "12px" }}
                              >
                                {val.attributes.short_description}
                              </Col>
                            </Row>
                          </div>
                        );
                      }
                    })}
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <Container className="py-4" id="service" data-aos="fade-up">
            <Row>
              <Col className="pt-4 d-flex justify-content-center">
                <div
                  className="title-text"
                  style={{
                    color: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    fontStyle: "bold",
                    fontWeight: "bold",
                  }}
                >
                  Services
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center">
                <div
                  className="pb-4 service-desc"
                  style={{
                    color: "#F9F6EE",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >We believe in quality-experiental entertainment to empower Indonesia's creative potential.</div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col
                xl={3}
                className="d-flex justify-content-center border-service"
              >
                <div
                  className={`button-service ${activeService == 0 ? "active-service" : ""}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "18px",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                  onClick={() => setActiveService(0)}
                >
                  Katarsis Experience
                </div>
              </Col>
              <Col
                xl={3}
                className="d-flex justify-content-center border-service"
              >
                <div
                  className={`button-service ${activeService == 1 ? "active-service" : ""}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "18px",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                  onClick={() => setActiveService(1)}
                >
                  Katarsis Live
                </div>
              </Col>
              <Col
                xl={3}
                className="d-flex justify-content-center border-service"
              >
                <div
                  className={`button-service ${activeService == 2 ? "active-service" : ""}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "18px",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                  onClick={() => setActiveService(2)}
                >
                  Katarsis Solutions
                </div>
              </Col>
              <Col xl={3} className="d-flex justify-content-center">
                <div
                  className={`button-service ${activeService == 3 ? "active-service" : ""}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "18px",
                    padding: "20px",
                    fontWeight: "bold",
                  }}
                  onClick={() => setActiveService(3)}
                >
                  Katarsis Entertaiment
                </div>
              </Col>
            </Row>
            <Row>
              {activeService === 0 ? (
                <>
                  {services.katarsisExperience.length === 0 ? (
                    <div
                      style={{
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "18px",
                        paddingTop: "40px",
                        paddingBottom: "40px",
                        fontWeight: "bold",
                        textAlign: "center",
                        width: "100%",

                      }}
                    >
                      Coming Soon
                    </div>
                  ) : (
                    services.katarsisExperience.map((val, idx) => {
                      return (
                        <Col xl={3} md={4} sm={6} className="d-flex p-4">
                          <img
                            onClick={() => { window.location.href = `${NEXT_PUBLIC_HOST}/event/${val.id}` }}
                            className="service"
                            alt="..."
                            src={val.image}
                            style={{
                              width: "100%",
                              aspectRatio: "1/1",
                              objectFit: "cover"
                            }}
                          />
                        </Col>
                      )
                    })
                  )}
                </>
              ) : activeService === 1 ? (
                <>
                  {services.katarsisLive.length === 0 ? (
                    <div
                      style={{
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "18px",
                        paddingTop: "40px",
                        paddingBottom: "40px",
                        fontWeight: "bold",
                        textAlign: "center",
                        width: "100%",

                      }}
                    >
                      Coming Soon
                    </div>
                  ) : (
                    services.katarsisLive.map((val, idx) => {
                      return (
                        <Col xl={3} md={4} sm={6} className="d-flex p-4">
                          <img
                            onClick={() => { window.location.href = `${NEXT_PUBLIC_HOST}/work/${val.id}` }}
                            className="service"
                            alt="..."
                            src={val.image}
                            style={{
                              width: "100%",
                              aspectRatio: "1/1",
                              objectFit: "cover"
                            }}
                          />
                        </Col>
                      )
                    })
                  )}
                </>
              ) : activeService === 2 ? (
                <>
                  {services.katarsisSolutions.length === 0 ? (
                    <div
                      style={{
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "18px",
                        paddingTop: "40px",
                        paddingBottom: "40px",
                        fontWeight: "bold",
                        textAlign: "center",
                        width: "100%",

                      }}
                    >
                      Coming Soon
                    </div>
                  ) : (
                    services.katarsisSolutions.map((val, idx) => {
                      return (
                        <Col xl={3} md={4} sm={6} className="d-flex p-4">
                          <img
                            onClick={() => { window.location.href = `${NEXT_PUBLIC_HOST}/work/${val.id}` }}
                            className="service"
                            alt="..."
                            src={val.image}
                            style={{
                              width: "100%",
                              aspectRatio: "1/1",
                              objectFit: "cover"
                            }}
                          />
                        </Col>
                      )
                    })
                  )}
                </>
              ) : (
                <>
                  {services.katarsisEntertaiment.length === 0 ? (
                    <div
                      style={{
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "18px",
                        paddingTop: "40px",
                        paddingBottom: "40px",
                        fontWeight: "bold",
                        textAlign: "center",
                        width: "100%",

                      }}
                    >
                      Coming Soon
                    </div>
                  ) : (
                    services.katarsisEntertaiment.map((val, idx) => {
                      return (
                        <Col xl={3} md={4} sm={6} className="d-flex p-4">
                          <img
                            onClick={() => { window.location.href = `${NEXT_PUBLIC_HOST}/work/${val.id}` }}
                            className="service"
                            alt="..."
                            src={val.image}
                            style={{
                              width: "100%",
                              aspectRatio: "1/1",
                              objectFit: "cover"
                            }}
                          />
                        </Col>
                      )
                    })
                  )}
                </>
              )}
            </Row>
          </Container>
          <Container className="pt-5">
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
            ></div>
          </Container>
          <Container className="py-6" id="event" data-aos="fade-up">
            <Row>
              <Col
                xl="3"
                className="py-4 d-flex flex-column justify-content-between"
              >
                <div
                  className="title-text"
                  style={{
                    color: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    fontWeight: "bold",
                  }}
                >
                  Upcoming Event
                </div>
              </Col>
              <Col xl="9" className="py-4">
                <Row>
                  {events.map((val, index) => {
                    if (index == events.length - 1) {
                      return (
                        <div style={{ width: "100%" }}>
                          <Container>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                          </Container>
                          <div>
                            <CardsEvent
                              title={val.attributes.title}
                              list_data={val?.attributes?.list_events?.data ?? []}
                              id={index}
                              last={true}
                            />
                          </div>
                          <Container>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                          </Container>
                        </div>
                      );
                    } else {
                      return (
                        <div style={{ width: "100%" }}>
                          <Container>
                            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
                          </Container>
                          <div>
                            <CardsEvent
                              title={val.attributes.title}
                              list_data={val?.attributes?.list_events?.data ?? []}
                              id={index}
                              last={false}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
            ></div>
          </Container>
          <Container className="py-6" data-aos="fade-up">
            <Row className="align-items-center">
              <Col xl="3" className="py-4 d-flex justify-content-start">
                <div
                  className="title-text"
                  style={{
                    color: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "start",
                    fontWeight: "bold",
                    lineHeight: "2.7rem",
                  }}
                >
                  Our Clients
                </div>
              </Col>
              <Col xl="9">
                <Card className="content mb-0">
                  <Container>
                    <Slider {...mediaCoverage}>
                      {media.map((val) => {
                        return (
                          <Col>
                            <Row
                              className="justify-content-center align-items-center"
                              style={{ height: "100px", width: "100%" }}
                            >
                              <img
                                src={`${API_APPS_HOST}${val.attributes?.image?.data?.attributes?.url}`}
                                style={{ maxWidth: "100%", maxHeight: "100px" }}
                              />
                            </Row>
                          </Col>
                        );
                      })}
                    </Slider>
                  </Container>
                </Card>
              </Col>
            </Row>
          </Container>
          <Container>
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
            ></div>
          </Container>
          <Container className="py-6" data-aos="fade-up">
            <Row className="py-4">
              <Col
                xl="3"
                className="d-flex"
                style={{ flexDirection: "column", justifyContent: "end" }}
              >
                <img
                  alt="..."
                  src={require("assets/img/Layer_1.png")}
                  style={{
                    width: "250px",
                    marginBottom: "50px"
                  }}
                />
              </Col>
              <Col className="d-flex px-0">
                <div className="get-in-touch" style={{ width: "100%" }}>
                  <div
                    className="title-text"
                    style={{
                      color: "#FFFFFF",
                      display: "flex",
                      flexDirection: "column",
                      fontWeight: "bold",
                      lineHeight: "3rem",
                    }}
                  >
                    Get in
                  </div>
                  <div
                    className="title-text"
                    style={{
                      color: "#FFFFFF",
                      display: "flex",
                      flexDirection: "column",
                      fontWeight: "bold",
                      lineHeight: "3rem",
                    }}
                  >
                    Touch
                  </div>
                  <div className="service-desc" style={{ marginBottom: "30px" }}>
                    We believe in quality-experiential entertainment to empower
                    Indonesia's creative potential.
                  </div>
                  <Input
                    style={{
                      marginTop: "10px",
                      backgroundColor: "black",
                      borderBottom: "2px solid #FFFFFF",
                      borderTop: "unset",
                      borderRight: "unset",
                      borderLeft: "unset",
                      boxShadow: "unset",
                      borderRadius: "unset",
                      color: "#FFFFFF",
                    }}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name*"
                  />
                  <Input
                    style={{
                      marginTop: "10px",
                      backgroundColor: "black",
                      borderBottom: "2px solid #FFFFFF",
                      borderTop: "unset",
                      borderRight: "unset",
                      borderLeft: "unset",
                      boxShadow: "unset",
                      borderRadius: "unset",
                      color: "#FFFFFF",
                    }}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Subject*"
                  />
                  <Input
                    style={{
                      marginTop: "10px",
                      backgroundColor: "black",
                      borderBottom: "2px solid #FFFFFF",
                      borderTop: "unset",
                      borderRight: "unset",
                      borderLeft: "unset",
                      boxShadow: "unset",
                      borderRadius: "unset",
                      color: "#FFFFFF",
                    }}
                    onChange={(e) => setNoWhatsapp(e.target.value)}
                    placeholder="No. Whatsapp*"
                  />
                  <Input
                    style={{
                      marginTop: "10px",
                      backgroundColor: "black",
                      borderBottom: "2px solid #FFFFFF",
                      borderTop: "unset",
                      borderRight: "unset",
                      borderLeft: "unset",
                      boxShadow: "unset",
                      borderRadius: "unset",
                      color: "#FFFFFF",
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email*"
                  />
                  <Input
                    style={{
                      marginTop: "10px",
                      backgroundColor: "black",
                      borderBottom: "2px solid #FFFFFF",
                      borderTop: "unset",
                      borderRight: "unset",
                      borderLeft: "unset",
                      boxShadow: "unset",
                      borderRadius: "unset",
                      color: "#FFFFFF",
                    }}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message*"
                  />
                  <Row style={{ justifyContent: "end" }}>
                    <div onClick={() => postContact()} className="py-4 banner-box" style={{ width: "100px" }}>
                      <div
                        className="banner-title"
                        style={{ border: "1px solid #FFFFFF", padding: "15px", textAlign: "center" }}
                      >
                        {isLoading ? (
                          <Spinner color="light" size={'sm'} />
                        ) : (
                          '// Send'
                        )}
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <div
              style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
            ></div>
          </Container>
          <Toaster />
        </>
      )}
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
