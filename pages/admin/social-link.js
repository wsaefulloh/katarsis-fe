import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  Card,
  Spinner,
  Form,
  Input,
} from "reactstrap";
// layout for this page
import HomeLayoutAdmin from "layouts/Admin.js";
// core components
import { fetchWrapper } from "../../helpers/fetch-wrapper";

import "../../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function SocialLinks() {
  const [modalOpenTwitter, setModalOpenTwitter] = useState(false);
  const [modalOpenInstagram, setModalOpenInstagram] = useState(false);
  const [modalOpenWhatsapp, setModalOpenWhatsapp] = useState(false);
  const [modalOpenTiktok, setModalOpenTiktok] = useState(false);
  const [modalOpenNumber, setModalOpenNumber] = useState(false);
  const [modalOpenFood, setModalOpenFood] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataTwitter, setDataTwitter] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
  });
  const [resultTwitter, setResultTwitter] = useState([]);

  const [dataFood, setDataFood] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
    url_images: "",
  });
  const [resultFood, setResultFood] = useState([]);

  const [dataInstagram, setDataInstagram] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
  });
  const [resultInstagram, setResultInstagram] = useState([]);

  const [dataTiktok, setDataTiktok] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
  });
  const [resultTiktok, setResultTiktok] = useState([]);

  const [dataWhatsapp, setDataWhatsapp] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
  });
  const [resultWhatsapp, setResultWhatsapp] = useState([]);

  const [dataNumber, setDataNumber] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
  });
  const [resultNumber, setResultNumber] = useState([]);

  const router = useRouter();

  const getSomeRequest = async (request) => {
    const data = await fetchWrapper.get(
      `../api/admin/social?request=${request}`
    );
    if (data) {
      let realResult = data.data;
      if (request == "twitter") {
        setResultTwitter(realResult[0]);
      } else if (request == "instagram") {
        setResultInstagram(realResult[0]);
      } else if (request == "food") {
        setResultFood(realResult[0]);
      } else if (request == "whatsapp") {
        setResultWhatsapp(realResult[0]);
      } else if (request == "tiktok") {
        setResultTiktok(realResult[0]);
      } else if (request == "number") {
        setResultNumber(realResult[0]);
      } else {
      }
    }
  };

  const updateSocialLink = async (dataUpdate) => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/social`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUpdate),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", `Data gagal diupdate`, "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", `Data berhasil diupdate`, "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  useEffect(() => {
    getSomeRequest("twitter");
    getSomeRequest("instagram");
    getSomeRequest("tiktok");
    getSomeRequest("whatsapp");
    getSomeRequest("number");
    getSomeRequest("food");
  }, []);

  return (
    <>
      <Col xl="9" style={{ paddingLeft: "7.5px", paddingRight: "7.5px" }}>
        <Card style={{ height: "100%" }}>
          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Twitter</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">URL Twitter</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultTwitter.url}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    setModalOpenTwitter(!modalOpenTwitter);
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Instagram</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">URL Instagram</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultInstagram.url}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    setModalOpenInstagram(!modalOpenInstagram);
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Tiktok</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">URL Tiktok</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultTiktok.url}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    setModalOpenTiktok(!modalOpenTiktok);
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Phone Number</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">Phone Number</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultNumber.url}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    setModalOpenNumber(!modalOpenNumber);
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Whatsapp</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">URL Whatsapp</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultWhatsapp.url}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>

                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    setModalOpenWhatsapp(!modalOpenWhatsapp);
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Food & Drink</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">Click Title</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultFood.title}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">URL Food & Drink</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultFood.url}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">URL Image Food & Drink</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${resultFood.url_images}`}
                          />
                        </Col>
                      </div>
                    </Form>
                  </Col>
                </Row>
                <Button
                  className="m-1 border-0 py-1 px-3"
                  style={{
                    color: "#ffffff",
                    backgroundColor: "#697aa3",
                    borderRadius: "5px",
                    fontSize: "10px",
                  }}
                  type="button"
                  onClick={() => {
                    setModalOpenFood(!modalOpenFood);
                  }}
                >
                  <span>Update</span>
                </Button>
              </div>
            </Container>
          </Card>
        </Card>
      </Col>

      <Modal
        toggle={() => setModalOpenTwitter(!modalOpenTwitter)}
        isOpen={modalOpenTwitter}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenTwitter(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Link Twitter</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Twitter</h5>
                <Input
                  type="text"
                  defaultValue={`${resultTwitter.url}`}
                  onChange={(e) => {
                    setDataTwitter({
                      ...dataTwitter,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              let data = {
                id: resultTwitter.id,
                type: resultTwitter.type,
                title: resultTwitter.title,
                url:
                  dataTwitter.url.length == 0
                    ? resultTwitter.url
                    : dataTwitter.url,
              };
              updateSocialLink(data);
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenInstagram(!modalOpenInstagram)}
        isOpen={modalOpenInstagram}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenInstagram(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Link Instagram</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Instagram</h5>
                <Input
                  type="text"
                  defaultValue={`${resultInstagram.url}`}
                  onChange={(e) => {
                    setDataInstagram({
                      ...dataInstagram,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              let data = {
                id: resultInstagram.id,
                type: resultInstagram.type,
                title: resultInstagram.title,
                url:
                  dataInstagram.url.length == 0
                    ? resultInstagram.url
                    : dataInstagram.url,
              };
              updateSocialLink(data);
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenTiktok(!modalOpenTiktok)}
        isOpen={modalOpenTiktok}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenTiktok(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Link Tiktok</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Tiktok</h5>
                <Input
                  type="text"
                  defaultValue={`${resultTiktok.url}`}
                  onChange={(e) => {
                    setDataTiktok({
                      ...dataTiktok,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              let data = {
                id: resultTiktok.id,
                type: resultTiktok.type,
                title: resultTiktok.title,
                url:
                  dataTiktok.url.length == 0
                    ? resultTiktok.url
                    : dataTiktok.url,
              };
              updateSocialLink(data);
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenWhatsapp(!modalOpenWhatsapp)}
        isOpen={modalOpenWhatsapp}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenWhatsapp(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Link Whatsapp</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Whatsapp</h5>
                <Input
                  type="text"
                  defaultValue={`${resultWhatsapp.url}`}
                  onChange={(e) => {
                    setDataWhatsapp({
                      ...dataWhatsapp,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              let data = {
                id: resultWhatsapp.id,
                type: resultWhatsapp.type,
                title: resultWhatsapp.title,
                url:
                  dataWhatsapp.url.length == 0
                    ? resultWhatsapp.url
                    : dataWhatsapp.url,
              };
              updateSocialLink(data);
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenNumber(!modalOpenNumber)}
        isOpen={modalOpenNumber}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenNumber(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Phone Number</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Phone Number</h5>
                <Input
                  type="text"
                  defaultValue={`${resultNumber.url}`}
                  onChange={(e) => {
                    setDataNumber({
                      ...dataNumber,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              let data = {
                id: resultNumber.id,
                type: resultNumber.type,
                title: resultNumber.title,
                url:
                  dataNumber.url.length == 0
                    ? resultNumber.url
                    : dataNumber.url,
              };
              updateSocialLink(data);
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>

      <Modal
        toggle={() => setModalOpenFood(!modalOpenFood)}
        isOpen={modalOpenFood}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpenFood(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Food & Drink Content</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Click Title</h5>
                <Input
                  type="text"
                  defaultValue={`${resultFood.title}`}
                  onChange={(e) => {
                    setDataFood({
                      ...dataFood,
                      title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Food & Drink</h5>
                <Input
                  type="text"
                  defaultValue={`${resultFood.url}`}
                  onChange={(e) => {
                    setDataFood({
                      ...dataFood,
                      url: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Images Food & Drink</h5>
                <Input
                  type="text"
                  defaultValue={`${resultFood.url_images}`}
                  onChange={(e) => {
                    setDataFood({
                      ...dataFood,
                      url_images: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Button
            color="secondary"
            style={{
              color: "#ffffff",
              backgroundColor: "#FE7900",
              maxWidth: "150px",
            }}
            className="border-0"
            type="button"
            onClick={() => {
              let data = {
                id: resultFood.id,
                type: resultFood.type,
                title:
                  dataFood.title.length == 0
                    ? resultFood.title
                    : dataFood.title,
                url: dataFood.url.length == 0 ? resultFood.url : dataFood.url,
                url_images:
                  dataFood.url_images.length == 0
                    ? resultFood.url_images
                    : dataFood.url_images,
              };
              console.log(data);
              updateSocialLink(data);
            }}
          >
            {loading == true ? (
              <>
                <div className="py-1 text-center align-content-center align-items-center">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              </>
            ) : (
              <>Update</>
            )}
          </Button>
        </div>
      </Modal>
    </>
  );
}

SocialLinks.layout = HomeLayoutAdmin;

export default SocialLinks;
