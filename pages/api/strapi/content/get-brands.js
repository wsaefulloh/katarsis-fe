import { API_APPS_HOSTE } from "../../../../config/index2";

export default async (req, res) => {
  if (req.method === "GET") {
    const response = await fetch(`${API_APPS_HOSTE}/api/brands?populate=*`, {
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
