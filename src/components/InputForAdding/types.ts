import { Todo } from "todos";

export default interface ComponentProps extends DispatchProps {}

export interface DispatchProps {
  addTodo: (todo: Todo) => void;
}
