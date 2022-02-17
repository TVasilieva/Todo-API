import React, { FC, useEffect, useState } from "react";
import InputForAdding from "../../components/InputForAdding";
import ListOfTodos from "../../components/ListOfTodos";
import ShownItems from "./components/ShownItems";

import { Todo, todos } from "../../todos";
import ComponentProps, { Filter, DispatchProps, StateProps } from "./types";
import "./style.css";

import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setTodos } from "../../state/todos/actions";

const AppPage: FC<ComponentProps> = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState<Filter>("all");
  const [shownTodos, setShownTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const todosLS = localStorage.getItem("todos") || "[]";
    setTodos(JSON.parse(todosLS));
  }, []);

  useEffect(() => {
    if (filter === "active") {
      return setShownTodos(todos.filter((todo) => todo.active));
    }

    if (filter === "completed") {
      return setShownTodos(todos.filter((todo) => !todo.active));
    }

    if (filter === "clear") {
      setFilter("all");
      for (let i in todos) {
        todos[i].active = true;
      }
      return setShownTodos(todos);
    }

    return setShownTodos(todos);
  }, [filter, todos]);

  const handleChangeFilter = (filter: Filter) => (): void => {
    setFilter(filter);
  };

  const handleComplete = (id: number) => (): void => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, active: !todo.active } : todo
    );
    setTodos(newTodos);
  };

  const activeTodoLength = shownTodos.filter((todo) => todo.active).length;

  return (
    <div className="user-page">
      <h1>todo</h1>
      <InputForAdding />
      <ListOfTodos todos={shownTodos} setShownTodos={handleComplete} />
      <ShownItems
        filter={filter}
        activeTodoLength={activeTodoLength}
        onChangeFilter={handleChangeFilter}
      />
    </div>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setTodos: (todos: Todo[]) => {
    dispatch(setTodos(todos));
  },
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(AppPage);
