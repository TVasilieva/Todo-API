import { FC, useEffect } from "react";
import "./style.scss";
import Props from "./types";
import { useAppDispatch, useAppSelector } from "state";
import { getFilteredTodos, getTodosIsLoading } from "state/todos/selectors";

import TodoItem from "pages/AppPage/components/TodoItem";
import Loader from "components/Loader";

import { Todo } from "models/todo";
import {
  getNumberCompletedTodosRequest,
  removeTodoRequest,
} from "state/todos/actions";

const ListOfTodos: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const filteredTodos = useAppSelector(getFilteredTodos);
  const isLoading = useAppSelector(getTodosIsLoading);

  useEffect(() => {
    dispatch(getNumberCompletedTodosRequest());
  }, [filteredTodos.length]);

  const handleRemoveTodo = (id: string) => (): void => {
    dispatch(removeTodoRequest(id));
  };

  const todoItems = filteredTodos.map((todo: Todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
    );
  });

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
