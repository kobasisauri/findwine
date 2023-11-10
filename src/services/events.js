import axiosInstance from "./axios";

export const getEvents = () => axiosInstance.get("/events");

export const getEvent = (id) => axiosInstance.get(`/events/${id}`);
