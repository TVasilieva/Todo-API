import { UserActions } from "state/user/actions";
import { UserActionsType } from "utils/ActionTypes";
import { UserReducer } from "./types";

const initialState: UserReducer = {
  account: null,
  accountIsLoading: false,
  accountError: null,
  username: "",
};

export const userReducer = (
  state = initialState,
  action: UserActionsType
): UserReducer => {
  switch (action.type) {
    case UserActions.REGISTRATION_REQUEST:
      return {
        ...state,
        accountIsLoading: true,
        account: null,
        accountError: null,
      };
    case UserActions.REGISTRATION_RESPONSE:
      return {
        ...state,
        accountIsLoading: false,
        account: action.payload,
      };
    case UserActions.REGISTRATION_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    case UserActions.LOGIN_REQUEST:
      return {
        ...state,
        accountIsLoading: true,
        account: null,
        accountError: null,
      };
    case UserActions.LOGIN_RESPONSE:
      return {
        ...state,
        accountIsLoading: false,
        account: action.payload,
      };
    case UserActions.LOGIN_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    case UserActions.LOGOUT:
      return {
        ...state,
        account: null,
      };
    case UserActions.GET_USER_REQUEST:
      return {
        ...state,
        accountIsLoading: true,
        username: "",
        accountError: null,
      };
    case UserActions.GET_USER_RESPONSE:
      return {
        ...state,
        accountIsLoading: false,
        username: action.payload,
      };
    case UserActions.GET_USER_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    default:
      return state;
  }
};
