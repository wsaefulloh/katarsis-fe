import { API_APPS_HOST } from "../../../config";

export default async (req, res) => {
  if (req.method === "PUT") {
    const response = await fetch(`${API_APPS_HOST}/link/update`, {
      method: "PUT",
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
  } else if (req.method === "DELETE") {
    const response = await fetch(`${API_APPS_HOST}/link/del/${req.query.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
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
