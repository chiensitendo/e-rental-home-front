import { SERVER_API_URL } from "libs/const";
import authenAxiosInstance from "./authenaxiosInstance";
import axiosInstance from "./axiosInstance";
import { LoginRequest } from "./models/login-request";
import { OwnerInfoResponse } from "./models/owner-info-response";
import { SignUpRequest } from "./models/signup-request";
import { UpdateOwnerRequest } from "./models/update-owner-request";

export const ownerLogin = async (req: LoginRequest) => {
    return axiosInstance.post(`${SERVER_API_URL}/owners/signin`, req);
};

export const ownerRegister = async (req: SignUpRequest) => {
    return axiosInstance.post(`${SERVER_API_URL}/owners/signup`, req);
};

export const getOwnerById = async (id: number) => {
    return authenAxiosInstance.get<OwnerInfoResponse>(`${SERVER_API_URL}/owners/${id}`);
};

export const updateOwnerInfo = async (id: number, req: UpdateOwnerRequest) => {
    return authenAxiosInstance.put<OwnerInfoResponse>(`${SERVER_API_URL}/owners/${id}`, req);
};