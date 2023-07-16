import { API_APPS_HOSTE } from "../../config/index2";

export default async (req, res) => {
  if (req.method === "GET") {
    let response
    if (req.query.menu !== 'null') {
      response = await fetch(`${API_APPS_HOSTE}/api/projects?sort[0]=id%3Adesc&filters[menu][id][$eq]=${req.query.menu}&pagination[page]=${req.query.page}&pagination[pageSize]=4&populate=*`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(`${API_APPS_HOSTE}/api/projects?sort[0]=id%3Adesc&filters[submenu][id][$eq]=${req.query.submenu}&pagination[page]=${req.query.page}&pagination[pageSize]=4&populate=*`, {
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
