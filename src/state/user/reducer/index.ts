import { UserActions } from "state/user/actions";
import { UserActionsType } from "utils/ActionTypes";
import { UserReducer } from "./types";

const initialState: UserReducer = {
  account: null,
  account2: null,
  accountIsLoading: false,
  accountError: null,
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

    case UserActions.REGISTRATION_REQUEST:
      return {
        ...state,
        accountIsLoading: true,
        account2: null,
        accountError: null,
      };
    case UserActions.REGISTRATION_RESPONSE:
      return {
        ...state,
        accountIsLoading: false,
        account2: action.payload,
      };
    case UserActions.REGISTRATION_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    default:
      return state;
  }
};
