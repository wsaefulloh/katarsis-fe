import { API_APPS_HOSTE } from "../../../config/index2";

export default async (req, res) => {
    if (req.method === "GET") {
        let uri = `/api/projects?sort[0]=id%3Adesc&filters[menu][id][$eq]=${req.query.menu}&populate[0]=images_cover&pagination[page]=${req.query.page}&pagination[pageSize]=4`
        if (req.query.submenu != undefined) {
            uri = `/api/projects?sort[0]=id%3Adesc&filters[menu][id][$eq]=${req.query.menu}&filters[submenu][id][$eq]=${req.query.submenu}&populate[0]=images_cover&pagination[page]=${req.query.page}&pagination[pageSize]=4`
        }
        console.log(`${API_APPS_HOSTE}${uri}`)
        const response = await fetch(
            `${API_APPS_HOSTE}${uri}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
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
