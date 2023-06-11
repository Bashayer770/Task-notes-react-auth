import { configure } from "@testing-library/react";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://task-react-auth.herokuapp.com/api",
  // baseURL: "http://localhost:5000/api",
});
instance.interceptors.request.use(
  (config) => {
    localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
