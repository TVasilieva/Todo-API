import axios, { AxiosResponse } from "axios";
import { getToken } from "utils/token";

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

class TodoAPI {
  static getTodos = async (): Promise<AxiosResponse<GetTodosResponse>> => {
    const token = getToken() as string;

    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/task",
      method: "get",
      headers: {
        Authorization: token,
      },
    });
  };

  static addTodo = async (
    data: AddTodoRequest
  ): Promise<AxiosResponse<AddTodoResponse>> => {
    const token = getToken() as string;

    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/task",
      method: "post",
      data,
      headers: {
        Authorization: token,
      },
    });
  };

  static removeTodo = async (
    id: string
  ): Promise<AxiosResponse<RemoveTodoResponse>> => {
    const token = getToken() as string;

    return axios({
      url: `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
      method: "delete",
      headers: {
        Authorization: token,
      },
    });
  };

  static getNumberCompletedTodos = async (): Promise<
    AxiosResponse<GetNumberCompletedTodosResponse>
  > => {
    const token = getToken() as string;

    return axios({
      url: "https://api-nodejs-todolist.herokuapp.com/task?completed=true",
      method: "get",
      headers: {
        Authorization: token,
      },
      params: {
        Completed: true,
      },
    });
  };
}

export default TodoAPI;
