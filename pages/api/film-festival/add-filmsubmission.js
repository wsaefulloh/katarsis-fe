import { API_APPS_HOST } from "../../../config";

export default async (req, res) => {
  if (req.method === "POST") {
    const response = await fetch(`${API_APPS_HOST}/participant/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
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
