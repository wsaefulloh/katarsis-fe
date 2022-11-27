import { API_APPS_HOST } from "../../../config";
import axios from "axios";

export default async (req, res) => {
  if (req.method === "POST") {
    const response = await axios.post(
      `${API_APPS_HOST}/content/add-file`,
      req.body,
      { "Content-type": "multipart/form-data" }
    );
    const { status, result } = await response.json();
    res.status(status).json({
      data: result,
      statusCode: status,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};
