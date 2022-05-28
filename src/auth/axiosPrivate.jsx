import axios from "axios";
import { signOut } from "firebase/auth";
import auth from "../Firebase.init";

const axiosPrivate = axios.create({});
axiosPrivate.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers = { "Access-Control-Allow-Origin": "*" };
    if (!config.headers.authorization)
      config.headers.authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosPrivate.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    const code = error.response.status;
    if (code === 401 || code === 403) {
      window.location = "/";
      signOut(auth);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosPrivate;
