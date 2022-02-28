import { TodoActionsType } from "utils/ActionTypes";
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
  action: TodoActionsType
): TodosReducer => {
  switch (action.type) {
    case TodosActions.GET_TODOS_REQUEST:
      return {
        ...state,
        todosIsLoading: true,
        todos: [],
        todosError: null,
      };
    case TodosActions.GET_TODOS_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
        todos: action.payload,
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
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodosActions.REMOVE_TODO_RESPONSE:
      return {
        ...state,
        todosIsLoading: false,
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
        //completedTodos: action.payload.active ? state.completedTodos + 1 : state.completedTodos-1
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

    // case TodosActions.FILTER_TODOS:
    //   return {
    //     ...state,
    //     todos: state.todos.filter((todo) =>
    //       action.payload === "active"
    //         ? todo.active
    //         : action.payload === "completed"
    //         ? !todo.active
    //         : todo
    //     ),
    //   };
    // case TodosActions.CLEAR_COMPLETED_TODOS:
    //   return {
    //     ...state,
    //     todos: state.todos.map((todo) => todo.active = ),
    //   };
    // case TodosActions.CHANGE_TODO_STATUS:
    //   return {
    //     ...state,
    //     todos: state.todos?.map((todo, id) =>
    //       todo.id === id ? { ...todo, active: !todo.active } : todo
    //     ),
    //   };
    default:
      return state;
  }
};
