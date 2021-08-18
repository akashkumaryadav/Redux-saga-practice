import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas.js";
import { reducer } from "./reducers.js";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
