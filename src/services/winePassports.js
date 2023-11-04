import axiosInstance from "./axios";

export const getWinePassports = () => axiosInstance.get("/wine-passport");

export const getWinePassport = (id) =>
  axiosInstance.get(`/wine-passport/${id}`);
