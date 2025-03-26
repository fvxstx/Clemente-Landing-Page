import axios from "axios";
import Cookies from "js-cookie";

/* process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"; */
const baseUrlApi = process.env.NEXT_URL_API;

export const api = axios.create({
  baseURL: baseUrlApi,
  timeout: 10000,
});

/* export const api = axios.create({
  baseURL: "https://localhost:7238",
  timeout: 80000,
}); */

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  return config;
});
