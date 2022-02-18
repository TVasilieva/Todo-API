import { TodosActions } from "../actions";
import { TodosReducer } from "./types";

const initialState: TodosReducer = {
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: any
): TodosReducer => {
  switch (action.type) {
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
    default:
      return state;
  }
};
