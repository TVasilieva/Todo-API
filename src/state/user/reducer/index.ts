import { LOGIN } from "../actions";
import { UserReducer } from "./types";

const initialState: UserReducer = {
  user: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
