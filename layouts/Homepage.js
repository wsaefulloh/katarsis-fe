import React, { useEffect, useState } from "react";
import { withRouter } from "next/router";
// core components
import HomeNavbar from "components/Navbars/HomeNavbar.js";
import HomeFooter from "components/Footers/HomeFooter.js";
import Link from "next/link";
import { fetchWrapper } from "../helpers/fetch-wrapper";
import { Row } from "reactstrap";
import "../assets/css/main/main.module.css";

function HomeLayout({ children }) {
  const [status, setStatus] = useState();
  const [background, setBackground] = useState({
    title: "",
    description: "",
    url_image: "",
  });

  // const getBackground = async () => {
  //   const data = await fetchWrapper.get(`api/get-background-home`);
  //   if (data) {
  //     let newData = data.data;
  //     let dataBackground = newData[0];
  //     setBackground({
  //       ...background,
  //       title: dataBackground.title,
  //       description: dataBackground.description,
  //       url_image: dataBackground.url_image,
  //     });
  //   }
  // };

  // const getStatus = async () => {
  //   const data = await fetchWrapper.get(`api/get-status-home`);
  //   if (data) {
  //     let newData = data.data;
  //     let status = newData[0];
  //     setStatus(status.title);
  //   }
  // };

  // useEffect(() => {
  //   getStatus();
  //   getBackground();
  // }, []);

  return (
    <div style={{ backgroundColor: "#000000" }}>
      <div className="main-content margin">
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <HomeNavbar />
            {children}
          </div>
          <HomeFooter />
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeLayout);
