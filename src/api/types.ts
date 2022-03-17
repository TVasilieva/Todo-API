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
