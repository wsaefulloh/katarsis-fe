import { API_APPS_HOSTE } from "../../../config/index2";

export default async (req, res) => {
  if (req.method === "GET") {
    let response = await fetch(`${API_APPS_HOSTE}/api/projects?filters[id][$eq]=${req.query.id}&populate=*`, {
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
