import React, { FC } from "react";
import "./style.css";
import Props from "./types";
import { useAppDispatch, useAppSelector } from "state";
import { getFilteredTodos } from "state/todos/selectors";

import TodoItem from "pages/AppPage/components/TodoItem";
import ComponentListOfTodos from "./component";

import { Todo } from "models/todo";
import { removeTodoRequest } from "state/todos/actions";

const ListOfTodos: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const filteredTodos = useAppSelector(getFilteredTodos);

  const handleRemoveTodo = (id: string) => (): void => {
    dispatch(removeTodoRequest(id));
  };

  const todoItems = filteredTodos.map((todo: Todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} handleRemoveTodo={handleRemoveTodo} />
    );
  });

  return <ComponentListOfTodos todos={filteredTodos} todoItems={todoItems} />;
};

export default ListOfTodos;
