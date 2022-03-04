import axios, { AxiosResponse } from "axios";
import { getToken } from "utils/token";

export interface RegistrationRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
  user: {
    age: number | null;
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    age: number | null;
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
}

export interface GetUserResponse {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

class AuthAPI {
  static registration = async (
    data: RegistrationRequest
  ): Promise<AxiosResponse<RegistrationResponse>> => {
    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/user/register",
      method: "post",
      data,
    });
  };
  static login = async (
    data: LoginRequest
  ): Promise<AxiosResponse<LoginResponse>> => {
    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/user/login",
      method: "post",
      data,
    });
  };
  static logout = async (): Promise<AxiosResponse<LoginResponse>> => {
    const token = getToken() as string;
    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/user/logout",
      method: "post",
      headers: {
        Authorization: token,
      },
    });
  };
  static getByToken = async (): Promise<AxiosResponse<GetUserResponse>> => {
    const token = getToken() as string;
    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/user/me",
      method: "get",
      headers: {
        Authorization: token,
      },
    });
  };
}

export default AuthAPI;
