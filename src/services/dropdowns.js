import axiosInstance from "./axios";

export const getCities = () => axiosInstance.get("/cities");

export const getRegions = () => axiosInstance.get("/regions");

export const getWineTypes = () => axiosInstance.get("/wine-types");
