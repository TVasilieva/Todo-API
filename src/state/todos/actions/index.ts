import { Todo } from "todos";

export const SET_TODOS = "SET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const setTodos = (todos: Todo[]) => ({
  type: SET_TODOS,
  payload: todos,
});

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number) => ({
  type: REMOVE_TODO,
  payload: id,
});
