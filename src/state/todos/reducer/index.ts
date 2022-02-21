import { TodoActionsType } from "utils/ActionTypes";
import { TodosActions } from "state/todos/actions";
import { TodosReducer } from "./types";

const initialState: TodosReducer = {
  todos: [],
  filteredTodos: [],
};

export const todosReducer = (
  state = initialState,
  action: TodoActionsType
): TodosReducer => {
  switch (action.type) {
    case TodosActions.CREATE_TODO_LIST:
      return {
        ...state,
        todos: action.payload,
      };
    case TodosActions.SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case TodosActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TodosActions.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TodosActions.FILTER_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) =>
          action.payload === "active"
            ? todo.active
            : action.payload === "completed"
            ? !todo.active
            : todo
        ),
      };
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
