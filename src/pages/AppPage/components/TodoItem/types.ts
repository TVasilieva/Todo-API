import { Todo } from "models/todo";

export default interface Props {
  todo: Todo;
}

export default interface ComponentProps {
  todo: Todo;
  handleRemoveTodo: (todo: Todo) => () => void;
  handleCompleted: (id: string, completed: boolean) => () => void;
}
