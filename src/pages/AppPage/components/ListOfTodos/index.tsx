import { FC, useEffect } from "react";
import "./style.css";
import Props from "./types";
import { useAppDispatch, useAppSelector } from "state";
import {
  getFilteredTodos,
  getTodos,
  getTodosIsLoading,
} from "state/todos/selectors";

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
    <div className="listOfTodos_container">
      {isLoading && <Loader />}
      {!!filteredTodos && filteredTodos.length ? (
        <div className="listOfTodos">{todoItems}</div>
      ) : (
        <div className="listOfEmptyTodos">Your list of todos is empty</div>
      )}
    </div>
  );
};

export default ListOfTodos;
