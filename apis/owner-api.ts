import { SERVER_API_URL } from "libs/const";
import axiosInstance from "./axiosInstance";
import { LoginRequest } from "./models/login-request";
import { SignUpRequest } from "./models/signup-request";

export const ownerLogin = async (req: LoginRequest) => {
    return axiosInstance.post(`${SERVER_API_URL}/owners/signin`, req);
};

export const ownerRegister = async (req: SignUpRequest) => {
    return axiosInstance.post(`${SERVER_API_URL}/owners/signup`, req);
};

