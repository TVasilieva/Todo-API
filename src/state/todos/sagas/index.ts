import { takeLatest, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ActionPayload } from "state";
import {
  addTodoResponse,
  addTodoResponseError,
  getNumberCompletedTodosResponse,
  getNumberCompletedTodosResponseError,
  getTodosResponse,
  getTodosResponseError,
  removeTodoResponse,
  removeTodoResponseError,
  TodosActions,
  updateTodoResponse,
  updateTodoResponseError,
} from "../actions";
import TodoAPI, {
  AddTodoRequest,
  AddTodoResponse,
  Data,
  GetNumberCompletedTodosResponse,
  GetTodosResponse,
  UpdateTodoRequest,
  UpdateTodoResponse,
} from "api/todos";
import { Todo } from "models/todo";

function* getTodoList() {
  try {
    const response: AxiosResponse<GetTodosResponse> = yield TodoAPI.getTodos();

    const todos = response.data.data.map((todo) => ({
      id: todo._id,
      name: todo.description,
      completed: !todo.completed,
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
      completed: response.data.data.completed,
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

function* updateTodoItem(action: ActionPayload<UpdateTodoRequest>) {
  try {
    const response: AxiosResponse<UpdateTodoResponse> =
      yield TodoAPI.updateTodos(
        action.payload.id as string,
        action.payload.completed as Data
      );

    console.log(response);
    const todo: Todo = {
      id: response.data.data._id,
      name: response.data.data.description,
      completed: response.data.data.completed,
    };

    console.log(todo);

    yield put(updateTodoResponse(todo));
  } catch (error) {
    yield put(updateTodoResponseError((error as TypeError).message));
  }
}

function* getNumberCompletedTodoList() {
  try {
    const response: AxiosResponse<GetNumberCompletedTodosResponse> =
      yield TodoAPI.getNumberCompletedTodos();

    const completedTodos = response.data.count;

    yield put(getNumberCompletedTodosResponse(completedTodos));
  } catch (error) {
    yield put(
      getNumberCompletedTodosResponseError((error as TypeError).message)
    );
  }
}

export const todosSagas = [
  takeLatest(TodosActions.GET_TODOS_REQUEST, getTodoList),
  takeLatest(TodosActions.ADD_TODO_REQUEST, addTodoItem),
  takeLatest(TodosActions.REMOVE_TODO_REQUEST, removeTodoItem),
  takeLatest(TodosActions.UPDATE_TODO_REQUEST, updateTodoItem),
  takeLatest(
    TodosActions.GET_COMPLETED_TODOS_REQUEST,
    getNumberCompletedTodoList
  ),
];
