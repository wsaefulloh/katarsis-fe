import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export const API_APPS_HOSTE =
  serverRuntimeConfig.api_hoste || "http:127.0.0.1:80";
