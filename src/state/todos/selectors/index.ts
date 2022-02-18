import { RootState } from "state";

export const getTodos = (state: RootState) => state.todos.todos;
