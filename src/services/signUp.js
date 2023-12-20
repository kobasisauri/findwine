import axiosInstance from "./axios";

export const signUp = (data) => axiosInstance.post("/register", data);

export const signIn = (data) => axiosInstance.post("/auth", data);

export const resetPassword = (data) =>
  axiosInstance.post("/reset-password", data);
