import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

import "../../assets/css/main/main.module.css";

import { fetchWrapper } from "../../helpers/fetch-wrapper";
import Cookies from "js-cookie";

function HomeFooterDetails() {
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [info, setInfo] = useState("");
  const [marketing, setMarketing] = useState("");
  const [partnership, setPartnership] = useState("");
  const [career, setCareer] = useState("");

  const contactRef = useRef();

  function handleContactRef() {
    let hash = Cookies.get("hash");
    if (hash == "footer_id") {
      contactRef.current.scrollIntoView({ behaviour: "smooth" });
      Cookies.remove("hash");
    } else {
    }
  }

  const getAddress = async () => {
    const data = await fetchWrapper.get(`../api/strapi/get-address`);
    if (data) {
      setAddress(data.data.attributes.value);
    }
  };

  const getInstagram = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=instagram`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setInstagram(link.attributes.url);
    }
  };

  const getLinkedin = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=linkedin`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setLinkedin(link.attributes.url);
    }
  };

  const getTiktok = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=tiktok`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setTiktok(link.attributes.url);
    }
  };

  const getNumber = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=number`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setNumber(link.attributes.url);
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

  const getInfo = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=info`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setInfo(link.attributes.url);
    }
  };

  const getMarketing = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=marketing`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setMarketing(link.attributes.url);
    }
  };

  const getPartnership = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=partnership`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setPartnership(link.attributes.url);
    }
  };

  const getCareer = async () => {
    const data = await fetchWrapper.get(`../api/strapi/content/get-link?type=career`);
    if (data) {
      let newData = data.data;
      let link = newData[0];
      setCareer(link.attributes.url);
    }
  };

  useEffect(() => {
    getInstagram();
    getTiktok();
    getLinkedin();
    getNumber();
    getWhatsapp();
    getInfo();
    getMarketing();
    getPartnership();
    getCareer();
    handleContactRef();
    getAddress()
  }, []);

  return (
    <>
      <footer id="footer_id" ref={contactRef}>
        <Container className="pt-4 ">
          <div className="text-center pb-4">
            <img
              alt="..."
              src={require("assets/img/brand/Logo Katarsis png.png")}
              height="40px"
            />
          </div>
          <div className="pt-4 pb-3 d-flex align-items-center justify-content-center">
            <Link href={`${instagram}`}>
              <a target="_blank">
                <div className="mx-1">
                  <img
                    style={{ width: "20px" }}
                    src={require("assets/img/brand/logo instagram.png")}
                  />
                </div>
              </a>
            </Link>
            {/* <Link href={`${tiktok}`}>
              <a target="_blank">
                <div className="mx-1">
                  <img
                    style={{ width: "20px" }}
                    src={require("assets/img/brand/logo tiktok.png")}
                  />
                </div>
              </a>
            </Link> */}
            <Link href={`${linkedin}`}>
              <a target="_blank">
                <div className="mx-1">
                  <img
                    style={{ width: "20px" }}
                    src={require("assets/img/brand/logo linkedin.png")}
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="display-large">
            <Row className="pb-2 pt-5">
              <Col className="padding_footer">
                <div className="border-footer">
                  <div className="mx-3 py-2">
                    <h5>INFO</h5>
                    <a style={{ cursor: "pointer" }} href={`mailto:${info}`}>
                      <div>{`${info}`}</div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="padding_footer">
                <div className="border-footer">
                  <div className="mx-3 py-2">
                    <h5>MARKETING</h5>
                    <a
                      style={{ cursor: "pointer" }}
                      href={`mailto:${marketing}`}
                    >
                      <div>{`${marketing}`}</div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="padding_footer">
                <div className="border-footer">
                  <div className="mx-3 py-2">
                    <h5>PARTNERSHIP</h5>
                    <a
                      style={{ cursor: "pointer" }}
                      href={`mailto:${partnership}`}
                    >
                      <div>{`${partnership}`}</div>
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="padding_footer">
                <div className="border-footer">
                  <div className="mx-3 py-2">
                    <h5>CUSTOMER SERVICE</h5>
                    <div>{`${number}`}</div>
                  </div>
                </div>
              </Col>
              <Col className="padding_footer">
                <div>
                  <div className="mx-3 py-2">
                    <h5>CAREERS</h5>
                    <a style={{ cursor: "pointer" }} href={`mailto:${career}`}>
                      <div>{`${career}`}</div>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="display-small">
            <Col className="padding_footer">
              <div className="border-footer">
                <div className="mx-3 pt-2 pb-4">
                  <h5>INFO</h5>
                  <a style={{ cursor: "pointer" }} href={`mailto:${info}`}>
                    <div>{`${info}`}</div>
                  </a>
                </div>
              </div>
            </Col>
            <Col className="padding_footer">
              <div className="border-footer">
                <div className="mx-3 pb-4">
                  <h5>MARKETING</h5>
                  <a style={{ cursor: "pointer" }} href={`mailto:${marketing}`}>
                    <div>{`${marketing}`}</div>
                  </a>
                </div>
              </div>
            </Col>
            <Col className="padding_footer">
              <div className="border-footer">
                <div className="mx-3 pb-4">
                  <h5>PARTNERSHIP</h5>
                  <a
                    style={{ cursor: "pointer" }}
                    href={`mailto:${partnership}`}
                  >
                    <div>{`${partnership}`}</div>
                  </a>
                </div>
              </div>
            </Col>
            <Col className="padding_footer">
              <div className="border-footer">
                <div className="mx-3 pb-4">
                  <h5>CUSTOMER SERVICE</h5>
                  <div>{`${number}`}</div>
                </div>
              </div>
            </Col>
            <Col className="padding_footer">
              <div>
                <div className="mx-3 pb-2">
                  <h5>CAREERS</h5>
                  <a style={{ cursor: "pointer" }} href={`mailto:${career}`}>
                    <div>{`${career}`}</div>
                  </a>
                </div>
              </div>
            </Col>
          </div>

          <Container>
            <div className="text-center pt-5 pb-3">
              <h3>PT. ASTANA DIGITAL NUSANTARA</h3>
              <div
                style={{
                  maxWidth: "450px",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
                className="pb-5"
              >
                {address}
              </div>
              <div>© Katarsis 2022</div>
            </div>
          </Container>
        </Container>
      </footer>
      <Link href={`https://wa.me/${whatsapp}`}>
        <a target="_blank">
          <div
            className="chatbox__button"
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              zIndex: "1234567",
              padding: "10px",
              backgroundColor: "#7EE488",
              border: "none",
              outline: "none",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            <img
              width="30px"
              src="data:image/png;base64,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"
            />
          </div>
        </a>
      </Link>
    </>
  );
}

export default HomeFooterDetails;
