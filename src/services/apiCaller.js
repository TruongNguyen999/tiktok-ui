// LIBRARY
import axios from "axios";

// COMMON
import { Config, Keys } from "../config";
import * as Helpers from "../utils/Helpers";

const Api = axios.create({
  baseURL: Config.baseURL,
});

Api.interceptors.request.use(
  (request) => {
    let dataToken = Helpers.getDataStorage(Keys.token);
    request.headers.Authorization = `Bearer ${
      dataToken?.token || Config.defaultToken
    }`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      if (window.location.pathname !== "/sign-in") {
      } else {
        window.location = `${window.origin}/sign-in`;
      }
    }
    return Promise.reject(error);
  }
);


export default Api