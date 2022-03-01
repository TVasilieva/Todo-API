import { AddTodoRequest, UpdateTodoRequest } from "api/todos";
import { Todo } from "models/todo";
import { Filter } from "pages/AppPage/types";
import { actionCreator } from "utils/actionCreator";

export enum TodosActions {
  GET_TODOS_REQUEST = "GET_TODOS_REQUEST",
  GET_TODOS_RESPONSE = "GET_TODOS_RESPONSE",
  GET_TODOS_RESPONSE_ERROR = "GET_TODOS_RESPONSE_ERROR",

  ADD_TODO_REQUEST = "ADD_TODO_REQUEST",
  ADD_TODO_RESPONSE = "ADD_TODO_RESPONSE",
  ADD_TODO_RESPONSE_ERROR = "ADD_TODO_RESPONSE_ERROR",

  REMOVE_TODO_REQUEST = "REMOVE_TODO_REQUEST",
  REMOVE_TODO_RESPONSE = "REMOVE_TODO_RESPONSE",
  REMOVE_TODO_RESPONSE_ERROR = "REMOVE_TODO_RESPONSE_ERROR",

  GET_COMPLETED_TODOS_REQUEST = "GET_COMPLETED_TODOS_REQUEST",
  GET_COMPLETED_TODOS_RESPONSE = "GET_COMPLETED_TODOS_RESPONSE",
  GET_COMPLETED_TODOS_RESPONSE_ERROR = "GET_COMPLETED_TODOS_RESPONSE_ERROR",

  UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST",
  UPDATE_TODO_RESPONSE = "UPDATE_TODO_RESPONSE",
  UPDATE_TODO_RESPONSE_ERROR = "UPDATE_TODO_RESPONSE_ERROR",

  FILTER_TODOS = "FILTER_TODOS",
}

export const getTodosRequest = () =>
  actionCreator<TodosActions>(TodosActions.GET_TODOS_REQUEST);
export const getTodosResponse = (data: Todo[]) =>
  actionCreator<TodosActions, Todo[]>(TodosActions.GET_TODOS_RESPONSE, data);
export const getTodosResponseError = (error: any) =>
  actionCreator<TodosActions, any>(
    TodosActions.GET_TODOS_RESPONSE_ERROR,
    error
  );

export const addTodoRequest = (data: AddTodoRequest) =>
  actionCreator<TodosActions, AddTodoRequest>(
    TodosActions.ADD_TODO_REQUEST,
    data
  );
export const addTodoResponse = (data: Todo) =>
  actionCreator<TodosActions, Todo>(TodosActions.ADD_TODO_RESPONSE, data);
export const addTodoResponseError = (error: any) =>
  actionCreator<TodosActions, any>(TodosActions.ADD_TODO_RESPONSE_ERROR, error);

export const removeTodoRequest = (id: string) =>
  actionCreator<TodosActions, string>(TodosActions.REMOVE_TODO_REQUEST, id);
export const removeTodoResponse = (id: string) =>
  actionCreator<TodosActions, string>(TodosActions.REMOVE_TODO_RESPONSE, id);
export const removeTodoResponseError = (error: any) =>
  actionCreator<TodosActions, any>(
    TodosActions.REMOVE_TODO_RESPONSE_ERROR,
    error
  );

export const getNumberCompletedTodosRequest = () =>
  actionCreator<TodosActions>(TodosActions.GET_COMPLETED_TODOS_REQUEST);
export const getNumberCompletedTodosResponse = (data: number) =>
  actionCreator<TodosActions, number>(
    TodosActions.GET_COMPLETED_TODOS_RESPONSE,
    data
  );
export const getNumberCompletedTodosResponseError = (error: any) =>
  actionCreator<TodosActions, any>(
    TodosActions.GET_COMPLETED_TODOS_RESPONSE_ERROR,
    error
  );

export const updateTodoRequest = (data: UpdateTodoRequest) =>
  actionCreator<TodosActions, UpdateTodoRequest>(
    TodosActions.UPDATE_TODO_REQUEST,
    data
  );
export const updateTodoResponse = (data: Todo) =>
  actionCreator<TodosActions, Todo>(TodosActions.UPDATE_TODO_RESPONSE, data);
export const updateTodoResponseError = (error: any) =>
  actionCreator<TodosActions, any>(
    TodosActions.UPDATE_TODO_RESPONSE_ERROR,
    error
  );

export const filterTodos = (filter: Filter) =>
  actionCreator<TodosActions, Filter>(TodosActions.FILTER_TODOS, filter);
