import { Todo } from "todos";

export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";

export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodos = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});
