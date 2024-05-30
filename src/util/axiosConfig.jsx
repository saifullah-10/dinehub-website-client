// axiosConfig.js
import axios from "axios";
// https://server-side-alpha-sooty.vercel.app
const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default instance;
