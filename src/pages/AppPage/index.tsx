/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FC, useEffect, useState } from "react";

import Header from "components/Header";
import Portal from "components/Portal";

import Textarea from "components/Textarea";
import ListOfTodos from "./components/ListOfTodos";
import Footer from "./components/Footer";
import Button from "components/Button";
import AddIcon from "@mui/icons-material/Add";

import "./style.scss";
import { Filter } from "./types";

import { useAppDispatch, useAppSelector } from "state";
import {
  addTodoRequest,
  getNumberCompletedTodosRequest,
  getTodosRequest,
  removeTodoRequest,
  updateTodoRequest,
} from "state/todos/actions";
import { getUserRequest } from "state/user/actions";
import { getIsLoading, getUsername } from "state/user/selectors";
import { getFilteredTodos, getTodos } from "state/todos/selectors";
import { Todo } from "models/todo";
import TodoItem from "./components/TodoItem";
import Greeting from "components/Greeting";

const AppPage: FC = () => {
  const dispatch = useAppDispatch();

  const username = useAppSelector(getUsername);
  const filteredTodos = useAppSelector(getFilteredTodos);
  const todos = useAppSelector(getTodos);
  const isLoading = useAppSelector(getIsLoading);

  const [filter, setFilter] = useState<Filter>("all");
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (todos && !isLoading) {
      dispatch(getTodosRequest());
      dispatch(getUserRequest());
      dispatch(getNumberCompletedTodosRequest());
    }
  }, []);

  const handleChangeFilter = (filter: Filter) => (): void => {
    setFilter(filter);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = (): void => {
    dispatch(
      addTodoRequest({
        description: value[0].toUpperCase() + value.slice(1),
      })
    );
    setValue("");
  };

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

  const disabled = !value;
  const placeholder = "Currently typing...";

  return (
    <>
      <div data-testid="app-link">
        <Header />
        <Portal>
          <div className="user-page">
            <Greeting username={username} />
            <Textarea
              Button={
                <Button
                  Icon={<AddIcon />}
                  classes="add-btn"
                  size="medium"
                  color="secondary"
                  aria-label="add"
                  disabled={disabled}
                  onClick={handleAddTodo}
                />
              }
              value={value}
              placeholder={placeholder}
              disabled={disabled}
              handleChange={handleChange}
            />
            <ListOfTodos todoItems={todoItems} filteredTodos={filteredTodos} />
            <Footer filter={filter} onChangeFilter={handleChangeFilter} />
          </div>
        </Portal>
      </div>
    </>
  );
};

export default AppPage;
