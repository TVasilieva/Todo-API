import { ChangeEvent, FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
} from "state/todos/actions";
import { getUserRequest, logoutRequest } from "state/user/actions";
import { getIsLoading, getUsername } from "state/user/selectors";
import { getTodos } from "state/todos/selectors";
import { Routes } from "constants/routes";

const AppPage: FC = () => {
  const dispatch = useAppDispatch();

  const username = useAppSelector(getUsername);
  const todos = useAppSelector(getTodos);
  const isLoading = useAppSelector(getIsLoading);

  const navigate = useNavigate();

  const [filter, setFilter] = useState<Filter>("all");
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (todos && !isLoading) {
      dispatch(getTodosRequest());
      dispatch(getUserRequest());
      dispatch(getNumberCompletedTodosRequest());
    }
  }, []);

  const handleLogout = (): void => {
    dispatch(logoutRequest());
    navigate(Routes.Home);
  };

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

  const disabled = !value;
  const placeholder = "Currently typing...";

  return (
    <div className="user-page">
      <h1 className="user-page__title">todo</h1>
      {username && (
        <h2 className="user-page__greeting">Welcome, {username}!</h2>
      )}
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
      <ListOfTodos />
      <Footer
        filter={filter}
        onChangeFilter={handleChangeFilter}
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default AppPage;
