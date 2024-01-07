import axiosInstance from "./axios";

export const buy = (data) => axiosInstance.post(`/user/process-payment`, data);
