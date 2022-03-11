//USER

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

export interface EditProfileRequest {
  name: string;
}

export interface EditProfileResponse {
  age: number | null;
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

//TODOS

interface TodoData {
  completed: boolean;
  _id: string;
  description: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetTodosResponse {
  count: number;
  data: TodoData[];
}

export interface AddTodoRequest {
  description: string;
}

export interface AddTodoResponse {
  success: boolean;
  data: TodoData;
}

export interface RemoveTodoResponse {
  success: boolean;
  data: TodoData;
}

export interface GetNumberCompletedTodosResponse {
  count: number;
  data: TodoData[];
}

export interface UpdateTodoRequest {
  id: string;
  completed: Data;
}

export interface UpdateTodoResponse {
  success: boolean;
  data: TodoData;
}

export interface Data {
  completed: boolean;
}

//IMAGE

export interface UpdateImageResponse {
  success: boolean;
}

export interface RemoveImageResponse {
  success: boolean;
}
