import { Todo } from "models/todo";

export interface ComponentProps {
  todoItems: JSX.Element[];
  filteredTodos: Todo[];
}
