import { Todo } from "../../todos";

export default interface ComponentProps {
  todo: Todo;
  setShownTodos: any;
  todos: Todo[];
}
