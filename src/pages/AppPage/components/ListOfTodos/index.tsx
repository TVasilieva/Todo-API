/* eslint-disable react-hooks/exhaustive-deps */
import { FC } from "react";
import "./style.scss";
import { useAppDispatch, useAppSelector } from "state";
import { getFilteredTodos, getTodosIsLoading } from "state/todos/selectors";

import TodoItem from "pages/AppPage/components/TodoItem";
import Loader from "components/Loader";

import { Todo } from "models/todo";
import { removeTodoRequest, updateTodoRequest } from "state/todos/actions";

const ListOfTodos: FC = () => {
  const dispatch = useAppDispatch();

  const filteredTodos = useAppSelector(getFilteredTodos);
  const isLoading = useAppSelector(getTodosIsLoading);

  const handleRemoveTodo = (todo: Todo) => (): void => {
    dispatch(removeTodoRequest(todo));
  };

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

  const todoItems = filteredTodos.map((todo: Todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleRemoveTodo={handleRemoveTodo}
        handleCompleted={handleCompleted}
      />
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
