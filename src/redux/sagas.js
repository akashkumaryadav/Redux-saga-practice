import { all } from "redux-saga/effects";

export function* helloSaga() {
  console.log("Hello Sagas!");
  yield "hello";
}

export default function* rootSaga() {
  yield all([helloSaga()]);
}
