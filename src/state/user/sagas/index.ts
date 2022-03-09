import { takeLatest, put } from "@redux-saga/core/effects";
import AuthAPI from "api/auth";
import {
  EditProfileRequest,
  EditProfileResponse,
  GetUserResponse,
  LoginRequest,
  LoginResponse,
  RegistrationRequest,
  RegistrationResponse,
} from "api/types";
import { AxiosResponse } from "axios";
import { Account } from "models/user";
import { ActionPayload } from "state";
import {
  UserActions,
  registrationResponse,
  registrationResponseError,
  loginResponse,
  loginResponseError,
  getUserResponse,
  getUserResponseError,
  logoutResponse,
  logoutResponseError,
  editProfileResponse,
  editProfileResponseError,
} from "../../user/actions";
import { createToken, removeToken, setToken } from "utils/token";

function* registrationWorker(action: ActionPayload<RegistrationRequest>) {
  try {
    const response: AxiosResponse<RegistrationResponse> =
      yield AuthAPI.registration(action.payload as RegistrationRequest);

    const token = `Bearer ${response.data.token}`;
    setToken(token);

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

    const token = createToken(response.data.token);
    setToken(token);

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

function* logoutWorker() {
  try {
    removeToken();
    yield put(logoutResponse());
  } catch (error) {
    yield put(logoutResponseError((error as TypeError).message));
  }
}

function* getWorkerByToken() {
  try {
    const response: AxiosResponse<GetUserResponse> = yield AuthAPI.getByToken();

    const username: string = response.data.name;

    yield put(getUserResponse(username));
  } catch (error) {
    yield put(getUserResponseError((error as TypeError).message));
  }
}

function* editWorker(action: ActionPayload<EditProfileRequest>) {
  try {
    const response: AxiosResponse<EditProfileResponse> =
      yield AuthAPI.editProfile(action.payload as EditProfileRequest);

    const account: Account = {
      id: response.data._id,
      email: response.data.email,
      name: response.data.name,
    };

    yield put(editProfileResponse(account));
  } catch (error) {
    yield put(editProfileResponseError((error as TypeError).message));
  }
}

export const userSagas = [
  takeLatest(UserActions.REGISTRATION_REQUEST, registrationWorker),
  takeLatest(UserActions.LOGIN_REQUEST, loginWorker),
  takeLatest(UserActions.GET_USER_REQUEST, getWorkerByToken),
  takeLatest(UserActions.LOGOUT_REQUEST, logoutWorker),
  takeLatest(UserActions.EDIT_USER_REQUEST, editWorker),
];
