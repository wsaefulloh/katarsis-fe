import { API_APPS_HOST } from "../../../config/index";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(`${API_APPS_HOST}/api/events?filters[date][$gte]=${req.query.lastYear}-12-31&filters[date][$lte]=${req.query.nextYear}-01-01`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { data, meta } = await response.json();
    res.status(200).json({
      data: data,
      meta: meta
    });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};
