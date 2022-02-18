import { Todo } from "models/todo";
import { actionCreator } from "utils/actionCreator";

export enum TodosActions {
  SET_TODOS = "SET_TODOS",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
}

export const setTodos = (todos: Todo[]) =>
  actionCreator<TodosActions, Todo[]>(TodosActions.SET_TODOS, todos);

export const addTodo = (todo: Todo) =>
  actionCreator<TodosActions, Todo>(TodosActions.ADD_TODO, todo);

export const removeTodo = (id: number) =>
  actionCreator<TodosActions, number>(TodosActions.REMOVE_TODO, id);
