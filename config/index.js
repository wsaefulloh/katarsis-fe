import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

export const API_APPS_HOST =
  serverRuntimeConfig.api_host || "http:127.0.0.1:80";
