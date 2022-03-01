import { takeLatest, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ActionPayload } from "state";
import {
  addTodoResponse,
  addTodoResponseError,
  getTodosResponse,
  getTodosResponseError,
  removeTodoResponse,
  removeTodoResponseError,
  TodosActions,
} from "../actions";
import TodoAPI, {
  AddTodoRequest,
  AddTodoResponse,
  GetTodosResponse,
  RemoveTodoResponse,
} from "api/todos";
import { Todo } from "models/todo";

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

function* addTodoItem(action: ActionPayload<AddTodoRequest>) {
  try {
    const response: AxiosResponse<AddTodoResponse> = yield TodoAPI.addTodo(
      action.payload as AddTodoRequest
    );

    const todo: Todo = {
      id: response.data.data._id,
      name: response.data.data.description,
      active: !response.data.data.completed,
    };

    yield put(addTodoResponse(todo));
  } catch (error) {
    yield put(addTodoResponseError((error as TypeError).message));
  }
}

function* removeTodoItem(action: ActionPayload<string>) {
  try {
    yield TodoAPI.removeTodo(action.payload as string);
    yield put(removeTodoResponse());
  } catch (error) {
    yield put(removeTodoResponseError((error as TypeError).message));
  }
}

export const todosSagas = [
  takeLatest(TodosActions.GET_TODOS_REQUEST, getTodoList),
  takeLatest(TodosActions.ADD_TODO_REQUEST, addTodoItem),
  takeLatest(TodosActions.REMOVE_TODO_REQUEST, removeTodoItem),
];
