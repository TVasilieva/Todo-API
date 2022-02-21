import { Todo, Todo2 } from "models/todo";
import { Filter } from "pages/AppPage/types";
import { actionCreator } from "utils/actionCreator";

export enum TodosActions {
  CREATE_TODO_LIST = "CREATE_TODO_LIST",
  SET_TODOS = "SET_TODOS",
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  FILTER_TODOS = "FILTER_TODOS",
  CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS",
  CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS",
}

export const setTodos = (todos: Todo[]) =>
  actionCreator<TodosActions, Todo[]>(TodosActions.SET_TODOS, todos);

export const createTodoList = (todo: Todo2) =>
  actionCreator<TodosActions, Todo2>(TodosActions.CREATE_TODO_LIST, todo);

export const addTodo = (todo: Todo) =>
  actionCreator<TodosActions, Todo>(TodosActions.ADD_TODO, todo);

export const removeTodo = (id: number) =>
  actionCreator<TodosActions, number>(TodosActions.REMOVE_TODO, id);

export const filterTodos = (filter: Filter) =>
  actionCreator<TodosActions, Filter>(TodosActions.FILTER_TODOS, filter);

export const clearCompletedTodos = () =>
  actionCreator<TodosActions>(TodosActions.CLEAR_COMPLETED_TODOS);

export const changeTodoStatus = (id: number) =>
  actionCreator<TodosActions, number>(TodosActions.CHANGE_TODO_STATUS, id);
