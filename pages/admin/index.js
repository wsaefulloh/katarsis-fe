import React, { Component } from "react";
import Router from "next/router";

export default function IndexAdmin() {
  React.useEffect(() => {
    Router.push("/admin/home-board");
  });
  return <div />;
}
