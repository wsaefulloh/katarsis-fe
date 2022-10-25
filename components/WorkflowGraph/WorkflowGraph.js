import React from "react";
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

function WorkflowGraph() {
  return (
    <>
      <div
        className="py-4 text-center justify-content-center"
        style={{ maxWidth: "800px", marginLeft: "auto", marginRight: "auto" }}
      >
        <h1
          style={{
            color: "#000000",
            fontStyle: "bold",
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </h1>
      </div>
      <div className="py-4">
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
                  <div>CONCEPTION</div>
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
                  <div>DESIGN</div>
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
                  <div>PRODUCTION</div>
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
                  <div>INTEGRATION</div>
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
                  <div>OPERATION</div>
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

      <div className="py-4 mt-5 text-center justify-content-center">
        <Container>
          <div
            style={{
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo.
          </div>
        </Container>
      </div>
    </>
  );
}

export default WorkflowGraph;
