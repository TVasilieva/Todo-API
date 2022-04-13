/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import "./style.scss";
import { useAppSelector } from "state";
import { getTodosIsLoading } from "state/todos/selectors";

import Loader from "components/Loader";
import { ComponentProps } from "./types";

const ListOfTodos: FC<ComponentProps> = ({ filteredTodos, todoItems }) => {
  const isLoading = useAppSelector(getTodosIsLoading);

  return (
    <div className="todo-list">
      {isLoading && <Loader />}
      {!!filteredTodos && filteredTodos.length ? (
        <div className="todo-list_active">{todoItems}</div>
      ) : (
        <div className="todo-list_empty">Your list of todos is empty</div>
      )}
    </div>
  );
};

export default ListOfTodos;
