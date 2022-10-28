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
import CardFilms from "components/Cards/Admin/CardsFilm.js";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

import "../../assets/css/main/main.module.css";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

function FilmPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataValue, setDataValue] = useState({
    title: "",
    duration: "",
    id_theme: "",
    id_genre: "",
    id_location: "",
    description: "",
    date_playing: "",
    poster_image: "",
    cover_image: "",
  });
  const [result, setResult] = useState([]);
  const [location, setLocation] = useState([]);
  const [genre, setGenre] = useState([]);
  const [theme, setTheme] = useState([]);
  const [value, setValue] = useState({
    theme: "",
    genre: "",
    location: "",
  });

  const router = useRouter();

  const getAll = async () => {
    const data = await fetchWrapper.get(`../api/admin/film`);
    if (data) {
      setResult(data.data);
    }
  };

  const getAllRequirement = async () => {
    const dataLocation = await fetchWrapper.get(`../api/admin/location`);
    const dataGenre = await fetchWrapper.get(`../api/admin/genre`);
    const dataTheme = await fetchWrapper.get(`../api/admin/theme`);
    if (dataLocation && dataGenre && dataTheme) {
      let dataObjLocation = dataLocation.data;
      let dataObjGenre = dataGenre.data;
      let dataObjTheme = dataTheme.data;
      let firstLocation = dataObjLocation[0];
      let firstGenre = dataObjGenre[0];
      let firstTheme = dataObjTheme[0];
      setLocation(dataLocation.data);
      setGenre(dataGenre.data);
      setTheme(dataTheme.data);
      setValue({
        ...value,
        location: `${firstLocation.name_location}`,
        genre: `${firstGenre.name_genre}`,
        theme: `${firstTheme.name_theme}`,
      });
      setDataValue({
        ...dataValue,
        id_location: `${firstLocation.id}`,
        id_genre: `${firstGenre.id}`,
        id_theme: `${firstTheme.id}`,
      });
    }
  };

  const addData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`../api/admin/film`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataValue),
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
    getAll();
    getAllRequirement();
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
                    <h3 className="mb-0">List Film</h3>
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
                      setModalOpen(!modalOpen);
                    }}
                  >
                    <span>Tambah</span>
                  </Button>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col>
                    <span className="mb-0">
                      Rekomendasi File Video Resolusi kurang dari 480p dengan
                      durasi kurang dari 8 menit{" "}
                    </span>
                  </Col>
                </Row>
              </div>
            </Container>
          </Card>

          <Container>
            {result.map((val) => {
              return (
                <CardFilms
                  id_film={val.id_film}
                  title={val.title}
                  duration={val.duration}
                  id_theme={val.id_theme}
                  id_genre={val.id_genre}
                  id_location={val.id_location}
                  description={val.description}
                  date_playing={val.date_playing}
                  poster_image={val.poster_imageOrigin}
                  cover_image={val.cover_imageOrigin}
                  theme={val.theme}
                  genre={val.genre}
                  location={val.location}
                />
              );
            })}
          </Container>
        </Card>
      </Col>

      <Modal
        toggle={() => setModalOpen(!modalOpen)}
        isOpen={modalOpen}
        centered
        fade={true}
        size="md"
      >
        <div className="justify-content-center text-center p-4">
          <img
            onClick={() => {
              setModalOpen(false);
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
          <h3 className="m-0 mb-3 p-0">Tambah Film</h3>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Judul Film</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue.title}`}
                  onChange={(e) => {
                    setDataValue({
                      ...dataValue,
                      title: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>

          <Row>
            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Location:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {value.location}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {location.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValue({
                              ...value,
                              location: val.name_location,
                            });
                            setDataValue({
                              ...dataValue,
                              id_location: val.id,
                            });
                          }}
                        >
                          <span>{val.name_location}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>

            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Genre:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {value.genre}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {genre.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValue({
                              ...value,
                              genre: val.name_genre,
                            });
                            setDataValue({
                              ...dataValue,
                              id_genre: val.id,
                            });
                          }}
                        >
                          <span>{val.name_genre}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>

            <div className="m-0 mb-3 mr-3">
              <Card className="m-0 d-flex flex-row align-items-center">
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    className="nav-link pl-0 d-flex flex-row align-items-center"
                    style={{ cursor: "pointer" }}
                    color=""
                    tag="a"
                  >
                    <Container className="d-flex py-2 flex-row">
                      <h5 className="m-0">Format:</h5>
                      <h5 className="m-0 ml-1" style={{ color: "#FE7900" }}>
                        {value.theme}
                      </h5>
                    </Container>
                    <img
                      alt="..."
                      src={require("assets/img/icons/common/Vector.svg")}
                    />
                  </DropdownToggle>
                  <DropdownMenu center>
                    {theme.map((val) => {
                      return (
                        <DropdownItem
                          onClick={() => {
                            setValue({
                              ...value,
                              theme: val.name_theme,
                            });
                            setDataValue({
                              ...dataValue,
                              id_theme: val.id,
                            });
                          }}
                        >
                          <span>{val.name_theme}</span>
                        </DropdownItem>
                      );
                    })}
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Card>
            </div>
          </Row>

          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Durasi Film (ex: 01:23:00)</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue.duration}`}
                  onChange={(e) => {
                    setDataValue({
                      ...dataValue,
                      duration: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">Deskripsi atau Sinopsis Film</h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue.description}`}
                  onChange={(e) => {
                    setDataValue({
                      ...dataValue,
                      description: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">
                  Tanggal Tayang (ex: Kamis-4 September 2022-17:30)
                </h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue.date_playing}`}
                  onChange={(e) => {
                    setDataValue({
                      ...dataValue,
                      date_playing: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">
                  URL Image Google Drive Poster (350 x 400)
                </h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue.poster_image}`}
                  onChange={(e) => {
                    setDataValue({
                      ...dataValue,
                      poster_image: `${e.target.value}`,
                    });
                  }}
                />
              </Col>
            </div>
          </Form>
          <Form>
            <div className="form-row">
              <Col className="mb-3 p-0 text-left ">
                <h5 className="pl-1 mb-1">
                  URL Image Google Drive Cover (1280 x 546)
                </h5>
                <Input
                  type="text"
                  defaultValue={`${dataValue.cover_image}`}
                  onChange={(e) => {
                    setDataValue({
                      ...dataValue,
                      cover_image: `${e.target.value}`,
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
              addData();
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
    </>
  );
}

FilmPage.layout = HomeLayoutAdmin;

export default FilmPage;
