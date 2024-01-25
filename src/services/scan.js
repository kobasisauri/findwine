import axiosInstance from "./axios";

export const getCheckPassportCode = (hash) =>
  axiosInstance.post("/user/check-passport-code", { hash });

export const getTransactionLog = () =>
  axiosInstance.get("/user/get-transaction-log");
