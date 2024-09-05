import axios from "axios";
const BASE_URL = " https://urbantrov.tech/api/v1/";
// const BASE_URL = "http://localhost:8080/api/v1/";
// const BASE_URL = "https://urban.adaptable.app/api/v1/";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
