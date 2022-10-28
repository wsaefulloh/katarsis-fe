import React, { useEffect, useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Spinner,
} from "reactstrap";

import PropTypes from "prop-types";

import "../../assets/css/main/main.module.css";

import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { fetchWrapper } from "../../helpers/fetch-wrapper";

function CardsFileProject(props) {
  let { id, title, place, name_project, urlOrigin } = props;
  const router = useRouter();

  const deleteData = async (id) => {
    Swal.fire({
      title: `Apakah anda yakin ingin menghapus data ini?`,
      text: "Anda tidak dapat mengembalikan data yang sudah hilang!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus ini!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteThis = async (id) => {
          try {
            const response = await fetch(`../api/admin/gallery?id=${id}`, {
              method: "DELETE",
            });
            const data = await response.json();
            if (data) {
              if (data.statusCode != 200) {
                Swal.fire("FAILED", `Data gagal dihapus`, "error");
              } else {
                await Swal.fire("OK", `Data berhasil dihapus`, "success");
                router.reload(window.location.pathname);
              }
            }
          } catch (error) {
            Swal.fire("FAILED", "Data gagal di proses", "error");
          }
        };
        deleteThis(id);
      }
    });
  };

  return (
    <div className="mb-3">
      <Row className="align-items-center mt-2">
        <Col>
          <h4 className="mb-0">{title}</h4>
        </Col>
      </Row>

      <Row className="align-items-center mt-2">
        <Col>
          <Form>
            <div className="form-row">
              <Col className="p-0 text-left ">
                <Input
                  disabled="true"
                  type="text"
                  defaultValue={`${urlOrigin}`}
                />
              </Col>
            </div>
          </Form>
        </Col>
        <Button
          className="m-1 border-0 py-1 px-3"
          style={{
            color: "#ffffff",
            backgroundColor: "#cc0000",
            borderRadius: "5px",
            fontSize: "10px",
          }}
          type="button"
          onClick={() => {
            deleteData(id);
          }}
        >
          <span>Delete</span>
        </Button>
      </Row>
    </div>
  );
}

CardsFileProject.propTypes = {
  id: PropTypes.any,
  title: PropTypes.any,
  place: PropTypes.any,
  name_project: PropTypes.any,
  urlOrigin: PropTypes.any,
};

export default CardsFileProject;
