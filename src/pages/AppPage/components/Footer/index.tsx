import { FC, useEffect } from "react";
import "./style.scss";
import Props from "./types";

import { Filter } from "pages/AppPage/types";
import { useAppDispatch, useAppSelector } from "state";
import {
  getNumberCompletedTodos,
  getTodos,
  getTodosIsLoading,
} from "state/todos/selectors";
import { filterTodos } from "state/todos/actions";

const Footer: FC<Props> = ({ filter, onChangeFilter }) => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector(getTodos);
  const isLoading = useAppSelector(getTodosIsLoading);
  const completedTodosLength = useAppSelector(getNumberCompletedTodos);

  useEffect(() => {
    dispatch(filterTodos(filter));
  }, [filter, completedTodosLength]);

  const activeTodosLength = todos.length - completedTodosLength;

  const isActive = (word: Filter) => {
    return filter === word
      ? "actions-container__right-side_active"
      : "actions-container__right-side";
  };

  return (
    <>
      <div className="actions-container">
        <div className="actions-container__left-side">
          <div>
            {isLoading && !completedTodosLength ? "   " : activeTodosLength}{" "}
            items left
          </div>
        </div>
        <div className="actions-container__right-side">
          <div>
            <span className={isActive("all")} onClick={onChangeFilter("all")}>
              All
            </span>
          </div>
          <div>
            <span
              className={isActive("active")}
              onClick={onChangeFilter("active")}
            >
              Active
            </span>
          </div>
          <div>
            <span
              className={isActive("completed")}
              onClick={onChangeFilter("completed")}
            >
              Completed
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
