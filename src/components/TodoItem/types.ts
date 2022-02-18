import { Todo } from "models/todo";

export default interface Props {
  todo: Todo;
  setShownTodos: any;
}

export default interface ComponentProps {
  todo: Todo;
  handleRemoveTodo: any;
  setShownTodos: any;
}
