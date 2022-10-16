import { API_APPS_HOST } from "../../../config";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(
      `${API_APPS_HOST}/ticket-film/get/${req.query.id_film}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const { status, result } = await response.json();
    res.status(status).json({
      data: result,
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};
