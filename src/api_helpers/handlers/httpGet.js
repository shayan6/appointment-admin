import { call, put, takeLatest } from "redux-saga/effects";
import httpGet from "../requests/httpGet";

function* handleHttpGet(action) {
  try {
    const data = yield call(httpGet, action.httpRequestData);
    yield put({ type: "GET_REQUESTED_SUCCESS", data: data.results ? data.results : data });
  } catch (err) {
    yield put({ type: "GET_REQUESTED_FAILURE", data: { error: err.message } });
  }
}

function* watcherSaga() {
  yield takeLatest("GET_REQUESTED_DATA", handleHttpGet);
}

export default watcherSaga;