import { SET_TODOS, ADD_TODO, REMOVE_TODO } from "../actions";
import { TodosReducer } from "./types";

const initialState: TodosReducer = {
  todos: [],
};

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
