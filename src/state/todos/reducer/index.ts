import { ActionsType } from "utils/actionCreator";
import { TodosActions } from "state/todos/actions";
import { TodosReducer } from "./types";

const initialState: TodosReducer = {
  todos: [],
  completedTodos: 0,
  todosIsLoading: true,
  todosError: null,
  filteredTodos: [],
};

export const todosReducer = (
  state = initialState,
  action: ActionsType
): TodosReducer => {
  switch (action.type) {
    case TodosActions.GET_TODOS_REQUEST:
      return {
        ...state,
        todosIsLoading: true,
        todos: [],
        filteredTodos: [],
        todosError: null,
      };
    case TodosActions.GET_TODOS_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
        todos: action.payload,
        filteredTodos: action.payload,
        completedTodos: [
          ...action.payload.filter((todo: any) => todo.completed),
        ].length,
      };
    case TodosActions.GET_TODOS_RESPONSE_ERROR:
      return {
        ...state,
        todosIsLoading: false,
        todosError: action.payload,
      };
    case TodosActions.ADD_TODO_REQUEST:
      return {
        ...state,
        todosIsLoading: true,
        todosError: null,
      };
    case TodosActions.ADD_TODO_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
        todos: [...state.todos, action.payload],
        filteredTodos: [...state.filteredTodos, action.payload],
      };
    case TodosActions.ADD_TODO_RESPONSE_ERROR:
      return {
        ...state,
        todosIsLoading: false,
        todosError: action.payload,
      };

    case TodosActions.REMOVE_TODO_REQUEST:
      return {
        ...state,
        todosIsLoading: true,
        todosError: null,
      };
    case TodosActions.REMOVE_TODO_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        filteredTodos: state.filteredTodos.filter(
          (todo) => todo.id !== action.payload.id
        ),
        completedTodos:
          action.payload.completed === true
            ? state.completedTodos - 1
            : state.completedTodos,
      };
    case TodosActions.REMOVE_TODO_RESPONSE_ERROR:
      return {
        ...state,
        todosIsLoading: false,
        todosError: action.payload,
      };

    case TodosActions.UPDATE_TODO_REQUEST:
      return {
        ...state,
        todosIsLoading: true,
        todosError: null,
      };
    case TodosActions.UPDATE_TODO_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        filteredTodos: state.filteredTodos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        completedTodos: action.payload.completed
          ? state.completedTodos + 1
          : state.completedTodos - 1,
      };
    case TodosActions.UPDATE_TODO_RESPONSE_ERROR:
      return {
        ...state,
        todosIsLoading: false,
        todosError: action.payload,
      };

    case TodosActions.GET_COMPLETED_TODOS_REQUEST:
      return {
        ...state,
        todosIsLoading: true,
        todosError: null,
      };
    case TodosActions.GET_COMPLETED_TODOS_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
        completedTodos: action.payload,
      };
    case TodosActions.GET_COMPLETED_TODOS_RESPONSE_ERROR:
      return {
        ...state,
        todosIsLoading: false,
        todosError: action.payload,
      };

    case TodosActions.FILTER_TODOS:
      return {
        ...state,
        filteredTodos: state.todos.filter((todo) =>
          action.payload === "completed"
            ? todo.completed
            : action.payload === "active"
            ? !todo.completed
            : todo
        ),
      };
    default:
      return state;
  }
};
