import React, { Component } from "react";
import Router from "next/router";

export default function IndexAdmin() {
  React.useEffect(() => {
    Router.push("/admin/work-project");
  });
  return <div />;
}
