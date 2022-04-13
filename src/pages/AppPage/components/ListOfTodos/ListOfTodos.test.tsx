/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";

import ListOfTodos from "./index";
import { Todo } from "models/todo";
import TodoItem from "../TodoItem";

describe("ListOfTodos", () => {
  const filteredTodos: Todo[] = [
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
  ];

  test("todo renders correctly todo-item", async () => {
    const handleRemoveTodo = jest.fn();
    const handleCompleted = jest.fn();

    const todoItems = filteredTodos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleRemoveTodo={handleRemoveTodo}
          handleCompleted={handleCompleted}
        />
      );
    });

    render(
      wrappedWithRouterAndReduxComponent(
        <ListOfTodos todoItems={todoItems} filteredTodos={filteredTodos} />
      )
    );

    await screen.findByText("test1");
    expect(screen.getAllByText(/test/i)).toHaveLength(2);
  });
});
