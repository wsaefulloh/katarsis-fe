"use client";
import React from "react";
import { withRouter } from "next/router";
// core components
import HomeFooter from "components/Footers/HomeFooter.js";
import "../assets/css/main/main.module.css";

function HomeLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#000000" }}>

      <div className="main-content margin">
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            {children}
          </div>
          <HomeFooter />
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeLayout);
