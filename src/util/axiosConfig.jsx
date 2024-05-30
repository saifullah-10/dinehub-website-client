// axiosConfig.js
import axios from "axios";
// https://server-side-alpha-sooty.vercel.app
const instance = axios.create({
  baseURL: "https://server-side-alpha-sooty.vercel.app",
  withCredentials: true,
});

export default instance;
