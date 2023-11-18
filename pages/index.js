import React, { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

// reactstrap components
import { Card, Container, Row, Col } from "reactstrap";
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
  const [profile, setProfile] = useState([]);
  const [media, setMedia] = useState([]);
  const [brands, setBrands] = useState([]);
  const [HWDI, setHWDI] = useState({});
  const [ourTeam, setOurTeam] = useState({});
  const [banner, setBanner] = useState([]);
  const [page, setPage] = useState(1);
  const [menuProject, setMenuProject] = useState(1);
  const [submenuProject, setSubmenuProject] = useState(null);
  const [newProject, setNewProject] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const getDataProject = async (id_menu, id_submenu, page) => {
    let data
    setPage(Number(page))
    if (page === 1) {
      data = await fetchWrapper.get(`api/strapi/get-project?menu=${id_menu}&submenu=${id_submenu}&page=${page}`);
      setNewProject(data.data)
      setTotalPage(Number(data.meta.pagination.pageCount))
    } else {
      data = await fetchWrapper.get(`api/strapi/get-project?menu=${id_menu}&submenu=${id_submenu}&page=${page}`);
      let dataNewProject = newProject
      let newDataArray = data.data
      setNewProject(dataNewProject.concat(newDataArray))
      setTotalPage(Number(data.meta.pagination.pageCount))
    }
  };

  const getDataProfileNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-profile`);
    if (data) {
      setProfile(data.data);
      console.log(data)
    }
  };

  const getOurTeamNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-profile?team=true`);
    if (data) {
      let obj = data.data;
      setOurTeam(obj[0]);
    }
  };

  const getDataMediaNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-media`);
    if (data) {
      setMedia(data.data);
    }
  };

  const getDataBrandsNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-brands`);
    if (data) {
      setBrands(data.data);
    }
  };

  const getHowWeDoItNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-content?type=how-we-do-it`);
    if (data) {
      let obj = data.data;
      setHWDI(obj[0]);
    }
  };

  const getBannerNew = async () => {
    const data = await fetchWrapper.get(`api/strapi/new-banner`);
    if (data) {
      console.log(data.data[0].attributes.url_link)
      setBanner(data.data);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
    getDataMediaNew()
    getHowWeDoItNew();
    getOurTeamNew();
    handleWorkRef();
    getDataBrandsNew()
    getBannerNew()
    getDataProfileNew()
  }, []);

  useEffect(() => {
    let menu_baru = menu.split("/");
    setNewMenu(`${menu_baru[0]}`);
    if (menu_baru[1] == " Original IP") {
      getDataProject(1, null, 1)
      setPage(1)
      setMenuProject(1)
      setSubmenuProject(null)
    } else if (menu_baru[1] == " B2B") {
      getDataProject(2, null, 1)
      setPage(1)
      setMenuProject(2)
      setSubmenuProject(null)
    } else {
      getDataProject(null, Number(menu_baru[1]), 1)
      setPage(1)
      setMenuProject(null)
      setSubmenuProject(Number(menu_baru[1]))
    }
  }, [menu]);

  return (
    <>
      <div
        id="top"
        className="banner_ongoing"
      >
        <Slider {...visiMission1}>
          {banner.map((val) => {
            return (
              <div>
                <Col
                  className="text-center m-0 p-0"
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <a href={`${val.attributes?.url_link}`} target="_blank">
                    <img
                      src={`https://admin.katarsis.co.id${val.attributes?.images?.data?.attributes?.url}`}
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        marginBottom: "20px",
                      }}
                    />
                  </a>
                </Col>
              </div>
            );
          })}
        </Slider>
      </div>
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
            {newProject.map((val) => {
              return (
                <div data-aos="fade-up">
                  <CardsProject
                    img={val.attributes?.images_cover?.data?.attributes?.url}
                    place={val.attributes?.place_project}
                    id={val.id}
                    childTitle={val.attributes?.child_title}
                    title={val.attributes?.title_project}
                  />
                </div>
              );
            })}
          </div>
        </Container>

        {page !== totalPage ? (
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
                onClick={() => getDataProject(menuProject, submenuProject, page + 1)}
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
              {`${HWDI.attributes?.title}`}
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
              {`${HWDI.attributes?.description}`}
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
                                src={`https://admin.katarsis.co.id${val.attributes?.images?.data?.attributes?.url}`}
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
                                src={`https://admin.katarsis.co.id${val.attributes?.images?.data?.attributes?.url}`}
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
        <div className="media_coverage">
          <Container>
            <Card className="content">
              <Container className="profile_slider">
                <Slider {...profileSlide}>
                  {profile.map((val) => {
                    return (
                      <div data-aos="fade-up">
                        <CardsProfile
                          img={val.attributes?.image?.data?.attributes?.url}
                          name={val.attributes?.name}
                          id={val?.id}
                          url={val.attributes?.url_linkedin}
                          position={val.attributes?.position}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </Container>
            </Card>
          </Container>
        </div>
      </div>

      <div
        className="my-5"
        style={{ height: "2px", backgroundColor: "#aaaaaa", width: "100%" }}
      ></div>

      <img
        data-aos="fade-up"
        src={`https://admin.katarsis.co.id${ourTeam.attributes?.image?.data?.attributes?.url}`}
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
