import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Card,
} from "reactstrap";

import "../../assets/css/main/main.module.css";

import PropTypes from "prop-types";
import useCollapse from "react-collapsed";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

function CardsEvent(props) {
  let { list_data, title, id, last } = props;

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(list_data)
  }, [list_data])

  useEffect(() => {
    setNewData(list_data)
  }, [])

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <>
      <div id={id}>
        <div
          className="py-4"
          style={{
            width: "100%",
            // borderTop: "2px solid #000000",
          }}
        >
          <Container>
            <div
              className="px-4 d-flex align-items-center justify-content-between"
              {...getToggleProps()}
            >
              {isExpanded ? (
                <>
                  <div>
                    <h2
                      style={{
                        color: "#FFFFFF",
                        fontStyle: "bold",
                      }}
                    >
                      {`${title}`}
                    </h2>
                    {/* <div
                      style={{ color: "#7B7B7B" }}
                    >{`${length} OPEN ROLES`}</div> */}
                  </div>
                  <div>
                    <img
                      src={require("assets/img/icons/common/UnionDown.png")}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2
                      style={{
                        color: "#FFFFFF",
                        fontStyle: "bold",
                      }}
                    >
                      {`${title}`}
                    </h2>
                    {/* <div
                      style={{ color: "#7B7B7B" }}
                    >{`${length} OPEN ROLES`}</div> */}
                  </div>
                  <div>
                    <img
                      src={require("assets/img/icons/common/UnionUp.png")}
                      style={{
                        width: "20px",
                        height: "20px",
                      }}
                    />
                  </div>
                </>
              )}
            </div>
            <div className="px-4 mt-4" {...getCollapseProps()}>
              <>
                {newData.length === 0 ?
                  (<></>) : (
                    <>
                      {newData.map((val, index) => {
                        return (
                          <div className="my-2">
                            <a href={val.url} target="_blank" className="py-1 d-flex">
                              <div
                                style={{
                                  color: "#FFFFFF",
                                  display: "flex",
                                  flexDirection: "column",
                                  fontSize: "14px",
                                }}
                              >
                                {val.title}
                              </div>
                            </a>
                          </div>
                        )
                      })}
                    </>
                  )}

              </>
              {/* <div className="py-4" style={{ paddingLeft: "0px", paddingRight: "1.5rem" }}>
                <div className="service-title">{`job description`}</div>
                <div className="service-desc">{`${job_description}`}</div>
              </div>
              <div className="py-4" style={{ paddingLeft: "0px", paddingRight: "1.5rem" }}>
                <div className="service-title">{`requirements`}</div>
                <div className="service-desc">{`${requirements}`}</div>
              </div>
              <div className="py-4 banner-box" style={{ width: "100px" }}>
                <div className="banner-title" style={{ textAlign: "center", border: "1px solid #FFFFFF", padding: "10px", fontSize: "14px", borderRadius: "10px" }}>
                  hit us!
                </div>
              </div> */}
              {/* <div>{`${description_departement}`}</div>
              <div className="mt-4">
                {job.map((val, index) => {
                  if (index % 2 == 0) {
                    return (
                      <div
                        style={{ backgroundColor: "#D9D9D9CC" }}
                        className="p-3 d-flex align-items-center"
                      >
                        <Col>{`${val.attributes.job_title}`}</Col>
                        <Col className="text-center">{`${val.attributes.type_job}`}</Col>
                        <Col className="text-center">{`${val.attributes.city}`}</Col>
                        <Col className="text-center justify-content-center">
                          <div
                            className="mx-auto"
                            style={{ maxWidth: "150px", cursor: "pointer" }}
                          >
                            <a href={`${val.attributes.url}`}>
                              <div
                                className="p-2"
                                style={{
                                  backgroundColor: "#000000",
                                  color: "#ffffff",
                                  cursor: "pointer",
                                  borderRadius: "20px",
                                }}
                              >
                                <a>APPLY NOW</a>
                              </div>
                            </a>
                          </div>
                        </Col>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        style={{ backgroundColor: "rgba(217, 217, 217, 0.28)" }}
                        className="p-3 d-flex align-items-center"
                      >
                        <Col>{`${val.attributes.job_title}`}</Col>
                        <Col className="text-center">{`${val.attributes.type_job}`}</Col>
                        <Col className="text-center">{`${val.attributes.city}`}</Col>
                        <Col className="text-center justify-content-center">
                          <div
                            className="mx-auto"
                            style={{ maxWidth: "150px", cursor: "pointer" }}
                          >
                            <a href={`${val.attributes.url}`}>
                              <div
                                className="p-2"
                                style={{
                                  backgroundColor: "#000000",
                                  color: "#ffffff",
                                  cursor: "pointer",
                                  borderRadius: "20px",
                                }}
                              >
                                <a>APPLY NOW</a>
                              </div>
                            </a>
                          </div>
                        </Col>
                      </div>
                    );
                  }
                })}
              </div> */}
            </div>
          </Container>
        </div>
      </div>
      {last == true ? (
        <>
          <div style={{ backgroundColor: "#000000", height: "1px" }}></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

CardsEvent.propTypes = {
  list_data: PropTypes.any,
  title: PropTypes.any,
  id: PropTypes.any,
  last: PropTypes.any,
};

export default CardsEvent;
