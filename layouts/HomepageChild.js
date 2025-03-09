import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import HomeFooter from "components/Footers/HomeFooter.js";
import Link from "next/link";
import { fetchWrapper } from "../helpers/fetch-wrapper";
import { Row } from "reactstrap";
import "../assets/css/main/main.module.css";

function HomeChildLayout({ children }) {
  const [status, setStatus] = useState();
  const [background, setBackground] = useState({
    title: "",
    description: "",
    url_image: "",
  });

  const getBackground = async () => {
    const data = await fetchWrapper.get(`../api/get-background-home`);
    if (data) {
      let newData = data.data;
      let dataBackground = newData[0];
      setBackground({
        ...background,
        title: dataBackground.title,
        description: dataBackground.description,
        url_image: dataBackground.url_image,
      });
    }
  };

  const getStatus = async () => {
    const data = await fetchWrapper.get(`../api/get-status-home`);
    if (data) {
      let newData = data.data;
      let status = newData[0];
      setStatus(status.title);
    }
  };

  useEffect(() => {
    getStatus();
    getBackground();
  }, []);

  return (
    <>
      <div className="main-content">
        {status != "active" ? (
          <>
            <div
              className="p-0 m-0 coming-soon"
              style={{
                // backgroundImage:
                //   "url(" +
                //   `https://drive.google.com/uc?export=view&id=${background.url_image}` +
                //   ")",
                width: "100%",
                backgroundPosition: "center",
                backgroundSize: "cover",
                maxWidth: "100%",
              }}
            >
              <div className="gradient__card__detail_film">
                <Row className="justify-content-center align-items-center py-6 m-0">
                  <div className="text-center py-6">
                    <div
                      className="text-center"
                      style={{ color: "#FE7900", fontSize: "8vw" }}
                    >
                      {background.title}
                    </div>
                    <div
                      className="text-center"
                      style={{ color: "#ffffff", fontSize: "2vw" }}
                    >
                      {background.description}
                    </div>
                  </div>
                </Row>
              </div>
            </div>
            <HomeFooter />
          </>
        ) : (
          <>
            {/* <HomeNavbar /> */}
            {children}
            <HomeFooter />
          </>
        )}
      </div>
    </>
  );
}

export default withRouter(HomeChildLayout);
