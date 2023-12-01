import axiosInstance from "./axios";

export const getWineries = () => axiosInstance.get("/wineries");

export const getWinery = (id) => axiosInstance.get(`/wineries/${id}`);

export const getRegionWiners = () => axiosInstance.get("/region-winers");

export const getRegionWinery = () => axiosInstance.get(`/region-winers`);
