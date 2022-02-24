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
}

export default TodoAPI;
