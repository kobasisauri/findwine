import axiosInstance from "./axios";

export const getWinePassports = () => axiosInstance.get("/wine-passport");
