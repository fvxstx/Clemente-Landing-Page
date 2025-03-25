import axios from "axios";
import Cookies from "js-cookie";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

export const api = axios.create({
  baseURL: "https://clemente-desenvolvimento-api.azurewebsites.net",
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
