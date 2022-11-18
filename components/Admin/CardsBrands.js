import React, { useState } from "react";

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

function CardBrands(props) {
  let { id, url, name } = props;

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
            const response = await fetch(`../api/admin/brands?id=${id}`, {
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
    <>
      <Card className="mb-2">
        <div className="py-3 px-2">
          <Row className="align-items-center">
            <Col>
              <span className="mb-0">{name}</span>
            </Col>
            <Col>
              <Input type="text" defaultValue={`${url}`} disabled />
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
      </Card>
    </>
  );
}

CardBrands.propTypes = {
  id: PropTypes.any,
  name: PropTypes.any,
  url: PropTypes.any,
};

export default CardBrands;
