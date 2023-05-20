import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../utils/Axios";
import { getHomeDataFailed, getHomeDataSuccess } from "./action";
import { GET_DATA } from "./actionType";

//All Users Api

function* getHomePageContent() {
  try {
    const response = yield call(get, `/users`);
    yield put(getHomeDataSuccess(response));
  } catch (error) {
    yield put(getHomeDataFailed(error));
  }
}

function* contentSaga() {
  yield takeLatest(GET_DATA, getHomePageContent);
}

export default contentSaga;
