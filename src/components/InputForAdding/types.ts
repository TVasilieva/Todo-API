import { Todo } from "todos";

export default interface ComponentProps extends DispatchProps, StateProps {}

export interface StateProps {
  todos: Todo[];
}

export interface DispatchProps {
  addTodos: (todo: Todo) => void;
}
