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

function CardsCareer(props) {
  let { description_departement, title_departement, id, last } = props;

  const [job, setJob] = useState([]);
  const [length, setLength] = useState(0);

  const getAllJob = async () => {
    const data = await fetchWrapper.get(`api/get-job?id_departement=${id}`);
    if (data) {
      setJob(data.data);
      let forLength = data.data;
      setLength(forLength.length);
    }
  };

  useEffect(() => {
    getAllJob();
  }, []);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  if (last == true) {
    return (
      <>
        <div>
          <div style={{ backgroundColor: "#000000", height: "1px" }}></div>
          <div
            className="py-4"
            style={{
              width: "100%",
              // borderTop: "2px solid #000000",
            }}
          >
            <Container>
              <div
                className="d-flex align-items-center justify-content-between"
                {...getToggleProps()}
              >
                {isExpanded ? (
                  <>
                    <div>
                      <h2
                        style={{
                          color: "#000000",
                          fontStyle: "bold",
                        }}
                      >
                        {`${title_departement}`}
                      </h2>
                      <div
                        style={{ color: "#7B7B7B" }}
                      >{`${length} OPEN ROLES`}</div>
                    </div>
                    <div>
                      <img
                        src={require("assets/img/icons/common/up_vector.png")}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2
                        style={{
                          color: "#000000",
                          fontStyle: "bold",
                        }}
                      >
                        {`${title_departement}`}
                      </h2>
                      <div
                        style={{ color: "#7B7B7B" }}
                      >{`${length} OPEN ROLES`}</div>
                    </div>
                    <div>
                      <img
                        src={require("assets/img/icons/common/down_vector.png")}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4" {...getCollapseProps()}>
                <div>{`${description_departement}`}</div>
                <div className="mt-4">
                  {job.map((val, index) => {
                    if (index % 2 == 0) {
                      return (
                        <div
                          style={{ backgroundColor: "#D9D9D9CC" }}
                          className="p-3 d-flex align-items-center"
                        >
                          <Col>{`${val.job_title}`}</Col>
                          <Col className="text-center">{`${val.type_job}`}</Col>
                          <Col className="text-center">{`${val.city}`}</Col>
                          <Col className="text-center justify-content-center">
                            <div
                              className="mx-auto"
                              style={{ maxWidth: "150px", cursor: "pointer" }}
                            >
                              <a href={`${val.url}`}>
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
                          style={{
                            backgroundColor: "rgba(217, 217, 217, 0.28)",
                          }}
                          className="p-3 d-flex align-items-center"
                        >
                          <Col>{`${val.job_title}`}</Col>
                          <Col className="text-center">{`${val.type_job}`}</Col>
                          <Col className="text-center">{`${val.city}`}</Col>
                          <Col className="text-center justify-content-center">
                            <div
                              className="mx-auto"
                              style={{ maxWidth: "150px", cursor: "pointer" }}
                            >
                              <a href={`${val.url}`}>
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
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div style={{ backgroundColor: "#000000", height: "1px" }}></div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div style={{ backgroundColor: "#000000", height: "1px" }}></div>
          <div
            className="py-4"
            style={{
              width: "100%",
              // borderTop: "2px solid #000000",
            }}
          >
            <Container>
              <div
                className="d-flex align-items-center justify-content-between"
                {...getToggleProps()}
              >
                {isExpanded ? (
                  <>
                    <div>
                      <h2
                        style={{
                          color: "#000000",
                          fontStyle: "bold",
                        }}
                      >
                        {`${title_departement}`}
                      </h2>
                      <div
                        style={{ color: "#7B7B7B" }}
                      >{`${length} OPEN ROLES`}</div>
                    </div>
                    <div>
                      <img
                        src={require("assets/img/icons/common/up_vector.png")}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <h2
                        style={{
                          color: "#000000",
                          fontStyle: "bold",
                        }}
                      >
                        {`${title_departement}`}
                      </h2>
                      <div
                        style={{ color: "#7B7B7B" }}
                      >{`${length} OPEN ROLES`}</div>
                    </div>
                    <div>
                      <img
                        src={require("assets/img/icons/common/down_vector.png")}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="mt-4" {...getCollapseProps()}>
                <div>{`${description_departement}`}</div>
                <div className="mt-4">
                  {job.map((val, index) => {
                    if (index % 2 == 0) {
                      return (
                        <div
                          style={{ backgroundColor: "#D9D9D9CC" }}
                          className="p-3 d-flex align-items-center"
                        >
                          <Col>{`${val.job_title}`}</Col>
                          <Col className="text-center">{`${val.type_job}`}</Col>
                          <Col className="text-center">{`${val.city}`}</Col>
                          <Col className="text-center justify-content-center">
                            <div
                              className="mx-auto"
                              style={{ maxWidth: "150px", cursor: "pointer" }}
                            >
                              <a href={`${val.url}`}>
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
                          style={{
                            backgroundColor: "rgba(217, 217, 217, 0.28)",
                          }}
                          className="p-3 d-flex align-items-center"
                        >
                          <Col>{`${val.job_title}`}</Col>
                          <Col className="text-center">{`${val.type_job}`}</Col>
                          <Col className="text-center">{`${val.city}`}</Col>
                          <Col className="text-center justify-content-center">
                            <div
                              className="mx-auto"
                              style={{ maxWidth: "150px", cursor: "pointer" }}
                            >
                              <a href={`${val.url}`}>
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
                </div>
              </div>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

CardsCareer.propTypes = {
  description_departement: PropTypes.any,
  title_departement: PropTypes.any,
  id: PropTypes.any,
  last: PropTypes.any,
};

export default CardsCareer;
