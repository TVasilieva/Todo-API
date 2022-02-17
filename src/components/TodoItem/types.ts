import { Todo } from "../../todos";

export default interface ComponentProps extends DispatchProps {
  todo: Todo;
  setShownTodos: any;
  todos: Todo[];
}

export interface DispatchProps {
  removeTodo: (id: number) => void;
}
