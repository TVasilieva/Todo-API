import { Todo } from "todos";
import { User } from "user";

export default interface ComponentProps extends DispatchProps, StateProps {}

export interface StateProps {
  todos: Todo[];
  user: User;
}

export interface DispatchProps {
  setTodos: (todos: Todo[]) => void;
}

export type Filter = "clear" | "all" | "active" | "completed";
