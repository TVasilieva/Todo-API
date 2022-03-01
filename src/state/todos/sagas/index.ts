import { takeLatest, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ActionPayload } from "state";
import {
  getTodosResponse,
  getTodosResponseError,
  TodosActions,
} from "../actions";
import TodoAPI, { GetTodosResponse } from "api/todos";

function* getTodoList() {
  try {
    const response: AxiosResponse<GetTodosResponse> = yield TodoAPI.getTodos();

    const todos = response.data.data.map((todo) => ({
      id: todo._id,
      name: todo.description,
      active: !todo.completed,
    }));

    yield put(getTodosResponse(todos));
  } catch (error) {
    yield put(getTodosResponseError((error as TypeError).message));
  }
}

export const todosSagas = [
  takeLatest(TodosActions.GET_TODOS_REQUEST, getTodoList),
];
