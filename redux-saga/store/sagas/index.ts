import { all } from "redux-saga/effects";

import { watchUser } from "sagas/user-saga";

export function* rootSaga() {
  yield all([watchUser()]);
}
