import { SERVER_API_URL } from "libs/const";
import axiosInstance from "./axiosInstance";
import { LoginRequest } from "./login-request";

export const ownerLogin = async (req: LoginRequest) => {
    return axiosInstance.post(`${SERVER_API_URL}/owners/signin`, req);
};

export const getVisit = async (id) => {
    return axiosInstance.get(`${SERVER_API_URL}/masters/visit/${id}`);
};

export const updateVisit = async (id) => {
    return axiosInstance.put(`${SERVER_API_URL}/masters/visit/${id}`);
};

