import React, { useEffect, useState } from "react";
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
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const calendar = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const API_APPS_HOST = process.env.NEXT_PUBLIC_API_HOST;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [media, setMedia] = useState([]);
  const [banner, setBanner] = useState([]);
  const [activeBanner, setActiveBanner] = useState(0);
  const [runBanner, setRunBanner] = useState(true);
  const [intervalId, setIntervalId] = useState(null);
  const [subtitle, setSubTitle] = useState("");
  const [imageSubtitle, setImageSubtitle] = useState([null, null]);
  const [activationService, setActivationService] = useState([]);
  const [whyKatarsis, setWhyKatarsis] = useState([]);
  const [descService, setDescService] = useState(
    "We believe inquality-experiental entertainment to empower Indonesia's creative potential."
  );
  const [month, setMonth] = useState([]);
  const [team, setTeam] = useState();

  const [activeService, setActiveService] = useState(0);
  const [services, setServices] = useState({
    katarsisExperience: [],
    katarsisLive: [],
    katarsisSolutions: [],
    katarsisEntertaiment: [],
  });

  const splitArray = (arr, chunkSize) => {
    const sortedData = arr.sort((a, b) => a.date - b.date);
    const result = [];

    // Loop through the array and slice it into chunks of the specified size
    for (let i = 0; i < sortedData.length; i += chunkSize) {
      result.push(sortedData.slice(i, i + chunkSize));
    }

    return result;
  };

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
        if (element.attributes.service_type.data.attributes.name === "Katarsis Experience") {
          katarsisExperience.push({ id: element.id, image: `${API_APPS_HOST}${element.attributes.image_logo.data.attributes.url}` })
        } else if (element.attributes.service_type.data.attributes.name === "Katarsis Live") {
          katarsisLive.push({ id: element.id, image: `${API_APPS_HOST}${element.attributes.image_logo.data.attributes.url}` })
        } else if (element.attributes.service_type.data.attributes.name === "Katarsis Solutions") {
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

  const getCalendar = async () => {
    const currentYear = new Date().getFullYear();
    const data = await fetchWrapper.get(`api/strapi/get-event?lastYear=${currentYear - 1}&nextYear=${currentYear + 1}`);
    if (data) {
      const allMonths = [
        'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'
      ];

      // Create an object where each month starts as an empty array
      const groupedByMonth = allMonths.reduce((acc, month) => {
        acc[month] = [];
        return acc;
      }, {});

      // Group the data by month
      data.data.forEach(item => {
        const { title, date, url } = item.attributes;

        // Format date to extract month and date
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString('default', { month: 'short' }).toLowerCase(); // "jan", "feb", etc.
        const day = dateObj.getDate(); // Day of the month (e.g., 19)

        // Add the data to the corresponding month
        groupedByMonth[month].push({
          date: day,
          title: title,
          url: url
        });
      });

      // Convert the grouped data into an array of objects
      let newData = allMonths.map(month => ({
        month: month,
        data: splitArray(groupedByMonth[month], 4)
      }));

      console.log(newData)

      setMonth(newData);
    }
  };

  const getDataActivation = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-activation-service`);
    if (data) {
      setActivationService(data.data.slice(0, 3));
    }
  };

  const postContact = async () => {
    setIsLoading(true)
    const data = await fetchWrapper.post(`api/strapi/post-contact-us`, {
      name: "New Activation Service",
      email: "dasda",
      message: "https://example.com/activation-service"
    });
    if (data?.data !== null) {
      toast.success('Success send message. Thank you!');
    } else {
      toast.error('Failed! Try again later.');
    }
    setIsLoading(false)
  };

  const getDataTeam = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-team`);
    if (data) {
      setTeam(data.data);
    }
  };

  const getWhyKatarsis = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-why-katarses`);
    if (data) {
      setWhyKatarsis(data.data);
    }
  };

  const getDescService = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-desc-service`);
    if (data) {
      setDescService(data.data.attributes.description);
    }
  };

  const getDataMediaNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-media`);
    if (data) {
      setMedia(data.data);
    }
  };

  const getDataBanner = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-banner-image`);
    if (data) {
      setBanner([
        data.data.attributes.image_concert.data == null
          ? null
          : `${API_APPS_HOST}${data.data.attributes.image_concert.data.attributes.url}`,
        data.data.attributes.image_ip_katarsis.data == null
          ? null
          : `${API_APPS_HOST}${data.data.attributes.image_ip_katarsis.data.attributes.url}`,
        data.data.attributes.image_agency_work.data == null
          ? null
          : `${API_APPS_HOST}${data.data.attributes.image_agency_work.data.attributes.url}`,
        data.data.attributes.image_venue_management.data == null
          ? null
          : `${API_APPS_HOST}${data.data.attributes.image_venue_management.data.attributes.url}`,
      ]);
    }
  };

  const getDataSubMenu = async () => {
    const data = await fetchWrapper.get(`api/strapi/get-submenu`);
    if (data) {
      setSubTitle(data.data.attributes.title);
      setImageSubtitle([
        data.data.attributes.image1.data == null
          ? null
          : `${API_APPS_HOST}${data.data.attributes.image1.data.attributes.url}`,
        data.data.attributes.image2.data == null
          ? null
          : `${API_APPS_HOST}${data.data.attributes.image2.data.attributes.url}`,
      ]);
    }
  };

  useEffect(() => {
    getDataMediaNew();
    getDataBanner();
    getDataSubMenu();
    getDataActivation();
    getWhyKatarsis();
    getDescService();
    getDataService();
    getCalendar();
    getDataTeam();
    AOS.init({ duration: 2000, once: true });
    window.scrollTo(0, 0);
  }, []);

  // Pastikan interval dibersihkan saat komponen unmount
  useEffect(() => {
    return () => {
      if (runBanner) {
        clearInterval(intervalId); // Membersihkan interval saat komponen unmount
      }
    };
  }, [runBanner]);

  const startInterval = () => {
    if (!runBanner) {
      const id = setInterval(() => {
        setActiveBanner((prevActiveBanner) => {
          if (prevActiveBanner === 3) {
            return 0;
          } else {
            return prevActiveBanner + 1;
          }
        }); // Tambah 1 setiap 3 detik
      }, 3000); // 3000 ms = 3 detik
      setIntervalId(id); // Simpan ID interval
      setRunBanner(true); // Set status interval aktif
    }
  };

  // Fungsi untuk menghentikan interval (pause)
  const stopInterval = () => {
    if (runBanner) {
      clearInterval(intervalId); // Hentikan interval dengan ID yang disimpan
      setRunBanner(false); // Set status interval tidak aktif
    }
  };

  useEffect(() => {
    startInterval();
  }, []); // Empty array berarti efek ini hanya dipanggil sekali saat komponen mount

  return (
    <>
      <Container>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
      <Container className="py-4">
        <Row>
          <Col
            className="py-4 d-flex flex-column"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Row>
              <img
                alt="..."
                src={require("assets/img/Group 3.png")}
                height="150px"
              />
            </Row>
            <Row style={{ width: "100%" }}>
              <div
                className="banner-box"
                style={{ padding: "7.5px", width: "50%" }}
              >
                <div
                  onMouseEnter={() => {
                    setActiveBanner(0);
                    setRunBanner(false);
                    stopInterval();
                  }}
                  onMouseLeave={() => {
                    setActiveBanner(0);
                    setRunBanner(true);
                    startInterval();
                  }}
                  className={`banner-title ${activeBanner == 0 ? "hovered" : ""
                    }`}
                  style={{ border: "1px solid #FFFFFF", padding: "10px" }}
                >
                  Concert
                </div>
              </div>
              <div
                className="banner-box"
                style={{ padding: "7.5px", width: "50%" }}
              >
                <div
                  onMouseEnter={() => {
                    setActiveBanner(1);
                    setRunBanner(false);
                    stopInterval();
                  }}
                  onMouseLeave={() => {
                    setActiveBanner(1);
                    setRunBanner(true);
                    startInterval();
                  }}
                  className={`banner-title ${activeBanner == 1 ? "hovered" : ""
                    }`}
                  style={{ border: "1px solid #FFFFFF", padding: "10px" }}
                >
                  IP Katarsis
                </div>
              </div>
              <div
                className="banner-box"
                style={{ padding: "7.5px", width: "50%" }}
              >
                <div
                  onMouseEnter={() => {
                    setActiveBanner(2);
                    setRunBanner(false);
                    stopInterval();
                  }}
                  onMouseLeave={() => {
                    setActiveBanner(2);
                    setRunBanner(true);
                    startInterval();
                  }}
                  className={`banner-title ${activeBanner == 2 ? "hovered" : ""
                    }`}
                  style={{ border: "1px solid #FFFFFF", padding: "10px" }}
                >
                  Agency Work
                </div>
              </div>
              <div
                className="banner-box"
                style={{ padding: "7.5px", width: "50%" }}
              >
                <div
                  onMouseEnter={() => {
                    setActiveBanner(3);
                    setRunBanner(false);
                    stopInterval();
                  }}
                  onMouseLeave={() => {
                    setActiveBanner(3);
                    setRunBanner(true);
                    startInterval();
                  }}
                  className={`banner-title ${activeBanner == 3 ? "hovered" : ""
                    }`}
                  style={{ border: "1px solid #FFFFFF", padding: "10px" }}
                >
                  Venue Management
                </div>
              </div>
            </Row>
          </Col>
          <Col className="py-4 d-flex">
            {banner.map((val, idx) => {
              return (
                <img
                  alt="..."
                  src={
                    val == null
                      ? require("assets/img/Rectangle 5.png")
                      : `${val}`
                  }
                  className={`image-banner ${activeBanner == idx ? "open" : ""
                    }`}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
      <Container className="py-4">
        <Row>
          <Col xl="3" className="py-4 d-flex flex-column">
            <img
              alt="..."
              src={
                imageSubtitle[0] == null
                  ? require("assets/img/Rectangle 5.png")
                  : `${imageSubtitle[0]}`
              }
              style={{
                width: "100%",
                paddingBottom: "7.5px",
              }}
            />
          </Col>
          <Col className="py-4 d-flex">
            <div
              style={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                fontSize: "28px",
                padding: "30px",
              }}
            >
              {subtitle}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl="3" className="pt-1 pb-4 d-flex flex-column">
            <img
              alt="..."
              src={
                imageSubtitle[1] == null
                  ? require("assets/img/Rectangle 5.png")
                  : `${imageSubtitle[1]}`
              }
              style={{
                width: "100%",
                paddingBottom: "7.5px",
              }}
            />
          </Col>
          <Col className="pt-1 pb-4 d-flex justify-content-end">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                padding: "50px",
              }}
            >
              <div>
                <img
                  alt="..."
                  src={require("assets/img/Group 2.png")}
                  style={{
                    width: "200px",
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="py-4 d-flex">
            <img
              alt="..."
              src={require("assets/img/Group 1.png")}
              style={{
                width: "450px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xl="3"></Col>
          <Col className="py-4 d-flex">
            <img
              alt="..."
              src={require("assets/img/Activation Services.png")}
              style={{
                width: "350px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xl="3"></Col>
          <Col className="py-4 d-flex justify-content-end">
            {activationService.map((val, idx) => {
              return (
                <Col className="py-4 d-flex justify-content-end px-0">
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
          </Col>
        </Row>
        <Row>
          <Col xl="3"></Col>
          <Col className="pt-4 d-flex">
            <div
              style={{ color: "#FFFFFF", fontSize: "40px", fontWeight: "bold" }}
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
                      <div
                        className="py-4 d-flex justify-content-between"
                        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                      >
                        <div style={{ color: "#FFFFFF" }}>
                          {val.attributes.title}
                        </div>
                        <div
                          className="MaisonNeue-Light"
                          style={{ color: "#FFFFFF", fontSize: "12px" }}
                        >
                          {val.attributes.short_description}
                        </div>
                      </div>
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
                      <div
                        className="py-4 d-flex justify-content-between"
                        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                      >
                        <div style={{ color: "#FFFFFF" }}>
                          {val.attributes.title}
                        </div>
                        <div
                          className="MaisonNeue-Light"
                          style={{ color: "#FFFFFF", fontSize: "12px" }}
                        >
                          {val.attributes.short_description}
                        </div>
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
      <Container className="py-4">
        <Row>
          <Col className="pt-4 d-flex justify-content-center">
            <div
              style={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                fontSize: "40px",
                fontStyle: "bold",
                fontWeight: "bold",
              }}
            >
              services
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <div
              className="py-4"
              style={{
                color: "#F9F6EE",
                display: "flex",
                flexDirection: "column",
                fontSize: "16px",
              }}
            >{`${descService}`}</div>
          </Col>
        </Row>
        <Row className="py-4">
          <Col
            xl={3}
            className="d-flex justify-content-center"
            style={{ borderRight: "3px solid #FFFFFF" }}
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
            className="d-flex justify-content-center"
            style={{ borderRight: "3px solid #FFFFFF" }}
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
            className="d-flex justify-content-center"
            style={{ borderRight: "3px solid #FFFFFF" }}
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
                  Coming Soon ...
                </div>
              ) : (
                services.katarsisExperience.map((val, idx) => {
                  return (
                    <Col xl={3} className="d-flex p-4">
                      <img
                        className="service"
                        alt="..."
                        src={val.image}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
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
                  Coming Soon ...
                </div>
              ) : (
                services.katarsisLive.map((val, idx) => {
                  return (
                    <Col xl={3} className="d-flex p-4">
                      <img
                        className="service"
                        alt="..."
                        src={val.image}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
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
                  Coming Soon ...
                </div>
              ) : (
                services.katarsisSolutions.map((val, idx) => {
                  return (
                    <Col xl={3} className="d-flex p-4">
                      <img
                        className="service"
                        alt="..."
                        src={val.image}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
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
                  Coming Soon ...
                </div>
              ) : (
                services.katarsisEntertaiment.map((val, idx) => {
                  return (
                    <Col xl={3} className="d-flex p-4">
                      <img
                        onClick={() => { window.location.href = `http://localhost:3002/work/${val.id}` }}
                        className="service"
                        alt="..."
                        src={val.image}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
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
      <Container>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
      <Container className="py-4">
        <Row>
          <Col
            xl="3"
            className="py-4 d-flex flex-column justify-content-between"
          >
            <div
              style={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                fontSize: "36px",
                fontWeight: "bold",
              }}
            >
              event calendar 2025
            </div>
            <img
              alt="..."
              src={require("assets/img/Group 24.png")}
              style={{
                width: "50%",
                aspectRatio: "1/1",
              }}
            />
          </Col>
          <Col xl="9" className="py-4">
            <Row>
              {month.map((val, idx) => {
                return (
                  <Col
                    xl={4}
                    className="d-flex flex-column justify-content-start pb-5"
                    style={{ border: "1px solid #FFFFFF", padding: "20px", minHeight: "200px" }}
                  >
                    <div
                      className="pb-2"
                      style={{
                        color: "#FFFFFF",
                        display: "flex",
                        flexDirection: "column",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      {val.month}
                    </div>
                    <div className="calendar">
                      <Slider {...calendar}>
                        {val.data.map((q) => {
                          return (
                            <Col className="p-1">
                              {q.map((r) => {
                                return (
                                  <div className="my-2">
                                    <a href={r.url} target="_blank" className="py-1 d-flex">
                                      <div
                                        style={{
                                          color: "#FFFFFF",
                                          display: "flex",
                                          flexDirection: "column",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {r.date}
                                      </div>
                                      <div
                                        className="mx-2"
                                        style={{
                                          color: "#FFFFFF",
                                          display: "flex",
                                          flexDirection: "column",
                                          fontSize: "12px",
                                        }}
                                      >
                                        -
                                      </div>
                                      <div
                                        style={{
                                          color: "#FFFFFF",
                                          display: "flex",
                                          flexDirection: "column",
                                          fontSize: "12px",
                                        }}
                                      >
                                        {r.title}
                                      </div>
                                    </a>
                                  </div>
                                )
                              })}
                            </Col>
                          );
                        })}
                      </Slider>
                    </div>
                  </Col>
                )
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
      <Container className="py-4">
        <Row className="align-items-center">
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
                            src={`${API_APPS_HOST}${val.attributes?.images?.data?.attributes?.url}`}
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
          <Col xl="3" className="py-4 d-flex justify-content-end">
            <div
              style={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                justifyContent: "end",
                fontSize: "42px",
                fontWeight: "bold",
                paddingLeft: "50px",
                lineHeight: "2.7rem",
              }}
            >
              our clients
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
      <Container className="py-4">
        <Row>
          <Col xl="3" className="py-4 d-flex">
            <div
              style={{
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                fontSize: "42px",
                fontWeight: "bold",
                lineHeight: "2.7rem",
              }}
            >
              team.
            </div>
          </Col>
          <Col className="py-4 d-flex ">
            <img
              alt="..."
              src={`${API_APPS_HOST}${team?.attributes?.image?.data?.attributes?.url}`}
              style={{
                width: "100%",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col className="pb-4 d-flex justify-content-end px-0">
            <div
              className="pb-4"
              style={{ paddingLeft: "0px", paddingRight: "1.5rem" }}
            >
              <div className="service-title">{team?.attributes?.title}</div>
              <div className="service-desc" style={{ maxWidth: "500px" }}>
                {team?.attributes?.description}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}
        ></div>
      </Container>
      <Container className="py-4">
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
              }}
            />
          </Col>
          <Col className="d-flex px-0">
            <div style={{ width: "100%", paddingLeft: "50px" }}>
              <div
                style={{
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "42px",
                  fontWeight: "bold",
                  lineHeight: "2.7rem",
                }}
              >
                get in
              </div>
              <div
                style={{
                  color: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "42px",
                  fontWeight: "bold",
                  lineHeight: "2.7rem",
                }}
              >
                touch
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
  );
}

Home.layout = HomeLayout;

export default Home;
