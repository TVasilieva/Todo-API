import { Todo } from "models/todo";

export interface TodosReducer {
  todos: Todo[];
  completedTodos: number;
  todosIsLoading: boolean;
  todosError: string | null;
  filteredTodos: Todo[];
}
