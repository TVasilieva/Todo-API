/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import TodoItem from "./index";
import { Todo } from "models/todo";
import {
  removeTodoRequest,
  TodosActions,
  updateTodoRequest,
} from "state/todos/actions";
import configureStore from "redux-mock-store";

describe("TodoItem", () => {
  const mockStore = configureStore();
  const store = mockStore();

  beforeEach(() => {
    store.clearActions();
  });

  const todos: Todo[] = [
    {
      id: "0",
      name: "test",
      completed: false,
    },
    {
      id: "1",
      name: "test1",
      completed: true,
    },
    {
      id: "2",
      name: "test2",
      completed: false,
    },
  ];

  const handleRemoveTodo = jest.fn();
  const handleCompleted = jest.fn();

  test("todo renders correctly todo-item", () => {
    render(
      wrappedWithRouterAndReduxComponent(
        <TodoItem
          todo={todos[0]}
          handleRemoveTodo={handleRemoveTodo}
          handleCompleted={handleCompleted}
        />
      )
    );
    expect(screen.getByText("test")).toBeInTheDocument();
    expect(screen.getAllByText("test")).toHaveLength(1);
  });

  test("updateTodoRequest", () => {
    const expectedAction = [
      {
        payload: {
          id: todos[0].id,
          completed: {
            completed: !todos[0].completed,
          },
        },
        type: TodosActions.UPDATE_TODO_REQUEST,
      },
    ];
    store.dispatch(
      updateTodoRequest({
        id: todos[0].id,
        completed: {
          completed: !todos[0].completed,
        },
      })
    );
    expect(store.getActions()).toEqual(expectedAction);
  });

  test("removeTodoRequest", () => {
    const expectedAction = [
      {
        payload: {
          id: todos[0].id,
          name: todos[0].name,
          completed: todos[0].completed,
        },
        type: TodosActions.REMOVE_TODO_REQUEST,
      },
    ];
    store.dispatch(
      removeTodoRequest({
        id: todos[0].id,
        name: todos[0].name,
        completed: todos[0].completed,
      })
    );
    expect(store.getActions()).toEqual(expectedAction);
  });
});
