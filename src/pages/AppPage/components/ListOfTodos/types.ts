import { Todo } from "models/todo";

export default interface Props {
  setShownTodos: any;
}

export default interface ComponentProps {
  todos?: Todo[];
  todoItems?: JSX.Element[];
}
