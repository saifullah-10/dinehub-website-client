// axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://server-side-vert-chi.vercel.app",
  withCredentials: true,
});

export default instance;
