import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
// core components
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Spinner,
} from "reactstrap";

import ReactDatetime from "react-datetime";

import Swal from "sweetalert2";
import Link from "next/link";
import { fetchWrapper } from "../../../../helpers/fetch-wrapper";

function ParticipantID() {
  const router = useRouter();
  const url_page = router.asPath;
  const id = url_page.substring(33, url_page.length);

  const [isShortMovie, setIsShortMovie] = useState(false);
  const [nameParticipant, setNameParticipant] = useState({
    firstName: "",
    lastName: "",
  });
  const [dateOfBirthParticipant, setDateOfBirthParticipant] = useState("");
  const [citizenshipParticipant, setCitizenshipParticipant] = useState("");
  const [phoneParticipant, setPhoneParticipant] = useState("");
  const [emailParticipant, setEmailParticipant] = useState("");
  const [addressParticipant, setAddressParticipant] = useState({
    detail: "",
    namaJalan: "",
    keterangan: "",
    kota: "",
    provinsi: "",
    kodepos: "",
    negara: "",
  });

  const [titleFilm, setTitleFilm] = useState("");
  const [productionCountryFilm, setProductionCountryFilm] = useState("");
  const [yearOfProductionFilm, setYearOfProductionFilm] = useState("");
  const [typeOfFilm, setTypeOfFilm] = useState("");
  const [premiereStatusFilm, setPremiereStatusFilm] = useState("");
  const [previousFestivalFilm, setPreviousFestivalFilm] = useState("");
  const [prizesWonFilm, setPrizesWonFilm] = useState("");
  const [synopsisFilm, setSynopsisFilm] = useState("");

  const [productionCompany, setProductionCompany] = useState("");
  const [addressProductionCompany, setAddressProductionCompany] = useState({
    detail: "",
    namaJalan: "",
    keterangan: "",
    kota: "",
    provinsi: "",
    kodepos: "",
    negara: "",
  });
  const [emailProductionCompany, setEmailProductionCompany] = useState("");
  const [haveSalesIndonesia, setHaveSalesIndonesia] = useState();
  const [allowDISDistIndoneisa, setAllowDISDistIndoneisa] = useState();

  const [directorFilm, setDirectorFilm] = useState("");
  const [producersFilm, setProducersFilm] = useState("");
  const [screenWriterFilm, setScreenWriterFilm] = useState("");
  const [cinematographerFilm, setCinematographerFilm] = useState("");
  const [editorFilm, setEditorFilm] = useState("");
  const [mainCastFilm, setMainCastFilm] = useState("");

  const [urlImagesDirector, setUrlImagesDirector] = useState("");
  const [shortBioDirector, setShortBioDirector] = useState("");
  const [runningTimeFilm, setRunningTimeFilm] = useState("");
  const [shootingFormatFilm, setShootingFormatFilm] = useState("");
  const [screenFormatFilm, setScreenFormatFilm] = useState("");
  const [screenRatioFilm, setScreenRatioFilm] = useState("");
  const [frameRateFilm, setFrameRateFilm] = useState("");
  const [soundFilm, setSoundFilm] = useState("");
  const [originalLanguageFilm, setOriginalLanguageFilm] = useState("");
  const [languageSubtitleFilm, setLanguageSubtitleFilm] = useState("");
  const [urlPreviewFilm, setUrlPreviewFilm] = useState("");
  const [passwordUrlPreview, setPasswordUrlPreview] = useState("");
  const [urlStillPhotoFilm, setUrlStillPhotoFilm] = useState("");
  const [urlPosterFilm, setUrlPosterFilm] = useState("");
  const [urlSubtitleFilm, setUrlSubtitleFilm] = useState("");
  const [urlTrailer, setUrlTrailer] = useState("");

  const [aggrementScreeningPrograms, setAggrementScreeningPrograms] =
    useState();
  const [aggrementJAFFCopy, setAggrementJAFFCopy] = useState();
  const [aggrementFilmToParticipate, setAggrementFilmToParticipate] = useState({
    firstStatement: false,
    secondStatement: false,
  });

  const getParticipant = async () => {
    const data = await fetchWrapper.get(
      `../../../api/admin/participant/get-participant?id=${id}`
    );
    if (data) {
      let dataResult = data.data;
      let dataResultObj = dataResult[0];
      setIsShortMovie(dataResultObj.is_short_movie);
      let name = dataResultObj.name_participant;
      let nameSplit = name.split(" ");
      let last = "";
      for (let i = 1; i < nameSplit.length; i++) {
        last = `${last}` + `${nameSplit[i]}`;
      }

      setNameParticipant({
        firstName: nameSplit[0],
        lastName: last,
      });
      setDateOfBirthParticipant(dataResultObj.date_of_bird_participant);
      setCitizenshipParticipant(dataResultObj.citizenship_participant);
      setPhoneParticipant(dataResultObj.phone_participant);
      setEmailParticipant(dataResultObj.email_participant);

      let addressParticipant = dataResultObj.address_participant;
      let addressParticipantSplit = addressParticipant.split(" // ");
      setAddressParticipant({
        detail: addressParticipantSplit[0],
        namaJalan: addressParticipantSplit[1],
        keterangan: addressParticipantSplit[2],
        kota: addressParticipantSplit[3],
        provinsi: addressParticipantSplit[4],
        kodepos: addressParticipantSplit[5],
        negara: addressParticipantSplit[6],
      });

      setTitleFilm(dataResultObj.title_film);
      setProductionCountryFilm(dataResultObj.production_country_film);
      setYearOfProductionFilm(dataResultObj.year_of_production_film);
      setTypeOfFilm(dataResultObj.type_of_film);
      setPremiereStatusFilm(dataResultObj.premiere_status_film);
      setPreviousFestivalFilm(dataResultObj.previous_festival_film);
      setPrizesWonFilm(dataResultObj.prizes_won_film);
      setSynopsisFilm(dataResultObj.synopsis_film);
      setProductionCompany(dataResultObj.production_company);

      let addressProduction = dataResultObj.address_production_company;
      let addressProductionSplit = addressProduction.split(" // ");
      setAddressProductionCompany({
        detail: addressProductionSplit[0],
        namaJalan: addressProductionSplit[1],
        keterangan: addressProductionSplit[2],
        kota: addressProductionSplit[3],
        provinsi: addressProductionSplit[4],
        kodepos: addressProductionSplit[5],
        negara: addressProductionSplit[6],
      });

      setEmailProductionCompany(dataResultObj.email_production_company);
      setHaveSalesIndonesia(dataResultObj.have_sales_indonesia);
      setAllowDISDistIndoneisa(dataResultObj.allow_dis_dist_indonesia);

      setDirectorFilm(dataResultObj.director_film);
      setProducersFilm(dataResultObj.producers_film);
      setScreenWriterFilm(dataResultObj.screenwriter_film);
      setCinematographerFilm(dataResultObj.cinematographer_film);
      setEditorFilm(dataResultObj.editor_film);
      setMainCastFilm(dataResultObj.main_cast_film);

      setUrlImagesDirector(dataResultObj.url_images_director);
      setShortBioDirector(dataResultObj.short_bio_director);
      setRunningTimeFilm(dataResultObj.running_time_film);
      setShootingFormatFilm(dataResultObj.shooting_format_film);
      setScreenFormatFilm(dataResultObj.screen_format_film);
      setScreenRatioFilm(dataResultObj.screen_ratio_film);
      setFrameRateFilm(dataResultObj.frame_rate_film);
      setSoundFilm(dataResultObj.sound_film);
      setOriginalLanguageFilm(dataResultObj.original_language_film);
      setLanguageSubtitleFilm(dataResultObj.language_subtitle_film);
      setUrlPreviewFilm(dataResultObj.url_preview_film);
      setPasswordUrlPreview(dataResultObj.password_url_preview);
      setUrlStillPhotoFilm(dataResultObj.url_still_photo_film);
      setUrlPosterFilm(dataResultObj.url_poster_film);
      setUrlSubtitleFilm(dataResultObj.url_subtitle_film);
      setUrlTrailer(dataResultObj.url_trailer);

      setAggrementScreeningPrograms(dataResultObj.agreement_screening_programs);
      setAggrementJAFFCopy(dataResultObj.agreement_jaff_copy);
      setAggrementFilmToParticipate({
        firstStatement: dataResultObj.agreement_film_to_participate,
        secondStatement: dataResultObj.agreement_film_to_participate,
      });
    }
  };

  useEffect(() => {
    getParticipant();
  }, []);

  return (
    <>
      <div className="main-content" style={{ backgroundColor: "#FFF0F0" }}>
        <Container className="pt-4">
          <Col>
            <Card className="p-4">
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    disabled
                    id="isFilmPendek"
                    type="checkbox"
                    checked={isShortMovie}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="isFilmPendek"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Film Pendek (Max 20 Menit)
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Nama</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      disabled
                      placeholder={nameParticipant.firstName}
                      id="first-name-participant"
                      type="text"
                    />
                  </Col>
                  <Col className="mb-3" md="6">
                    <Input
                      disabled
                      placeholder={nameParticipant.lastName}
                      id="last-name-participant"
                      type="text"
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tanggal Lahir</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      disabled
                      placeholder={dateOfBirthParticipant}
                      id="date-of-birth"
                      type="text"
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Kewarganegaraan</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      disabled
                      placeholder={citizenshipParticipant}
                      type="text"
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">No. Telepon</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <Input
                      disabled
                      placeholder={phoneParticipant}
                      id="form-phone"
                      type="text"
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Email</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      disabled
                      placeholder={emailParticipant}
                      id="form-email"
                      type="email"
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Alamat</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      disabled
                      placeholder={addressParticipant.detail}
                      type="text"
                    />
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Nama Jalan
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressParticipant.namaJalan}
                    />
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Keterangan
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressParticipant.keterangan}
                    />
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kota/Kabupaten
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressParticipant.kota}
                    />
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Provinsi
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressParticipant.provinsi}
                    />
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kode Pos
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressParticipant.kodepos}
                    />
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressParticipant.negara}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">FILM</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Judul</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input disabled type="text" placeholder={titleFilm} />
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Negara Tempat Produksi</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      disabled
                      placeholder={productionCountryFilm}
                      type="text"
                    />
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tahun Produksi</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      disabled
                      placeholder={yearOfProductionFilm}
                      type="text"
                    />
                  </Col>
                </div>
              </Form>
              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Tipe Film</h4>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    disabled
                    id="type_narasi"
                    type="radio"
                    name="type-film"
                    checked={typeOfFilm == "narasi" ? true : false}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_narasi"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Narasi
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    disabled
                    id="type_dokumenter"
                    type="radio"
                    name="type-film"
                    checked={typeOfFilm == "dokumenter" ? true : false}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_dokumenter"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Dokumenter
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    disabled
                    id="type_animasi"
                    type="radio"
                    name="type-film"
                    checked={typeOfFilm == "animasi" ? true : false}
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_animasi"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Animasi
                    </span>
                  </label>
                </Col>
              </div>
              <div className="d-flex align-items-center mt-3 pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Status Premier</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={premiereStatusFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Festival film yang pernah diikuti
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="textarea"
                      disabled
                      placeholder={previousFestivalFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Penghargaan (jika ada) yang pernah dimenangkan
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="textarea"
                      disabled
                      placeholder={prizesWonFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sinopsis</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="textarea"
                      disabled
                      placeholder={synopsisFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PRODUKSI</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Nama</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={productionCompany}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Alamat</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.detail}
                    />
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Nama Jalan
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.namaJalan}
                    />
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Keterangan
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.keterangan}
                    />
                  </Col>
                </div>
              </Form>

              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kota/Kabupaten
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.kota}
                    />
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Provinsi
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.provinsi}
                    />
                  </Col>
                </div>
              </Form>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Kode Pos
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.kodepos}
                    />
                  </Col>
                  <Col className="mb-3" md="6">
                    <label
                      className="form-control-label"
                      htmlFor="validationCustom01"
                      style={{ fontSize: "10px" }}
                    >
                      Negara
                    </label>
                    <Input
                      type="text"
                      disabled
                      placeholder={addressProductionCompany.negara}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Email</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      id="form-email"
                      type="email"
                      disabled
                      placeholder={emailProductionCompany}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Apakah kamu punya agen promosi di Indonesia?
                </h4>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_true"
                    type="radio"
                    name="agen"
                    checked={haveSalesIndonesia == true ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_true"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_false"
                    type="radio"
                    name="agen"
                    checked={haveSalesIndonesia == false ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_false"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Apakah kamu mengizinkan Drive-In Senja untuk mendistribusikan
                  film kamu?
                </h4>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_trueAllow"
                    type="radio"
                    name="agenAllow"
                    checked={allowDISDistIndoneisa == true ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_trueAllow"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agen_falseAllow"
                    type="radio"
                    name="agenAllow"
                    checked={allowDISDistIndoneisa == false ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agen_falseAllow"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PRODUKSI</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sutradara</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={directorFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Produser</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={producersFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Penulis Naskah</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={screenWriterFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sinematografer</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={cinematographerFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Editor</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={editorFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Pemain</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={mainCastFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Foto Sutradara - Google Drive / Cloud Storage URL
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={urlImagesDirector}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Biografi singkat Sutradara</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={shortBioDirector}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">TECHNICAL FEATURE</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Durasi</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={runningTimeFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Shooting Format</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={shootingFormatFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Screening Format</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={screenFormatFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Rasio Layar</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input disabled placeholder={screenRatioFilm} type="text" />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Frame Rate</h4>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_24fps"
                    type="radio"
                    name="type-framerate"
                    checked={frameRateFilm == "24fps" ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_24fps"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      24fps
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_25fps"
                    type="radio"
                    name="type-framerate"
                    checked={frameRateFilm == "25fps" ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_25fps"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      25fps
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_custom"
                    type="radio"
                    name="type-framerate"
                    checked={
                      frameRateFilm != "24fps" && frameRateFilm != "25fps"
                        ? true
                        : false
                    }
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_24fps"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Lainnya
                    </span>
                  </label>
                </Col>
              </div>
              <Form className="needs-validation pt-2" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="4">
                    <Input
                      id="type_custom"
                      type="text"
                      placeholder={`${frameRateFilm}`}
                      disabled
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Sound</h4>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_mono"
                    type="radio"
                    name="type-sound"
                    checked={soundFilm == "Mono" ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_mono"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Mono
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_stereo"
                    type="radio"
                    name="type-sound"
                    checked={soundFilm == "Stereo" ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_stereo"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Stereo
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_silent"
                    type="radio"
                    name="type-sound"
                    checked={soundFilm == "Silent" ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_silent"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Silent
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="type_customSound"
                    type="radio"
                    name="type-sound"
                    checked={
                      soundFilm != "Stereo" &&
                      soundFilm != "Mono" &&
                      soundFilm != "Silent"
                        ? true
                        : false
                    }
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="type_customSound"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Lainnya
                    </span>
                  </label>
                </Col>
              </div>
              <Form className="needs-validation pt-2" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="4">
                    <Input
                      id="type_custom"
                      type="text"
                      placeholder={`${soundFilm}`}
                      disabled
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Bahasa</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={originalLanguageFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">Language of Subtitles</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={languageSubtitleFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">URL Video for Preview</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={urlPreviewFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Password untuk URL VIdeo Peview (jika tidak ada, ketik '-')
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={passwordUrlPreview}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Dokumentasi - Google Drive / Cloud Storage URL
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input
                      type="text"
                      disabled
                      placeholder={urlStillPhotoFilm}
                    />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Poster / Artwork - Google Drive / Cloud Storage URL
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={urlPosterFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  Subtitle File - Google Drive / Cloud Strorage URL
                </h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={urlSubtitleFilm} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">URL Trailer</h4>
              </div>
              <Form className="needs-validation" noValidate>
                <div className="form-row">
                  <Col className="mb-3" md="12">
                    <Input type="text" disabled placeholder={urlTrailer} />
                  </Col>
                </div>
              </Form>

              <div className="d-flex align-items-center pt-3 pb-2">
                <h2 className="m-0 p-0 pr-2">PERSETUJUAN</h2>
              </div>
              <div
                style={{
                  backgroundColor: "#000000",
                  width: "100%",
                  height: "1px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex align-items-center pt-2 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PERJANJIAN UNTUK BERPARTISIPASI DALAM PROGRAM LAYAR
                  NON-FESTIVAL{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      fontStyle: "italic",
                      color: "#B00505",
                    }}
                  >
                    (Wajib diisi!)
                  </span>
                </h4>
              </div>
              <label
                className="form-control-label"
                htmlFor="validationCustom01"
                style={{ fontSize: "10px" }}
              >
                Selain menyelenggarakan Drive-In Senja Film Festival, Komite
                Drive-In Senja juga mengadakan beberapa pemutaran non-festival
                yang bertujuan untuk mempromosikan film-film Asia dan mendidik
                masyarakat tentang perfilman. Saya memberikan izin kepada Komite
                Drive-In Senja untuk menggunakan salinan h264 atau MPEG-4 dari
                film tersebut dalam program pemutaran non-festival Drive-In
                Senja selama program tersebut diadakan untuk tujuan pendidikan
                dan bukan untuk tujuan komersial, dan bahwa Saya mendapat
                pemberitahuan setiap kali Komite akan menggunakan salinan film
                saya.
              </label>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementScreening_true"
                    type="radio"
                    name="agreementScreening"
                    checked={aggrementScreeningPrograms == true ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementScreening_true"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementScreening_false"
                    type="radio"
                    name="agreementScreening"
                    checked={aggrementScreeningPrograms == false ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementScreening_false"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-4 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PERJANJIAN UNTUK MEMBERI IZIN KEPADA KOMITE DRIVE-IN SENJA
                  UNTUK MENJAGA SALINAN FILM{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      fontStyle: "italic",
                      color: "#B00505",
                    }}
                  >
                    (Wajib diisi!)
                  </span>
                </h4>
              </div>
              <label
                className="form-control-label"
                htmlFor="validationCustom01"
                style={{ fontSize: "10px" }}
              >
                Komite Drive-In Senja memiliki dan mengelola Drive-In Senja film
                library. Drive-In Senja film library ini dibangun sebagai bagian
                dari tugas tim Drive-In Senja untuk mengarsipkan film dan
                mengedukasi masyarakat Indonesia tentang perfilman. Saya
                memberikan izin kepada Komite Drive-In Senja untuk menyimpan
                salinan h264 atau MPEG-4 dari film tersebut di Drive-In Senja
                film library dan memberikan izin kepada Komite Drive-In Senja
                untuk menggunakannya untuk tujuan pendidikan dan bukan untuk
                tujuan komersial, dan bahwa saya mendapat pemberitahuan setiap
                kali tim Drive-In Senja akan menggunakan salinannya dalam
                acara-acara yang melibatkan publik.
              </label>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementJFA_true"
                    type="radio"
                    name="agreementJFA"
                    checked={aggrementJAFFCopy == true ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementJFA_true"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Ya
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="agreementJFA_false"
                    type="radio"
                    name="agreementJFA"
                    checked={aggrementJAFFCopy == false ? true : false}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="agreementJFA_false"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Tidak
                    </span>
                  </label>
                </Col>
              </div>

              <div className="d-flex align-items-center pt-4 pb-2">
                <h4 className="m-0 p-0 pr-2">
                  PARTISIPASI DALAM FILM AGREEMENT{" "}
                  <span
                    style={{
                      fontSize: "10px",
                      fontStyle: "italic",
                      color: "#B00505",
                    }}
                  >
                    (Wajib diisi!)
                  </span>
                </h4>
              </div>

              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="isAgreementFilmParticipant"
                    type="checkbox"
                    checked={aggrementFilmToParticipate.firstStatement}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="isAgreementFilmParticipant"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Saya telah membaca dan menerima syarat dan ketentuan yang
                      diuraikan dalam peraturan dan perundang-undangan.
                    </span>
                  </label>
                </Col>
              </div>
              <div
                className="d-flex align-content-center align-items-center justify-content-between pr-3 py-1"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex align-items-center">
                  <input
                    id="isAgreementFilmParticipantSecond"
                    type="checkbox"
                    checked={aggrementFilmToParticipate.secondStatement}
                    disabled
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <Col>
                  <label
                    className="m-0 d-flex align-content-center align-items-center"
                    htmlFor="isAgreementFilmParticipantSecond"
                    style={{ cursor: "pointer" }}
                  >
                    <span
                      className="m-0"
                      style={{
                        cursor: "pointer",
                        color: "#000000",
                      }}
                    >
                      Saya setuju dengan perjanjian yang telah disampaikan
                    </span>
                  </label>
                </Col>
              </div>
            </Card>
          </Col>
        </Container>
      </div>
    </>
  );
}

export default ParticipantID;
