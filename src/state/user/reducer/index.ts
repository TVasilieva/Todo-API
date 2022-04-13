import { UserActions } from "state/user/actions";
import { ActionsType } from "utils/actionCreator";
import { UserReducer } from "./types";

const initialState: UserReducer = {
  account: null,
  accountIsLoading: false,
  accountError: null,
  username: "",
  avatar: "",
};

export const userReducer = (
  state = initialState,
  action: ActionsType
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
        username: action.payload.name,
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
        username: action.payload.name,
      };
    case UserActions.LOGIN_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    case UserActions.LOGOUT_REQUEST:
      return initialState;
    case UserActions.LOGOUT_RESPONSE:
      return initialState;
    case UserActions.LOGOUT_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
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
        account: action.payload,
        username: action.payload.name,
      };
    case UserActions.GET_USER_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    case UserActions.EDIT_USER_REQUEST:
      return {
        ...state,
        accountIsLoading: true,
        accountError: null,
      };
    case UserActions.EDIT_USER_RESPONSE:
      return {
        ...state,
        account: action.payload,
        username: action.payload.name,
        accountIsLoading: false,
        accountError: null,
      };
    case UserActions.EDIT_USER_RESPONSE_ERROR:
      return {
        ...state,
        accountIsLoading: false,
        accountError: action.payload,
      };
    default:
      return state;
  }
};
