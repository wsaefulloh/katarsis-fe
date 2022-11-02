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
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const [loading, setLoading] = useState(false);
  const [data1, setData1] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
    url_images: "",
    description: "",
  });
  const [result1, setResult1] = useState([]);

  const [data2, setData2] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
    url_images: "",
    description: "",
  });
  const [result2, setResult2] = useState([]);

  const [data3, setData3] = useState({
    id: "",
    type: "",
    title: "",
    url: "",
    url_images: "",
    description: "",
  });
  const [result3, setResult3] = useState([]);

  const router = useRouter();

  const getAllProcess = async () => {
    const data = await fetchWrapper.get(`../api/content/get-all-process`);
    if (data) {
      let realResult = data.data;
      setResult1(realResult[0]);
      setResult2(realResult[1]);
      setResult3(realResult[2]);
    }
  };

  const updateSocialLink = async (dataUpdate) => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/content`, {
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
    getAllProcess();
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
                    <h3 className="mb-0">Slider 1</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">Title Slider 1</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${result1.title}`}
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
                    setModalOpen1(!modalOpen1);
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
                    <h3 className="mb-0">Slider 2</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">Title Slider 2</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${result2.title}`}
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
                    setModalOpen2(!modalOpen2);
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
                    <h3 className="mb-0">Slider 3</h3>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <Form>
                      <div className="form-row">
                        <Col className="mb-3 p-0 text-left ">
                          <div className="mb-1">Title Slider 3</div>

                          <Input
                            disabled
                            type="text"
                            defaultValue={`${result3.title}`}
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
                    setModalOpen3(!modalOpen3);
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
        toggle={() => setModalOpen1(!modalOpen1)}
        isOpen={modalOpen1}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpen1(false);
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
          <h3 className="m-0 mb-3 p-0">Update Slider 1</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Title Slider 1</h5>
                <Input
                  type="text"
                  defaultValue={`${result1.title}`}
                  onChange={(e) => {
                    setData1({
                      ...data1,
                      title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Description Slider 1</h5>
                <Input
                  type="text"
                  defaultValue={`${result1.description}`}
                  onChange={(e) => {
                    setData1({
                      ...data1,
                      description: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Image Slider 1</h5>
                <Input
                  type="text"
                  defaultValue={`${result1.url_images}`}
                  onChange={(e) => {
                    setData1({
                      ...data1,
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
                id: result1.id,
                type: result1.type,
                title: data1.title.length == 0 ? result1.title : data1.title,
                description:
                  data1.description.length == 0
                    ? result1.description
                    : data1.description,
                url_images:
                  data1.url_images.length == 0
                    ? result1.url_images
                    : data1.url_images,
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
        toggle={() => setModalOpen2(!modalOpen2)}
        isOpen={modalOpen2}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpen2(false);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              width: "35px",
              cursor: "pointer",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGHUlEQVRoge3ZW2wU1x3H8e8560txHIJtEOzapKr6EKRI5MFJScEYYloppCRpkKxEcVv1AVmlgJS+hHIxWaiBtlLVVOXSvPSJSIlSVYmoK9EIB0po2sCqrdpKBamJWl+AxEYIr9fd3Znz68OuHdu73pnFxjzU58Xe0Xj8+c058z9zzsJCW2j/383MxUXU3h4ZGav4EtITBjVLWgWKImqRACUlBo3jikMJI3oXt6z+0MTjbrb/e1YBUs++sNI5dgi+gdSIQDkwCPL4/I/8MZQ7R/QjnfJd5HjDuV/3z2uAkfb2ZaQj3ch8G1Q1jisDnz9PSGSM+KVFXYvPnR666wGSz3a8iHM/F9SPI2aBnzgXMSynnfUXet64KwHU2VmZvJE8YaRtmoSYI/xn13C8Vjd2Y5dJJLJzFkBPd9aMmuSvQJvvKj5/XNJv0/+tbI8lTqeCbDYQ39lZOc94kJ6qrsq8o4fbq2YdIHkjeWKe8eOfvzJ8/62fBflKDqHkMy92gE7dA/zEZyO90HDp7JtlB7j93LcarJ/9p8TSe4VHQuhm1rmHYolzRUvsjEPI+JkjYfBZJ0a8LGnfhcan5ZP0PDzngvAg6iswB2dyFg2Q2trRlJ+kSuLTzpFcvpQHuveT/XIzo142ED/mPLx1j1P340OMRJeTdn4pfH4YuW03m1seDB3AZf2dBMywWSdSy5cR++lRah9/jGh8D2pdS8rPzohPuSza0EJj935q163hwZM/YSwandYTU/H5a1V5nt0eKoDicStDR9CYH/M96r+7jYqGegBMJEK062XUupZR3yuKZ8N6Ygf3YCIRACqWNrDspe2M+X4JfD4YfFPt7ZHAACOXr6zBqSnoga3CcrvnDPL9ib81kQjRA7uhdW0OXAIPIN/n1js9VBpK43O/N16/er05MADSE2GqTbU1mIt/4lr8hwUhYvE90LaBpJfN4VtbCvHOMfDKUTh/kWpMAD53POLUFhjA4B4NWyprbAXm/T9yLX50SgisJdr1MvarG3P4Q3sL8QeOoDO91BgbCo+EnCvogYJ54PbX2v+OeLicOp/yfdy6NQVQXG5YGPvZfbpTfH6I/W3FPz5YXbIHENFyJ6lFxmLf/4DBA0em9YSZO7wETtHp3GIBasvBj5+7yEQwv/8DgwcOgytcKUqaHT5Xie4PEaB8/JSHHpM7bVozyo1XuaBqMyMeqfDGFJnIlLwT/JjzUOu63HNgi1zWGmKH9mI3tzHq+XeAF4iRwAAS12aFn1xtpCnDyVhL46F9RJ5sY9TzysQLpGshAujqnOCdY6DrMH2741PnCWtp7N6P3byJVH4GDokH6UpgAMTlsPiUy86Mzz+wvHeBvu8Xhmg63IXdvInkpOEUgMdJlwMDGNEb9pVYLWsL8b7PwN4fTFSbRdZC7wX69xwsHqJtPRnnAvESWGd7AwMsbln9IaIvqNpkfceSLU8W4vd1o7Pnp5TKGmPRu+cLeyISoW7rFjK+H4hH+s+Kjy4lgnsgHndIr5cslYLPGcsnr57EGxouiR9HLDIG/e4cfbtfmQiR/XSIT370KtXGBOFB7nUDBXW06JJyeOPWJmu8fyFVFcOPd3fGOVLRFSz73nZuvd0D5y8GTlIp52BjC3Vbt+Tw/x5gfOthZrzSfsb/4sr+vw6ECgBwa+MzJ4X7zkz48VLrOceY71NpCP1WmXGOjO9TbQwVwXgkHWv8+M+7ijlnXhNXp/chhoIW4BGg1trQeCSqgPusDYsfNpW2vDUxwANnztyU065S+NLLwOKgMNVm8nlC22NXEzNu+pbc2Kq/0PMGjtfuFR50vOnjv7xVyhi4M1cXvW8Hzr0933iDemKfX/JSkC/U5u5g89M11ZXpt4Cn5uXOO/3GZCPPxwYTs9/cBYglTqfqs8NfF/rFfAyb2BeWPBcGD3fwBcfwY5ued+gYYukc4z8V2hE05qe3UD0wuTVcOvtmtTGrJJ1ASs8BPi3pmMtmVpWLh1l+yTf0SFujw9sJ6pBYWSa+D7lTfsYdLzbDzkuA8Saw1x9Z/2jEqU3ONQs9hFMjUJvHJ5HrR1x10mXrbO+Kjy4lir3bLLSFttDKa/8Dw9wiF+K87vgAAAAASUVORK5CYII="
          ></img>
          <h3 className="m-0 mb-3 p-0">Update Slider 2</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Title Slider 2</h5>
                <Input
                  type="text"
                  defaultValue={`${result2.title}`}
                  onChange={(e) => {
                    setData2({
                      ...data2,
                      title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Description Slider 2</h5>
                <Input
                  type="text"
                  defaultValue={`${result2.description}`}
                  onChange={(e) => {
                    setData2({
                      ...data2,
                      description: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Image Slider 2</h5>
                <Input
                  type="text"
                  defaultValue={`${result2.url_images}`}
                  onChange={(e) => {
                    setData2({
                      ...data2,
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
                id: result2.id,
                type: result2.type,
                title: data2.title.length == 0 ? result2.title : data2.title,
                description:
                  data2.description.length == 0
                    ? result2.description
                    : data2.description,
                url_images:
                  data2.url_images.length == 0
                    ? result2.url_images
                    : data2.url_images,
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
        toggle={() => setModalOpen3(!modalOpen3)}
        isOpen={modalOpen3}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpen3(false);
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
          <h3 className="m-0 mb-3 p-0">Update Slider 3</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Title Slider 3</h5>
                <Input
                  type="text"
                  defaultValue={`${result3.title}`}
                  onChange={(e) => {
                    setData3({
                      ...data3,
                      title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>Description Slider 3</h5>
                <Input
                  type="text"
                  defaultValue={`${result3.description}`}
                  onChange={(e) => {
                    setData3({
                      ...data3,
                      description: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5>URL Image Slider 3</h5>
                <Input
                  type="text"
                  defaultValue={`${result3.url_images}`}
                  onChange={(e) => {
                    setData3({
                      ...data3,
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
                id: result3.id,
                type: result3.type,
                title: data3.title.length == 0 ? result3.title : data3.title,
                description:
                  data3.description.length == 0
                    ? result3.description
                    : data3.description,
                url_images:
                  data3.url_images.length == 0
                    ? result3.url_images
                    : data3.url_images,
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
    </>
  );
}

SocialLinks.layout = HomeLayoutAdmin;

export default SocialLinks;