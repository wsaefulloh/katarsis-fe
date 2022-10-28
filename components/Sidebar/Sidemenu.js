import React from "react";
import { Card, Col } from "reactstrap";
import { useRouter } from "next/router";
import routesObj from "routes.js";
import "../../assets/css/side/side.module.css"; //import css khusus

function SideMenu() {
  const router = useRouter();
  const routes = routesObj.routesSidemenu;

  //untuk mengetahui sedang berada di halaman mana
  const url_page = router.asPath;

  const getRouter = (routes, url_page) => {
    return routes.map((props) => {
      if (url_page == `${props.path}`) {
        return (
          <a target="" href={`${props.path}`}>
            <div className={"menu selectActive"}>
              <p className="m-0 textMenu">{props.name}</p>
            </div>
          </a>
        );
      }

      return (
        <a target="" href={`${props.path}`}>
          <div className={"menu selectMenu"}>
            <p className="m-0 textMenu">{props.name}</p>
          </div>
        </a>
      );
    });
  };

  return (
    <>
      <Col xl="3" style={{ paddingLeft: "7.5px", paddingRight: "7.5px" }}>
        <Card style={{ height: "100%" }}>{getRouter(routes, url_page)}</Card>
      </Col>
    </>
  );
}

export default SideMenu;
