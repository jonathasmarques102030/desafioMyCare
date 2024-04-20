import axios from "axios";
import { parseCookies } from "nookies";


export const getApiClient = (ctx?: any) => {
  const { "nextauth.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3030/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  api.interceptors.request.use((config) => {

    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
};
