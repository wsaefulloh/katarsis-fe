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
} from "reactstrap";

import "../../assets/css/main/main.module.css";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

function WorkflowGraph() {
  const [result, setResult] = useState({});

  const getWorkflow = async () => {
    const data = await fetchWrapper.get(`api/content/get-workflow`);
    if (data) {
      let obj = data.data;
      setResult(obj[0]);
    }
  };

  useEffect(() => {
    getWorkflow();
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
            {`${result.title}`}
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
                      top: "62.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "55px",
                      left: "-30px",
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                      top: "62.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "55px",
                      left: "-30px",
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                      top: "62.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "55px",
                      left: "-30px",
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                      INTEGRATION
                    </div>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      top: "62.5px",
                    }}
                  >
                    <div
                      style={{
                        height: "5px",
                        width: "120%",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "55px",
                      left: "-30px",
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                      top: "62.5px",
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
                      position: "absolute",
                      top: "55px",
                      left: "-30px",
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                    <div
                      style={{
                        width: "5px",
                        height: "130px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                    <div
                      style={{
                        width: "5px",
                        height: "130px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                    <div
                      style={{
                        width: "5px",
                        height: "130px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                      INTEGRATION
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
                    <div
                      style={{
                        width: "5px",
                        height: "130px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
                    <div
                      style={{
                        width: "5px",
                        height: "100px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translate(-50%)",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "20px",
                        backgroundColor: "#000000",
                      }}
                    ></div>
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
                          height: "20px",
                          width: "20px",
                          border: "5px solid #ffff00",
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
            className="desc_section"
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            {`${result.description}`}
          </div>
        </Container>
      </div>
    </>
  );
}

export default WorkflowGraph;
