import React, { FC } from "react";
import "./style.css";
import Props from "./types";
import { useAppDispatch, useAppSelector } from "state";
import { getTodos } from "state/todos/selectors";
//import { removeTodo } from "state/todos/actions";

import TodoItem from "pages/AppPage/components/TodoItem";
import ComponentListOfTodos from "./component";

import { Todo } from "models/todo";

const ListOfTodos: FC<Props> = ({ setShownTodos }) => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(getTodos);

  const handleRemoveTodo = (id: number) => (): void => {
    //dispatch(removeTodo(id));
  };

  const todoItems = todos.map((todo: Todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        setShownTodos={setShownTodos}
        handleRemoveTodo={handleRemoveTodo}
      />
    );
  });

  return (
    <ComponentListOfTodos
      todos={todos}
      todoItems={todoItems}
      setShownTodos={setShownTodos}
    />
  );
};

export default ListOfTodos;
