import { takeLatest, put, delay } from "redux-saga/effects";

import { asyncSetUser, setUser } from "slices/user-slice";

export function* watchUser() {
  yield takeLatest(asyncSetUser.type, userSaga);
}

export function* userSaga() {
  yield delay(3000);
  yield put(setUser({ username: "async-user", id: 3 }));
}
