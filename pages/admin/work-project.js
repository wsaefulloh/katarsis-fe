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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
// layout for this page
import HomeLayoutAdmin from "layouts/Admin.js";
// core components
import CardsProject from "../../components/Admin/CardsProject";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

import "../../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function WorkProjectPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [modalOpen1, setModalOpen1] = useState(false);
  const [dataValue1, setDataValue1] = useState({
    id: "",
    type_project: "Original IP",
    genre_project: "Experiences",
    title_project: "",
    child_title: "",
    year_project: "",
    place_project: "",
    short_desc: "",
    about: "",
    impression_result: "",
    media_result: "",
    desc_result: "",
    url_website: "",
    url_video: "",
    url_image_cover: "",
  });
  const [result1, setResult1] = useState([]);

  const getAll1 = async () => {
    const data = await fetchWrapper.get(
      `../api/admin/work/originalIP-experiences`
    );
    if (data) {
      setResult1(data.data);
    }
  };

  const addData1 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/work`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue1),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", "Data berhasil ditambahkan", "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  const [modalOpen2, setModalOpen2] = useState(false);
  const [dataValue2, setDataValue2] = useState({
    id: "",
    type_project: "Original IP",
    genre_project: "Content",
    title_project: "",
    child_title: "",
    year_project: "",
    place_project: "",
    short_desc: "",
    about: "",
    impression_result: "",
    media_result: "",
    desc_result: "",
    url_website: "",
    url_video: "",
    url_image_cover: "",
  });
  const [result2, setResult2] = useState([]);

  const getAll2 = async () => {
    const data = await fetchWrapper.get(`../api/admin/work/originalIP-content`);
    if (data) {
      setResult2(data.data);
    }
  };

  const addData2 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/work`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue2),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", "Data berhasil ditambahkan", "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  const [modalOpen3, setModalOpen3] = useState(false);
  const [dataValue3, setDataValue3] = useState({
    id: "",
    type_project: "B2B",
    genre_project: "Marketing & Sponsorship",
    title_project: "",
    child_title: "",
    year_project: "",
    place_project: "",
    short_desc: "",
    about: "",
    impression_result: "",
    media_result: "",
    desc_result: "",
    url_website: "",
    url_video: "",
    url_image_cover: "",
  });
  const [result3, setResult3] = useState([]);

  const getAll3 = async () => {
    const data = await fetchWrapper.get(
      `../api/admin/work/b2b-marketing-sponsor`
    );
    if (data) {
      setResult3(data.data);
    }
  };

  const addData3 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/work`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue3),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", "Data berhasil ditambahkan", "success");
          router.reload(window.location.pathname);
        }
      }
      setLoading(false);
    } catch (error) {
      Swal.fire("FAILED", "Data gagal di proses", "error");
      setLoading(false);
    }
  };

  const [modalOpen4, setModalOpen4] = useState(false);
  const [dataValue4, setDataValue4] = useState({
    id: "",
    type_project: "B2B",
    genre_project: "Ceremonies & Events",
    title_project: "",
    child_title: "",
    year_project: "",
    place_project: "",
    short_desc: "",
    about: "",
    impression_result: "",
    media_result: "",
    desc_result: "",
    url_website: "",
    url_video: "",
    url_image_cover: "",
  });
  const [result4, setResult4] = useState([]);

  const getAll4 = async () => {
    const data = await fetchWrapper.get(
      `../api/admin/work/b2b-ceremonies-event`
    );
    if (data) {
      setResult4(data.data);
    }
  };

  const addData4 = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/work`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue4),
      });
      const data = await response.json();
      if (data) {
        if (data.statusCode != 201) {
          Swal.fire("FAILED", "Lengkapi semua data!", "error");
          setLoading(false);
        } else {
          await Swal.fire("OK", "Data berhasil ditambahkan", "success");
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
    getAll1();
    getAll2();
    getAll3();
    getAll4();
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
                    <h3 className="mb-0">{`Original IP  ->  Experiences`}</h3>
                  </Col>
                  <Button
                    className="m-1 border-0 py-1 px-3"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FE7900",
                      borderRadius: "5px",
                    }}
                    type="button"
                    onClick={() => {
                      setModalOpen1(!modalOpen1);
                    }}
                  >
                    <span>Tambah</span>
                  </Button>
                </Row>
              </div>
            </Container>
          </Card>

          <Container>
            {result1.map((val) => {
              return (
                <CardsProject
                  id={val.id}
                  type_project={val.type_project}
                  genre_project={val.genre_project}
                  title_project={val.title_project}
                  child_title={val.child_title}
                  year_project={val.year_project}
                  place_project={val.place_project}
                  short_desc={val.short_desc}
                  about={val.about}
                  impression_result={val.impression_result}
                  media_result={val.media_result}
                  desc_result={val.desc_result}
                  url_website={val.url_website}
                  url_video={val.url_video}
                  url_image_original={val.url_image_original}
                />
              );
            })}
          </Container>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">{`Original IP  ->  Content`}</h3>
                  </Col>
                  <Button
                    className="m-1 border-0 py-1 px-3"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FE7900",
                      borderRadius: "5px",
                    }}
                    type="button"
                    onClick={() => {
                      setModalOpen2(!modalOpen2);
                    }}
                  >
                    <span>Tambah</span>
                  </Button>
                </Row>
              </div>
            </Container>
          </Card>

          <Container>
            {result2.map((val) => {
              return (
                <CardsProject
                  id={val.id}
                  type_project={val.type_project}
                  genre_project={val.genre_project}
                  title_project={val.title_project}
                  child_title={val.child_title}
                  year_project={val.year_project}
                  place_project={val.place_project}
                  short_desc={val.short_desc}
                  about={val.about}
                  impression_result={val.impression_result}
                  media_result={val.media_result}
                  desc_result={val.desc_result}
                  url_website={val.url_website}
                  url_video={val.url_video}
                  url_image_original={val.url_image_original}
                />
              );
            })}
          </Container>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">{`Business to Business (B2B)  ->  Marketing & Sponsorship`}</h3>
                  </Col>
                  <Button
                    className="m-1 border-0 py-1 px-3"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FE7900",
                      borderRadius: "5px",
                    }}
                    type="button"
                    onClick={() => {
                      setModalOpen3(!modalOpen3);
                    }}
                  >
                    <span>Tambah</span>
                  </Button>
                </Row>
              </div>
            </Container>
          </Card>

          <Container>
            {result3.map((val) => {
              return (
                <CardsProject
                  id={val.id}
                  type_project={val.type_project}
                  genre_project={val.genre_project}
                  title_project={val.title_project}
                  child_title={val.child_title}
                  year_project={val.year_project}
                  place_project={val.place_project}
                  short_desc={val.short_desc}
                  about={val.about}
                  impression_result={val.impression_result}
                  media_result={val.media_result}
                  desc_result={val.desc_result}
                  url_website={val.url_website}
                  url_video={val.url_video}
                  url_image_original={val.url_image_original}
                />
              );
            })}
          </Container>

          <Card>
            <Container>
              <div className="py-3">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">{`Business to Business (B2B)  ->  Ceremonies Event`}</h3>
                  </Col>
                  <Button
                    className="m-1 border-0 py-1 px-3"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#FE7900",
                      borderRadius: "5px",
                    }}
                    type="button"
                    onClick={() => {
                      setModalOpen4(!modalOpen4);
                    }}
                  >
                    <span>Tambah</span>
                  </Button>
                </Row>
              </div>
            </Container>
          </Card>

          <Container>
            {result4.map((val) => {
              return (
                <CardsProject
                  id={val.id}
                  type_project={val.type_project}
                  genre_project={val.genre_project}
                  title_project={val.title_project}
                  child_title={val.child_title}
                  year_project={val.year_project}
                  place_project={val.place_project}
                  short_desc={val.short_desc}
                  about={val.about}
                  impression_result={val.impression_result}
                  media_result={val.media_result}
                  desc_result={val.desc_result}
                  url_website={val.url_website}
                  url_video={val.url_video}
                  url_image_original={val.url_image_original}
                />
              );
            })}
          </Container>
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
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGHUlEQVRoge3ZW2wU1x3H8e8560txHIJtEOzapKr6EKRI5MFJScEYYloppCRpkKxEcVv1AVmlgJS+hHIxWaiBtlLVVOXSvPSJSIlSVYmoK9EIB0po2sCqrdpKBamJWl+AxEYIr9fd3Znz68OuHdu73pnFxjzU58Xe0Xj8+c058z9zzsJCW2j/383MxUXU3h4ZGav4EtITBjVLWgWKImqRACUlBo3jikMJI3oXt6z+0MTjbrb/e1YBUs++sNI5dgi+gdSIQDkwCPL4/I/8MZQ7R/QjnfJd5HjDuV/3z2uAkfb2ZaQj3ch8G1Q1jisDnz9PSGSM+KVFXYvPnR666wGSz3a8iHM/F9SPI2aBnzgXMSynnfUXet64KwHU2VmZvJE8YaRtmoSYI/xn13C8Vjd2Y5dJJLJzFkBPd9aMmuSvQJvvKj5/XNJv0/+tbI8lTqeCbDYQ39lZOc94kJ6qrsq8o4fbq2YdIHkjeWKe8eOfvzJ8/62fBflKDqHkMy92gE7dA/zEZyO90HDp7JtlB7j93LcarJ/9p8TSe4VHQuhm1rmHYolzRUvsjEPI+JkjYfBZJ0a8LGnfhcan5ZP0PDzngvAg6iswB2dyFg2Q2trRlJ+kSuLTzpFcvpQHuveT/XIzo142ED/mPLx1j1P340OMRJeTdn4pfH4YuW03m1seDB3AZf2dBMywWSdSy5cR++lRah9/jGh8D2pdS8rPzohPuSza0EJj935q163hwZM/YSwandYTU/H5a1V5nt0eKoDicStDR9CYH/M96r+7jYqGegBMJEK062XUupZR3yuKZ8N6Ygf3YCIRACqWNrDspe2M+X4JfD4YfFPt7ZHAACOXr6zBqSnoga3CcrvnDPL9ib81kQjRA7uhdW0OXAIPIN/n1js9VBpK43O/N16/er05MADSE2GqTbU1mIt/4lr8hwUhYvE90LaBpJfN4VtbCvHOMfDKUTh/kWpMAD53POLUFhjA4B4NWyprbAXm/T9yLX50SgisJdr1MvarG3P4Q3sL8QeOoDO91BgbCo+EnCvogYJ54PbX2v+OeLicOp/yfdy6NQVQXG5YGPvZfbpTfH6I/W3FPz5YXbIHENFyJ6lFxmLf/4DBA0em9YSZO7wETtHp3GIBasvBj5+7yEQwv/8DgwcOgytcKUqaHT5Xie4PEaB8/JSHHpM7bVozyo1XuaBqMyMeqfDGFJnIlLwT/JjzUOu63HNgi1zWGmKH9mI3tzHq+XeAF4iRwAAS12aFn1xtpCnDyVhL46F9RJ5sY9TzysQLpGshAujqnOCdY6DrMH2741PnCWtp7N6P3byJVH4GDokH6UpgAMTlsPiUy86Mzz+wvHeBvu8Xhmg63IXdvInkpOEUgMdJlwMDGNEb9pVYLWsL8b7PwN4fTFSbRdZC7wX69xwsHqJtPRnnAvESWGd7AwMsbln9IaIvqNpkfceSLU8W4vd1o7Pnp5TKGmPRu+cLeyISoW7rFjK+H4hH+s+Kjy4lgnsgHndIr5cslYLPGcsnr57EGxouiR9HLDIG/e4cfbtfmQiR/XSIT370KtXGBOFB7nUDBXW06JJyeOPWJmu8fyFVFcOPd3fGOVLRFSz73nZuvd0D5y8GTlIp52BjC3Vbt+Tw/x5gfOthZrzSfsb/4sr+vw6ECgBwa+MzJ4X7zkz48VLrOceY71NpCP1WmXGOjO9TbQwVwXgkHWv8+M+7ijlnXhNXp/chhoIW4BGg1trQeCSqgPusDYsfNpW2vDUxwANnztyU065S+NLLwOKgMNVm8nlC22NXEzNu+pbc2Kq/0PMGjtfuFR50vOnjv7xVyhi4M1cXvW8Hzr0933iDemKfX/JSkC/U5u5g89M11ZXpt4Cn5uXOO/3GZCPPxwYTs9/cBYglTqfqs8NfF/rFfAyb2BeWPBcGD3fwBcfwY5ued+gYYukc4z8V2hE05qe3UD0wuTVcOvtmtTGrJJ1ASs8BPi3pmMtmVpWLh1l+yTf0SFujw9sJ6pBYWSa+D7lTfsYdLzbDzkuA8Saw1x9Z/2jEqU3ONQs9hFMjUJvHJ5HrR1x10mXrbO+Kjy4lir3bLLSFttDKa/8Dw9wiF+K87vgAAAAASUVORK5CYII="
          ></img>
          <h3 className="m-0 mb-3 p-0">Tambah Project</h3>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.title_project}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      title_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Child Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.child_title}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      child_title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Tahun</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.year_project}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      year_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Lokasi</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.place_project}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      place_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Short Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.short_desc}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      short_desc: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">About</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.about}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      about: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.impression_result}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      impression_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Media Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.media_result}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      media_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.desc_result}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      desc_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Website</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.url_website}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      url_website: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Video</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.url_video}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      url_video: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue1.url_image_cover}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      url_image_cover: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue1.type_project}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      type_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue1.genre_project}`}
                  onChange={(e) => {
                    setDataValue1({
                      ...dataValue1,
                      genre_project: `${e.target.value}`,
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
              addData1();
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
              <>Tambah</>
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
            src="data:image/png;base64,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"
          ></img>
          <h3 className="m-0 mb-3 p-0">Tambah Project</h3>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.title_project}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      title_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Child Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.child_title}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      child_title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Tahun</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.year_project}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      year_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Lokasi</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.place_project}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      place_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Short Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.short_desc}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      short_desc: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">About</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.about}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      about: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.impression_result}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      impression_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Media Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.media_result}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      media_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.desc_result}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      desc_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Website</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.url_website}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      url_website: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Video</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.url_video}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      url_video: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue2.url_image_cover}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      url_image_cover: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue2.type_project}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      type_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue2.genre_project}`}
                  onChange={(e) => {
                    setDataValue2({
                      ...dataValue2,
                      genre_project: `${e.target.value}`,
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
              addData2();
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
              <>Tambah</>
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
          <h3 className="m-0 mb-3 p-0">Tambah Project</h3>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.title_project}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      title_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Child Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.child_title}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      child_title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Tahun</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.year_project}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      year_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Lokasi</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.place_project}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      place_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Short Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.short_desc}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      short_desc: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">About</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.about}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      about: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.impression_result}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      impression_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Media Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.media_result}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      media_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.desc_result}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      desc_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Website</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.url_website}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      url_website: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Video</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.url_video}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      url_video: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue3.url_image_cover}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      url_image_cover: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue3.type_project}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      type_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue3.genre_project}`}
                  onChange={(e) => {
                    setDataValue3({
                      ...dataValue3,
                      genre_project: `${e.target.value}`,
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
              addData3();
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
              <>Tambah</>
            )}
          </Button>
        </div>
      </Modal>
      <Modal
        toggle={() => setModalOpen4(!modalOpen4)}
        isOpen={modalOpen4}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpen4(false);
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
          <h3 className="m-0 mb-3 p-0">Tambah Project</h3>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.title_project}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      title_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Child Title</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.child_title}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      child_title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Tahun</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.year_project}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      year_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Lokasi</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.place_project}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      place_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Short Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.short_desc}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      short_desc: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">About</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.about}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      about: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.impression_result}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      impression_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Media Impression</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.media_result}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      media_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Result Desc</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.desc_result}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      desc_result: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Website</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.url_website}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      url_website: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">URL Video</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.url_video}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      url_video: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue4.url_image_cover}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      url_image_cover: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue4.type_project}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      type_project: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Sub-Type Project</h5>
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${dataValue4.genre_project}`}
                  onChange={(e) => {
                    setDataValue4({
                      ...dataValue4,
                      genre_project: `${e.target.value}`,
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
              addData4();
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
              <>Tambah</>
            )}
          </Button>
        </div>
      </Modal>
      ;
    </>
  );
}

WorkProjectPage.layout = HomeLayoutAdmin;

export default WorkProjectPage;
