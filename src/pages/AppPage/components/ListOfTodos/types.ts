import { Todo } from "models/todo";

export default interface Props {}

export default interface ComponentProps {
  todos?: Todo[];
  todoItems?: JSX.Element[];
}
