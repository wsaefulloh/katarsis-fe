import { API_APPS_HOST } from "../../../../config/index";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(`${API_APPS_HOST}/api/submenus?filters[menu][id][$eq]=${req.query.id}&populate[0]=menu`, {
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
