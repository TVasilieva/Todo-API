import { takeLatest, put } from "@redux-saga/core/effects";
import AuthAPI, {
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
} from "api/auth";
import { AxiosResponse } from "axios";
import { Account } from "models/user";
import { ActionPayload } from "state";
import {
  UserActions,
  registrationResponse,
  registrationResponseError,
  loginResponse,
  loginResponseError,
} from "../actions";
import { LocalStorage } from "constants/localStorage";

function* registrationWorker(action: ActionPayload<RegistrationRequest>) {
  try {
    const response: AxiosResponse<RegistrationResponse> =
      yield AuthAPI.registration(action.payload as RegistrationRequest);

    const token = `Bearer ${response.data.token}`;
    localStorage.setItem(LocalStorage.Token, token);

    const account: Account = {
      id: response.data.user._id,
      email: response.data.user.email,
      name: response.data.user.name,
    };

    yield put(registrationResponse(account));
  } catch (error) {
    yield put(registrationResponseError((error as TypeError).message));
  }
}

function* loginWorker(action: ActionPayload<LoginRequest>) {
  try {
    const response: AxiosResponse<LoginResponse> = yield AuthAPI.login(
      action.payload as LoginRequest
    );

    const token = `Bearer ${response.data.token}`;
    localStorage.setItem(LocalStorage.Token, token);

    const account: Account = {
      id: response.data.user._id,
      email: response.data.user.email,
      name: response.data.user.name,
    };

    yield put(loginResponse(account));
  } catch (error) {
    yield put(loginResponseError((error as TypeError).message));
  }
}

export const userSagas = [
  takeLatest(UserActions.REGISTRATION_REQUEST, registrationWorker),
  takeLatest(UserActions.LOGIN_REQUEST, loginWorker),
];
