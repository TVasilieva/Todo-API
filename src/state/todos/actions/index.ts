import { Todo } from "models/todo";
import { actionCreator } from "utils/actionCreator";

export enum TodosActions {
  GET_TODOS_REQUEST = "GET_TODOS_REQUEST",
  GET_TODOS_RESPONSE = "GET_TODOS_RESPONSE",
  GET_TODOS_RESPONSE_ERROR = "GET_TODOS_RESPONSE_ERROR",

  // FILTER_TODOS = "FILTER_TODOS",
  // CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS",
  // CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS",
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

// export const removeTodo = (id: number) =>
//   actionCreator<TodosActions, number>(TodosActions.REMOVE_TODO_REQUEST, id);
// export const filterTodos = (filter: Filter) =>
//   actionCreator<TodosActions, Filter>(TodosActions.FILTER_TODOS, filter);
// export const clearCompletedTodos = () =>
//   actionCreator<TodosActions>(TodosActions.CLEAR_COMPLETED_TODOS);
// export const changeTodoStatus = (id: number) =>
//   actionCreator<TodosActions, number>(TodosActions.CHANGE_TODO_STATUS, id);
