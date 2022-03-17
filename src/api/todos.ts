import axios, { AxiosResponse } from "axios";
import { getToken } from "utils/token";
import {
  AddTodoRequest,
  AddTodoResponse,
  Data,
  GetNumberCompletedTodosResponse,
  GetTodosResponse,
  RemoveTodoResponse,
  UpdateTodoResponse,
} from "./types";

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

  static updateTodos = async (
    id: string,
    data: Data
  ): Promise<AxiosResponse<UpdateTodoResponse>> => {
    const token = getToken() as string;

    return axios({
      url: `https://api-nodejs-todolist.herokuapp.com/task/${id}`,
      method: "put",
      data,
      headers: {
        Authorization: token,
      },
    });
  };
}

export default TodoAPI;
