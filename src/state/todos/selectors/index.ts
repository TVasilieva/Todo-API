import { Todo } from "models/todo";
import { RootState } from "state";

export const getTodos = (state: RootState): Todo[] => state.todos.todos;
export const getNumberCompletedTodos = (state: RootState): number =>
  state.todos.completedTodos;
