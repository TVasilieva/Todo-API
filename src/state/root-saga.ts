import { all } from "redux-saga/effects";
import { todosSagas } from "./todos/sagas";
import { userSagas } from "./user/sagas";

export function* rootSaga() {
  yield all([...userSagas, ...todosSagas]);
}
