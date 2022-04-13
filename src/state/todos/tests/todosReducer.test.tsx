import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  addTodoResponse,
  filterTodos,
  getNumberCompletedTodosResponse,
  getTodosResponse,
  removeTodoResponse,
  updateTodoResponse,
} from "state/todos/actions";
import { TodosReducer } from "state/todos/reducer/types";
import { todosReducer } from "state/todos/reducer";

import { wrappedWithRouterAndReduxComponent } from "utils/wrapComponent";
import AppPage from "pages/AppPage";
import { Todo } from "models/todo";

describe("Reducer", () => {
  test("should return the initial state", () => {
    expect(
      todosReducer(undefined, {
        type: "",
      })
    ).toEqual({
      todos: [],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [],
    });
  });
});

describe("Get Todos Action", () => {
  test("should handle a todo being got", () => {
    const initialState: TodosReducer = {
      todos: [],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [],
    };

    const todoMock: Todo[] = [
      { completed: true, id: "0", name: "Drink coffee" },
      { completed: false, id: "1", name: "Eat chocolate salty balls" },
      { completed: false, id: "2", name: "Watch cartoons" },
    ];

    expect(todosReducer(initialState, getTodosResponse(todoMock))).toEqual({
      completedTodos: 1,
      filteredTodos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
        { completed: false, id: "2", name: "Watch cartoons" },
      ],
      todos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
        { completed: false, id: "2", name: "Watch cartoons" },
      ],
      todosError: null,
      todosIsLoading: false,
    });
  });
});

describe("Add Todo Action", () => {
  test("should handle a todo being added to an empty list", () => {
    const previousState: TodosReducer = {
      todos: [],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [],
    };
    expect(
      todosReducer(
        previousState,
        addTodoResponse({
          id: "0",
          name: "Drink coffee",
          completed: false,
        })
      )
    ).toEqual({
      completedTodos: 0,
      filteredTodos: [{ completed: false, id: "0", name: "Drink coffee" }],
      todos: [{ completed: false, id: "0", name: "Drink coffee" }],
      todosError: null,
      todosIsLoading: false,
    });
  });

  test("should handle a todo being added to an existing list", () => {
    const previousState: TodosReducer = {
      todos: [{ completed: false, id: "0", name: "Drink coffee" }],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [{ completed: false, id: "0", name: "Drink coffee" }],
    };
    expect(
      todosReducer(
        previousState,
        addTodoResponse({
          id: "1",
          name: "Eat chocolate salty balls",
          completed: false,
        })
      )
    ).toEqual({
      completedTodos: 0,
      filteredTodos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      todos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      todosError: null,
      todosIsLoading: false,
    });
  });
});

describe("Remove Todo Action", () => {
  test("should handle a todo being removed", () => {
    const previousState: TodosReducer = {
      todos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
    };
    expect(
      todosReducer(
        previousState,
        removeTodoResponse({ completed: false, id: "0", name: "Drink coffee" })
      )
    ).toEqual({
      completedTodos: 0,
      filteredTodos: [
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      todos: [{ completed: false, id: "1", name: "Eat chocolate salty balls" }],
      todosError: null,
      todosIsLoading: false,
    });
  });

  test("should handle a todo being removed from completed todos", () => {
    const previousState: TodosReducer = {
      todos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
        { completed: true, id: "2", name: "Respect my authority!" },
      ],
      completedTodos: 2,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
        { completed: true, id: "2", name: "Respect my authority!" },
      ],
    };
    expect(
      todosReducer(
        previousState,
        removeTodoResponse({ completed: true, id: "0", name: "Drink coffee" })
      )
    ).toEqual({
      completedTodos: 1,
      filteredTodos: [
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
        { completed: true, id: "2", name: "Respect my authority!" },
      ],
      todos: [
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
        { completed: true, id: "2", name: "Respect my authority!" },
      ],
      todosError: null,
      todosIsLoading: false,
    });
  });
});

describe("Update Todo Action", () => {
  test("should handle a todo being updated", () => {
    const previousState: TodosReducer = {
      todos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
    };
    expect(
      todosReducer(
        previousState,
        updateTodoResponse({ completed: true, id: "0", name: "Drink coffee" })
      )
    ).toEqual({
      completedTodos: 1,
      filteredTodos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      todos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      todosError: null,
      todosIsLoading: false,
    });
  });
});

describe("Get completed todos Action", () => {
  test("should handle a number of completed todos", () => {
    const previousState: TodosReducer = {
      todos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: false, id: "1", name: "Eat chocolate salty balls" },
      ],
    };

    render(wrappedWithRouterAndReduxComponent(<AppPage />));

    const currentState = {
      ...previousState,
      todos: [
        { ...previousState.todos[0], completed: true },
        { ...previousState.todos[0], completed: true },
      ],
      filteredTodos: [
        { ...previousState.filteredTodos[0], completed: true },
        { ...previousState.filteredTodos[0], completed: true },
      ],
    };

    expect(
      todosReducer(
        currentState,
        getNumberCompletedTodosResponse(
          currentState.todos.filter((todo) => todo.completed).length
        )
      )
    ).toEqual({
      completedTodos: 2,
      filteredTodos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: true, id: "0", name: "Drink coffee" },
      ],
      todos: [
        { completed: true, id: "0", name: "Drink coffee" },
        { completed: true, id: "0", name: "Drink coffee" },
      ],
      todosError: null,
      todosIsLoading: false,
    });
  });
});

describe("Filter todos Action", () => {
  test("show filtered todos (active)", () => {
    const previousState: TodosReducer = {
      todos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: true, id: "1", name: "Eat chocolate salty balls" },
      ],
      completedTodos: 0,
      todosIsLoading: true,
      todosError: null,
      filteredTodos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: true, id: "1", name: "Eat chocolate salty balls" },
      ],
    };

    render(wrappedWithRouterAndReduxComponent(<AppPage />));

    expect(todosReducer(previousState, filterTodos("active"))).toEqual({
      completedTodos: 0,
      filteredTodos: [{ completed: false, id: "0", name: "Drink coffee" }],
      todos: [
        { completed: false, id: "0", name: "Drink coffee" },
        { completed: true, id: "1", name: "Eat chocolate salty balls" },
      ],
      todosError: null,
      todosIsLoading: true,
    });
  });
});
