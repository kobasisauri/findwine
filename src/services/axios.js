import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStore from "../stores/store";

const axiosInstance = axios.create({
  baseURL: "https://staging.findwines.ge/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (request) => {
    const token = await AsyncStorage.getItem("token");

    if (token) {
      if (request.headers) {
        request.headers.Authorization = `Bearer ${token}`;
      } else {
        request.headers = { Authorization: `Bearer ${token}` };
      }
    }
    return request;
  },
  (error) => Promise.reject({ ...error })
);

const onResponseFulfilled = (response) => response.data;

const onResponseRejected = (error) => {
  const showNotification = useStore.getState().showNotification;

  if (!error.response) {
    showNotification("warning", "no internet connection");
    return Promise.reject({ ...error });
  }
  if (error.response.status === 408 || error.response.status === 504) {
    showNotification("error", `error #${error.response.status}`);
  } else if (error.response.status === 404 || error.response.status === 504) {
    showNotification("error", "Not Found");
  } else if (error.response.status === 500) {
    showNotification("error", "Internal Server Error");
  }
  if (
    error.response.status === 401 ||
    error.response.status === 404 ||
    error.response.status === 403
  ) {
    return showNotification("error", error.response.data.error);
  }

  // return Promise.reject({ ...error });
  return showNotification("error", error.response.data.error);
};

axiosInstance.interceptors.response.use(
  (response) => onResponseFulfilled(response),
  (error) => onResponseRejected(error)
);

export default axiosInstance;
