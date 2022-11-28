import { call, put, takeLatest } from "redux-saga/effects";
import sendRequest from "../requests/sendRequest";

function* handleSendRequest(action) {
  try {
    const data = yield call(sendRequest, action.httpRequestData);
    yield put({ type: "GET_REQUESTED_SUCCESS", data: data.results ? data.results : data });
  } catch (err) {
    yield put({ type: "GET_REQUESTED_FAILURE", data: { error: err.message } });
  }
}

function* watcherSaga() {
  yield takeLatest("GET_REQUESTED_DATA", handleSendRequest);
}

export default watcherSaga;