import { Todo } from "todos";

export const SET_TODOS = "SET_TODOS";

export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: todos,
});
