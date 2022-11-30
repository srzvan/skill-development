import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { rootSaga } from "sagas";
import userSlice from "slices/user-slice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
