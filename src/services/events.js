import axiosInstance from "./axios";

export const getEvents = () => axiosInstance.get("/events");
