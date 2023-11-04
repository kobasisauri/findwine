import axiosInstance from "./axios";

export const getWineries = () => axiosInstance.get("/wineries");

export const getWinery = (id) => axiosInstance.get(`/wineries/${id}`);
