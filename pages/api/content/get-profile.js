import { API_APPS_HOSTE } from "../../../config/index2";

export default async (req, res) => {
  if (req.method === "GET") {
    let response
    if (req.query.team === 'true') {
      response = await fetch(`${API_APPS_HOSTE}/api/profiles?filters[name][$eq]=team&populate=*`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(`${API_APPS_HOSTE}/api/profiles?filters[name][$ne]=team&populate=*`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

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
