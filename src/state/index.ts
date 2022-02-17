import { combineReducers } from "redux";

import { todosReducer } from "./todos/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
});
