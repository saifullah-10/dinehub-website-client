// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://server-side-alpha-sooty.vercel.app",
  withCredentials: true,
});

export default instance;
