import axiosInstance from "./axios";

export const signUp = (data) => axiosInstance.post("/register", data);

export const signIn = (data) => axiosInstance.get("/sign-in", data);
