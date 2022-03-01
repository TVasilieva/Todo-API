import { Todo } from "models/todo";
import { RootState } from "state";

export const getTodos = (state: RootState): Todo[] => state.todos.todos;
export const getFilteredTodos = (state: RootState): Todo[] =>
  state.todos.filteredTodos;
export const getNumberCompletedTodos = (state: RootState): number =>
  state.todos.completedTodos;

export const getTodosIsLoading = (state: RootState): boolean =>
  state.todos.todosIsLoading;
