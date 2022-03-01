import { Todo } from "models/todo";

export interface TodosReducer {
  todos: Todo[];
  todosIsLoading: boolean;
  todosError: string | null;
  filteredTodos: Todo[];
}
