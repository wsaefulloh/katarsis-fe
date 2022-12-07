import React, { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// reactstrap components
import { Button, Card, Container, Row, Col, Modal } from "reactstrap";
// layout for this page
import HomeLayout from "layouts/Homepage.js";
import Filter from "../components/Filter/Filter";
import SliderProcess from "../components/SliderProcess/SliderProcess";
import WorkflowGraph from "../components/WorkflowGraph/WorkflowGraph";
import CardsProject from "../components/Cards/CardsProjects";
import CardsProfile from "../components/Cards/CardsProfile";
import AOS from "aos";
import "aos/dist/aos.css";

// core components

import { fetchWrapper } from "../helpers/fetch-wrapper";

import Slider from "react-slick";
import Cookies from "js-cookie";

import "../assets/css/main/main.module.css";

function Home() {
  const workRef = useRef();

  function handleWorkRef() {
    let hash = Cookies.get("hash");
    if (hash == "work") {
      workRef.current.scrollIntoView({ behaviour: "smooth" });
      Cookies.remove("hash");
    } else {
    }
  }

  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const visiMission = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const visiMission1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const mediaCoverage = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const profileSlide = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
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

  const { menu, renderFilter } = Filter();
  const [newMenu, setNewMenu] = useState("");

  const [project, setProject] = useState([]);
  const [profile, setProfile] = useState([]);
  const [media, setMedia] = useState([]);
  const [brands, setBrands] = useState([]);
  const [HWDI, setHWDI] = useState({});
  const [ourTeam, setOurTeam] = useState({});
  const [visi, setVisi] = useState({});
  const [misi, setMisi] = useState({});
  const [fixProject, setFixProject] = useState([]);
  const [banner, setBanner] = useState([]);
  const [count, setCount] = useState(0);
  const [showMoreActive, setShowMoreActive] = useState(true);

  const showMore = async () => {
    let array_project = project;
    let array_fix = fixProject;
    let pangkat = count + 1;
    let start = pangkat * 4;
    let new_array = array_project.slice(start, start + 4);
    setCount(pangkat);
    let newArray = array_fix.concat(new_array);
    setFixProject(newArray);
    if (newArray.length >= project.length) {
      setShowMoreActive(false);
    } else {
      setShowMoreActive(true);
    }
  };

  const getDataOriginalIP = async () => {
    const data = await fetchWrapper.get(`api/new-project/get-by-menu?id=1`);
    if (data) {
      setProject(data.data);
      let array = data.data;
      setCount(0);
      if (array.length <= 4) {
        setShowMoreActive(false);
        setFixProject(data.data);
      } else {
        let fixArray = array.slice(0, 4);
        setFixProject(fixArray);
        setShowMoreActive(true);
      }
    }
  };

  const getDataB2B = async () => {
    const data = await fetchWrapper.get(`api/new-project/get-by-menu?id=2`);
    if (data) {
      setProject(data.data);
      let array = data.data;
      setCount(0);
      if (array.length <= 4) {
        setShowMoreActive(false);
        setFixProject(data.data);
      } else {
        let fixArray = array.slice(0, 4);
        setFixProject(fixArray);
        setShowMoreActive(true);
      }
    }
  };

  const getDataSubMenu = async (id) => {
    const data = await fetchWrapper.get(
      `api/new-project/get-by-submenu?id=${id}`
    );
    if (data) {
      setProject(data.data);
      let array = data.data;
      setCount(0);
      if (array.length <= 4) {
        setShowMoreActive(false);
        setFixProject(data.data);
      } else {
        let fixArray = array.slice(0, 4);
        setFixProject(fixArray);
        setShowMoreActive(true);
      }
    }
  };

  const getDataProfile = async () => {
    const data = await fetchWrapper.get(`api/profile`);
    if (data) {
      setProfile(data.data);
    }
  };

  const getDataMedia = async () => {
    const data = await fetchWrapper.get(`api/media`);
    if (data) {
      setMedia(data.data);
    }
  };

  const getDataBrands = async () => {
    const data = await fetchWrapper.get(`api/brands`);
    if (data) {
      setBrands(data.data);
    }
  };

  const getHowWeDoIt = async () => {
    const data = await fetchWrapper.get(`api/content/get-how`);
    if (data) {
      let obj = data.data;
      setHWDI(obj[0]);
    }
  };

  const getOurTeam = async () => {
    const data = await fetchWrapper.get(`api/content/get-our-team`);
    if (data) {
      let obj = data.data;
      setOurTeam(obj[0]);
    }
  };

  const getMission = async () => {
    const data = await fetchWrapper.get(`api/content/get-misi`);
    if (data) {
      let obj = data.data;
      setMisi(obj[0]);
    }
  };

  const getVision = async () => {
    const data = await fetchWrapper.get(`api/content/get-visi`);
    if (data) {
      let obj = data.data;
      setVisi(obj[0]);
    }
  };

  const getBanner = async () => {
    const data = await fetchWrapper.get(`api/banner`);
    if (data) {
      setBanner(data.data);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    getDataProfile();
    getDataOriginalIP();
    getDataMedia();
    getHowWeDoIt();
    getOurTeam();
    // getVision();
    getMission();
    handleWorkRef();
    getDataBrands();
    getBanner();
  }, []);

  useEffect(() => {
    let menu_baru = menu.split("/");
    setNewMenu(`${menu_baru[0]}`);
    console.log(menu_baru[1]);
    if (menu_baru[1] == " Original IP") {
      getDataOriginalIP();
      setFixProject([]);
    } else if (menu_baru[1] == " B2B") {
      getDataB2B();
      setFixProject([]);
    } else {
      getDataSubMenu(`${menu_baru[1]}`);
      setFixProject([]);
    }
  }, [menu]);

  return (
    <>
      <div
        id="top"
        className="banner_ongoing"
        // style={{ backgroundColor: "#000000" }}
      >
        <Slider {...visiMission1}>
          {banner.map((val) => {
            return (
              <div>
                <div
                  className="text-center"
                  style={{
                    backgroundColor: "#000000",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "450px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage:
                      "url(" +
                      // `https://drive.google.com/thumbnail?id=${img}&sz=w1000` +
                      `https://drive.google.com/uc?export=view&id=${val.url_image}` +
                      ")",
                  }}
                >
                  <div className="header-cover">
                    <h1 className="m-0 pb-4 text_title_vision_mision">
                      {val.title_banner}
                    </h1>
                    {/* <div className="pb-4 text_vision_mision">{`${val.date_banner}`}</div> */}
                  </div>
                  <div
                    style={{
                      width: "200px",
                      position: "absolute",
                      top: "320px",
                    }}
                    className="mx-auto"
                  >
                    <a
                      href={`${val.url}`}
                      style={{
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#000000",
                          width: "200px",
                          textAlign: "center",
                          padding: "10px",
                          // border: "3px solid #000000",
                          borderRadius: "25px",
                          marginLeft: "auto",
                          marginRight: "auto",
                          cursor: "pointer",
                        }}
                      >
                        {`${val.button}`}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
      {/* <div className="py-6 visi_misi" style={{ backgroundColor: "#000000" }}>
        <Slider {...visiMission}>
          <div>
            <div data-aos="fade-up" className="text-center header-cover">
              <div className="pb-4 text_vision_mision">Our Vision</div>
              <h1 className="m-0 pb-4 text_title_vision_mision">
                {visi.description}
              </h1>
            </div>
          </div>

          <div>
            <div className="text-center header-cover">
              <div className="pb-4 text_vision_mision">Our Mission</div>
              <h1 className="m-0 pb-4 text_title_vision_mision">
                {misi.description}
              </h1>
            </div>
          </div>
        </Slider>
      </div> */}
      <div data-aos="fade-up">{renderFilter}</div>

      <div
        ref={workRef}
        id="work"
        className="py-5"
        style={{ backgroundColor: "#000000" }}
      >
        <Container className="pb-5">
          <div
            data-aos="fade-up"
            style={{ color: "#ffffff", paddingLeft: "15px", fontSize: "16px" }}
          >
            {`Work / ${newMenu}`}
          </div>
        </Container>

        <Container>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 box">
            {fixProject.map((val) => {
              return (
                <div data-aos="fade-up">
                  <CardsProject
                    img={val.url_image_cover}
                    place={val.place_project}
                    id={val.id}
                    childTitle={val.child_title}
                    title={val.title_project}
                  />
                </div>
              );
            })}
          </div>
        </Container>

        {showMoreActive == true ? (
          <Container className="pt-5 pb-2">
            <div style={{ justifyContent: "center" }}>
              <div
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  paddingLeft: "15px",
                  width: "200px",
                  textAlign: "center",
                  padding: "10px",
                  border: "3px solid #ffffff",
                  borderRadius: "25px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                }}
                onClick={() => showMore()}
              >
                {`SHOW MORE`}
              </div>
            </div>
          </Container>
        ) : (
          <></>
        )}
      </div>

      <div className="pt-5 pb-4">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              data-aos="fade-up"
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Why Katarsis
            </h1>
            <div
              data-aos="fade-up"
              style={{
                width: "180px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <h2
              data-aos="fade-up"
              style={{
                color: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="py-4"
            >
              {`${HWDI.title}`}
            </h2>
            <div
              data-aos="fade-up"
              className="desc_section"
              style={{
                maxWidth: "70%",
                marginLeft: "auto",
                marginRight: "auto",
                color: "#000000",
              }}
            >
              {`${HWDI.description}`}
            </div>
          </div>
        </Container>
      </div>

      <div data-aos="fade-up">
        <SliderProcess />
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up">
        <WorkflowGraph />
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up" className="pb-5 pt-3">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Media Coverage
            </h1>
            <div
              style={{
                width: "180px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <div className="media_coverage">
              <Container>
                <Card className="content">
                  <Container>
                    <Slider {...mediaCoverage}>
                      {media.map((val) => {
                        return (
                          <Col>
                            <Row
                              className="justify-content-center mb-4 align-items-center"
                              style={{ height: "100px", width: "100%" }}
                            >
                              <img
                                src={`https://drive.google.com/uc?export=view&id=${val.url}`}
                                style={{ maxWidth: "100%", maxHeight: "100px" }}
                              />
                            </Row>
                          </Col>
                        );
                      })}
                    </Slider>
                  </Container>
                </Card>
              </Container>
            </div>
          </div>
        </Container>
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up" className="pb-5 pt-3">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Trusted By
            </h1>
            <div
              style={{
                width: "180px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
            <div className="media_coverage">
              <Container>
                <Card className="content">
                  <Container>
                    <Slider {...mediaCoverage}>
                      {brands.map((val) => {
                        return (
                          <Col>
                            <Row
                              className="justify-content-center mb-4 align-items-center"
                              style={{ height: "100px", width: "100%" }}
                            >
                              <img
                                src={`https://drive.google.com/uc?export=view&id=${val.url}`}
                                style={{ maxWidth: "100%", maxHeight: "100px" }}
                              />
                            </Row>
                          </Col>
                        );
                      })}
                    </Slider>
                  </Container>
                </Card>
              </Container>
            </div>
          </div>
        </Container>
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <div data-aos="fade-up" className="pt-3">
        <Container>
          <div className="text-center justify-content-center">
            <h1
              className="title_section"
              style={{
                color: "#000000",
                fontStyle: "bold",
              }}
            >
              Our Team
            </h1>
            <div
              style={{
                width: "180px",
                height: "5px",
                backgroundColor: "#000000",
                marginRight: "auto",
                marginLeft: "auto",
              }}
              className="my-4"
            ></div>
          </div>
        </Container>
      </div>

      <div className="py-3">
        {/* <Container className="display-large">
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 box">
            {profile.map((val) => {
              return (
                <div data-aos="fade-up">
                  <CardsProfile
                    img={val.url_image}
                    name={val.name}
                    id={val.id}
                    url={val.url_linkedin}
                    position={val.position}
                  />
                </div>
              );
            })}
          </div>
        </Container> */}

        <div className="media_coverage">
          <Container>
            <Card className="content">
              <Container className="profile_slider">
                <Slider {...profileSlide}>
                  {profile.map((val) => {
                    return (
                      <div data-aos="fade-up">
                        <CardsProfile
                          img={val.url_image}
                          name={val.name}
                          id={val.id}
                          url={val.url_linkedin}
                          position={val.position}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Container>
            </Card>
          </Container>
        </div>

        {/* <div className="display-small media_coverage">
          <Container>
            <Card className="content">
              <Container>
                <Slider {...slider}>
                  {profile.map((val) => {
                    return (
                      <div data-aos="fade-up">
                        <CardsProfile
                          img={val.url_image}
                          name={val.name}
                          id={val.id}
                          url={val.url_linkedin}
                          position={val.position}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Container>
            </Card>
          </Container>
        </div> */}
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <Container>
        <div
          data-aos="fade-up"
          className="pb-5 desc_section"
          style={{
            color: "#000000",
            paddingLeft: "50px",
            paddingRight: "50px",
            textAlign: "justify",
          }}
        >
          {`${ourTeam.description}`}
        </div>
      </Container>

      <img
        data-aos="fade-up"
        src={`https://drive.google.com/uc?export=view&id=${ourTeam.url_image}`}
        alt="Image Out Team"
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />

      <div
        data-aos="fade-up"
        className="pt-5 text-center justify-content-center"
      >
        <Link
          activeClass="active"
          to={"top"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              cursor: "pointer",
              width: "fit-content",
            }}
          >
            <img
              src={require("assets/img/icons/common/up.svg")}
              style={{ width: "50px", height: "50px" }}
            />
            <div className="pt-2">TOP</div>
          </div>
        </Link>
      </div>
    </>
  );
}

Home.layout = HomeLayout;

export default Home;
