import { API_APPS_HOST } from "../../../config";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(
      `${API_APPS_HOST}/film/filter?location=${req.query.location}&genre=${req.query.genre}&theme=${req.query.theme}&title=${req.query.title}`,
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
