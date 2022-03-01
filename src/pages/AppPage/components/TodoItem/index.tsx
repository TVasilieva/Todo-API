import { FC } from "react";
import "./style.css";
import Props from "./types";

import ComponentTodoItem from "./component";
import { useAppDispatch } from "state";
import { updateTodoRequest } from "state/todos/actions";

const TodoItem: FC<Props> = ({ todo, handleRemoveTodo }) => {
  const dispatch = useAppDispatch();

  const handleCompleted = (id: string, completed: boolean) => (): void => {
    dispatch(
      updateTodoRequest({
        id,
        completed: {
          completed: !completed,
        },
      })
    );
  };

  return (
    <ComponentTodoItem
      todo={todo}
      handleRemoveTodo={handleRemoveTodo}
      handleCompleted={handleCompleted}
    />
  );
};

export default TodoItem;
