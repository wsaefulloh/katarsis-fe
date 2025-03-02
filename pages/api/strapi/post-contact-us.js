import { API_APPS_HOST } from "../../../config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const requestData = req.body;
    const response = await fetch(`${API_APPS_HOST}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
      body: JSON.stringify({ data: requestData }), // Send the data as JSON
    });
    const { data, meta } = await response.json();
    res.status(200).json({
      data: data,
      meta: meta
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({
      message: `Method ${req.method} not allowed`,
    });
  }
};
