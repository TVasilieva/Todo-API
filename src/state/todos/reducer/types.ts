import { Todo } from "models/todo";

export interface TodosReducer {
  todos: Todo[];
  filteredTodos: Todo[];
}
