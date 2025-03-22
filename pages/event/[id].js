import React, { useEffect, useState } from "react";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

// reactstrap components
import { Container, Row, Col, Spinner } from "reactstrap";
import Slider from "react-slick";
import "../../assets/css/main/main.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import ProjectLayout from "layouts/Project.js";
import HomeNavbar from "../../components/Navbars/HomeNavbar";
import { throttle } from 'lodash'; // Untuk optimasi throttling

function Work() {

  const API_APPS_HOST = process.env.NEXT_PUBLIC_API_HOST;

  const mediaCoverage = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          arrows: false,
        },
      },
    ],
  };

  const mediaCoverage2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          arrows: false,
          rtl: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          arrows: false,
          rtl: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          arrows: false,
          rtl: true,
        },
      },
    ],
  };

  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(7, url_page.length);

  const [projects, setProjects] = useState({});
  const [homepage, setHomepage] = useState({});
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [whatsapp, setWhatsapp] = useState("");

  const getDetailProject = async () => {
    const data = await fetchWrapper.get(
      `../api/strapi/get-service-details?id=${id}`
    );
    if (data) {
      setProjects(data.data[0]);
    }
  };

  const getHomepage = async () => {
    const data = await fetchWrapper.get(`../api/strapi/get-homepage`);
    if (data) {
      setHomepage(data?.data?.attributes)
    }
  };

  const getWhatsapp = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=whatsapp`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setWhatsapp(link.attributes.url);
    }
  };

  const getAlldata = async () => {
    setIsLoadingPage(true)
    await getDetailProject();
    setIsLoadingPage(false)
    await getWhatsapp();
    await getHomepage();
  };

  const [visibleId, setVisibleId] = useState(null);

  useEffect(() => {

    getAlldata();

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
      // console.log('ID yang sedang terlihat:', currentVisibleId);
    }, 100); // Throttle setiap 100ms

    window.addEventListener('scroll', handleScroll);

    // Bersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HomeNavbar whatsapp={whatsapp} activeScroll={null} logoUrl={`${API_APPS_HOST}${homepage?.logo?.data?.attributes?.url ?? undefined}`} />
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
          <Container>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
          </Container>
          <Container className="py-6">
            <Row>
              <Col xl='3' className="py-4 d-flex flex-column" style={{ alignItems: "center", justifyContent: "space-between" }}>
                <img
                  alt="..."
                  src={`${API_APPS_HOST}${projects?.attributes?.image_logo?.data?.attributes?.url}`}
                  style={{
                    width: "100%",
                    paddingBottom: "7.5px",
                  }}
                />
              </Col>
              <Col className="py-4 d-flex">
                <div className="py-4">
                  <div className="service-title">{projects?.attributes?.name}</div>
                  <div className="service-desc">{projects?.attributes?.description}</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl='3' className="py-4 d-flex flex-column" style={{ justifyContent: "end" }}>
                <div className="py-4">
                  <div className="service-desc" style={{ marginTop: "0px" }}>{projects?.attributes?.description_image}</div>
                </div>
              </Col>
              <Col xl='9' className="py-4">
                <Slider {...mediaCoverage2} className="pb-4">
                  {projects?.attributes?.image_banner_top.data.map((val) => {
                    return (
                      <Col>
                        <Row
                          className="justify-content-center align-items-center"
                          style={{ height: "160px", width: "100%" }}
                        >
                          <img
                            src={`${API_APPS_HOST}${val?.attributes?.url}`}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                          />
                        </Row>
                      </Col>
                    );
                  })}
                </Slider>
                <Slider {...mediaCoverage}>
                  {projects?.attributes?.image_banner_bottom.data.map((val) => {
                    return (
                      <Col>
                        <Row
                          className="justify-content-center align-items-center"
                          style={{ height: "160px", width: "100%" }}
                        >
                          <img
                            src={`${API_APPS_HOST}${val?.attributes?.url}`}
                            style={{ height: "100%", width: "100%", objectFit: "cover" }}
                          />
                        </Row>
                      </Col>
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
          <Container>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
          </Container>
          <Container>
            <Row>
              <Col xl='5' className="py-4 d-flex flex-column justify-content-center">
                <div>
                  <div className="service-title">{projects?.attributes?.title}</div>
                  <div className="service-desc">{projects?.attributes?.subtitle}</div>
                </div>
              </Col>
              <Col className="py-4 d-flex justify-content-between " xl='7'>
                <Row style={{ width: "100%" }}>
                  {projects?.attributes?.metrics.data.map((val) => {
                    return (
                      <Col xl='6' className="px-4 py-2 d-flex" style={{ alignItems: "center", justifyContent: "space-between" }}>
                        <div className="service-title">{val.title}</div>
                        <div className="service-title">{val.value}</div>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Row>
          </Container>
          <Container>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#FFFFFF" }}></div>
          </Container>
        </>
      )}
    </>
  );
}

Work.layout = ProjectLayout;

export default Work;
