import { all } from "redux-saga/effects";
import watcherSaga from "./handlers/sendRequest";

export default function* rootSaga() {
  yield all([watcherSaga()]);
}