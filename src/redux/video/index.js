import { call, takeEvery, put } from "redux-saga/effects";
import {
  GET_VIDEO_LIST,
  DISPATCH_GET_VIDEO_LIST,
  GET_VIDEO_ERROR,
  ERROR,
} from "../types";
import { getVideoApi } from "./api";

function* getVideoList(action) {
  try {
    let params = {
      type: action?.payload?.type,
      page: action?.payload?.page || 1,
    };
    const res = yield call(getVideoApi, params);

    if (res.status === 200) {
      yield put({ type: GET_VIDEO_LIST, payload: res.data });
      return;
    } else {
      yield put({ type: ERROR, payload: { message: GET_VIDEO_ERROR, code: 500, context: "video" } });
      return;
    }
  } catch (err) {
    return err;
  }
}

export function* videoSaga() {
  yield takeEvery(DISPATCH_GET_VIDEO_LIST, getVideoList);
}
