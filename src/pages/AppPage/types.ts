import { Todo } from "todos";

export default interface ComponentProps extends DispatchProps, StateProps {}

export interface StateProps {
  todos: Todo[];
}

export interface DispatchProps {
  setTodos: (todos: Todo[]) => void;
}

export type Filter = "clear" | "all" | "active" | "completed";
