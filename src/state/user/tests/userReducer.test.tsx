import "@testing-library/jest-dom/extend-expect";
import { UserReducer } from "state/user/reducer/types";
import { userReducer } from "state/user/reducer";

import {
  getUserResponse,
  loginResponse,
  logoutResponse,
  registrationResponse,
  editProfileResponse,
  UserActions,
} from "../actions";
import { Account } from "models/user";
import { registrationWorker } from "../sagas";

describe("User Reducer", () => {
  test("should return the initial state", () => {
    expect(
      userReducer(undefined, {
        type: "",
      })
    ).toEqual({
      account: null,
      accountIsLoading: false,
      accountError: null,
      username: "",
      avatar: "",
    });
  });
});

describe("Login User Action", () => {
  test("should login user", () => {
    const initialState: UserReducer = {
      account: null,
      accountIsLoading: false,
      accountError: null,
      username: "",
      avatar: "",
    };

    const user: Account = {
      id: "11111",
      name: "Eric Cartman",
      email: "eric@mail.ru",
    };

    expect(userReducer(initialState, loginResponse(user))).toEqual({
      account: {
        id: "11111",
        name: "Eric Cartman",
        email: "eric@mail.ru",
      },
      accountIsLoading: false,
      accountError: null,
      username: "Eric Cartman",
      avatar: "",
    });
  });
});

describe("Registration User Action", () => {
  test("should registrate user", () => {
    const initialState: UserReducer = {
      account: null,
      accountIsLoading: false,
      accountError: null,
      username: "",
      avatar: "",
    };

    const user: Account = {
      id: "11111",
      name: "Eric Cartman",
      email: "eric@mail.ru",
    };

    expect(userReducer(initialState, registrationResponse(user))).toEqual({
      account: {
        id: "11111",
        name: "Eric Cartman",
        email: "eric@mail.ru",
      },
      accountIsLoading: false,
      accountError: null,
      username: "Eric Cartman",
      avatar: "",
    });
  });
});

describe("Logout User Action", () => {
  test("should logout user", () => {
    const initialState: UserReducer = {
      account: {
        id: "11111",
        name: "Eric Cartman",
        email: "eric@mail.ru",
      },
      accountIsLoading: false,
      accountError: null,
      username: "Eric Cartman",
      avatar: "",
    };

    expect(userReducer(initialState, logoutResponse())).toEqual({
      account: null,
      accountIsLoading: false,
      accountError: null,
      username: "",
      avatar: "",
    });
  });
});

describe("Get User Action", () => {
  test("should get user", () => {
    const initialState: UserReducer = {
      account: null,
      accountIsLoading: false,
      accountError: null,
      username: "",
      avatar: "",
    };

    const users: Account[] = [
      {
        id: "11111",
        name: "Eric Cartman",
        email: "eric@mail.ru",
      },
      {
        id: "22222",
        name: "Stan Marsh",
        email: "stan@mail.ru",
      },
      {
        id: "33333",
        name: "Kenny McCormick",
        email: "kenny@mail.ru",
      },
    ];

    expect(userReducer(initialState, getUserResponse(users[2]))).toEqual({
      account: {
        id: "33333",
        name: "Kenny McCormick",
        email: "kenny@mail.ru",
      },
      accountIsLoading: false,
      accountError: null,
      username: "Kenny McCormick",
      avatar: "",
    });
  });
});

describe("Edit User Action", () => {
  test("should edit user", () => {
    const initialState: UserReducer = {
      account: {
        id: "33333",
        name: "Kenny McCormick",
        email: "kenny@mail.ru",
      },
      accountIsLoading: false,
      accountError: null,
      username: "Kenny McCormick",
      avatar: "",
    };

    const user: Account = {
      id: "11111",
      name: "Eric Cartman",
      email: "eric@mail.ru",
    };

    expect(userReducer(initialState, editProfileResponse(user))).toEqual({
      account: {
        id: "11111",
        name: "Eric Cartman",
        email: "eric@mail.ru",
      },
      accountIsLoading: false,
      accountError: null,
      username: "Eric Cartman",
      avatar: "",
    });
  });
});
