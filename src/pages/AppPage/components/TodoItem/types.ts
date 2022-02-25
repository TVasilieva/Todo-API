import { Todo } from "models/todo";

export default interface Props {
  todo: Todo;
}

export default interface ComponentProps {
  todo: Todo;
  handleRemoveTodo: any;
  handleCompleted?: any;
}
