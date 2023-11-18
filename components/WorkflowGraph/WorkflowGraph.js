import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

import "../../assets/css/main/main.module.css";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

function WorkflowGraph() {
  const [result, setResult] = useState({});
  const [cta, setCta] = useState({});

  const getWorkflow = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-content?type=workflow`);
    if (data) {
      let obj = data.data;
      setResult(obj[0]);
    }
  };

  const getCTA = async () => {
    const data = await fetchWrapper.get(`api/strapi/content/get-link?type=cta_partnership`);
    if (data) {
      let obj = data.data;
      setCta(obj[0]);
    }
  };

  useEffect(() => {
    getWorkflow();
    getCTA();
  }, []);

  return (
    <>
      <Container>
        <div
          className="pb-4 pt-3 text-center justify-content-center"
          style={{ maxWidth: "85%", marginLeft: "auto", marginRight: "auto" }}
        >
          <h1
            style={{
              color: "#000000",
              fontStyle: "bold",
            }}
          >
            {`${result.attributes?.title}`}
          </h1>
        </div>
      </Container>

      <div className="py-4">
        <div className="display-large">
          <Container>
            <Row>
              <Col>
                <div
                  style={{
                    borderLeft: "2px solid #000000",
                    height: "130px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      CONCEPTION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      top: "54.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "90px",
                      bottom: "-50px",
                      left: "-30px",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>BRIEF</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderLeft: "2px solid #000000",
                    height: "130px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      DESIGN
                    </div>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      top: "54.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "90px",
                      bottom: "-50px",
                      left: "-30px",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>VALIDATION</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderLeft: "2px solid #000000",
                    height: "130px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      PRODUCTION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      top: "54.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "90px",
                      bottom: "-50px",
                      left: "-30px",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>VALIDATION</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderLeft: "2px solid #000000",
                    height: "130px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      PROMOTION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      top: "54.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "90px",
                      bottom: "-50px",
                      left: "-30px",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>VALIDATION</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderLeft: "2px solid #000000",
                    borderRight: "2px solid #000000",
                    height: "130px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "40px",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      OPERATION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      top: "54.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "90%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div>
                    {/* <div
                      style={{
                        height: "5px",
                        marginBottom: "3px",
                        width: "90%",
                        backgroundColor: "#ffffff",
                      }}
                    ></div> */}
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          height: "5px",
                          width: "90%",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          marginLeft: "10px",
                          height: "5px",
                          width: "20%",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          height: "5px",
                          width: "90%",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        style={{
                          marginLeft: "10px",
                          height: "5px",
                          width: "20%",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "90px",
                      bottom: "-40px",
                      left: "-30px",
                    }}
                  >
                    <div>LAUNCH</div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="display-small">
          <Container>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Col>
                <div
                  style={{
                    borderTop: "2px solid #000000",
                    height: "130px",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "80%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      CONCEPTION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        className="mx-1"
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "fit-content",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>BRIEF</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderTop: "2px solid #000000",
                    height: "130px",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "80%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      DESIGN
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        className="mx-1"
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "fit-content",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>VALIDATION</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderTop: "2px solid #000000",
                    height: "130px",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "80%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      PRODUCTION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        className="mx-1"
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "fit-content",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>VALIDATION</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderTop: "2px solid #000000",
                    height: "130px",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "80%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      PROMOTION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        className="mx-1"
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "130px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "fit-content",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div>CLIENT</div>
                    <div>VALIDATION</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div
                  style={{
                    borderTop: "2px solid #000000",
                    borderBottom: "2px solid #000000",
                    height: "130px",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "0",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "80%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      className="py-1 arrow_hover "
                      style={{ width: "fit-content", cursor: "pointer" }}
                    >
                      OPERATION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "5px",
                          height: "100px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        className="mx-1"
                        style={{
                          width: "5px",
                          height: "100px",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "100px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div className="d-flex">
                      <div
                        style={{
                          width: "5px",
                          height: "20px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                      <div
                        className="mx-1"
                        style={{
                          width: "5px",
                          height: "20px",
                          backgroundColor: "#000000",
                        }}
                      ></div>
                      <div
                        style={{
                          width: "5px",
                          height: "20px",
                          backgroundColor: "#ffffff",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "90px",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#000000",
                          height: "40px",
                          width: "40px",
                          border: "10px solid #ffffff",
                          borderRadius: "20px",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      ></div>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      position: "absolute",
                      width: "fit-content",
                      left: "20%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div>LAUNCH</div>
                  </div>
                </div>
              </Col>
            </div>
          </Container>
        </div>
      </div>

      <div className="py-4 mt-5 text-center justify-content-center">
        <Container>
          <div
            className="desc_section mb-4"
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {`${result.attributes?.description}`}
          </div>
          <div style={{ width: "200px" }} className="mx-auto">
            <a href={`${cta.attributes?.url}`} style={{ justifyContent: "center" }}>
              <div
                style={{
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  width: "200px",
                  textAlign: "center",
                  padding: "10px",
                  // border: "3px solid #000000",
                  borderRadius: "25px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  cursor: "pointer",
                }}
              >
                {`${cta.attributes?.title}`}
              </div>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
}

export default WorkflowGraph;
