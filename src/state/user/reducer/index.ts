import { UserActions } from "state/user/actions";
import { UserActionsType } from "utils/ActionTypes";
import { UserReducer } from "./types";

const initialState: UserReducer = {
  account: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionsType
): UserReducer => {
  switch (action.type) {
    case UserActions.LOGIN:
      return {
        ...state,
        account: action.payload,
      };
    case UserActions.LOGOUT:
      return {
        ...state,
        account: null,
      };
    default:
      return state;
  }
};
