import { takeEvery } from "redux-saga/effects";

import { USER_LOGIN_ACTION } from "../types";

function* login(action) {
    //  const { params, callback } = action.payload;
//   try {
//     const res = yield call(apiLoginUser, params);
//     if (res.status === 200) {
//       Helpers.setDataStorage(Keys.dataToken, res.data)
//       yield put({ type: USER_LOGIN_SUCCESS_ACTION, payload: res.data })
//       callback(res.data)
//     }else{
//       callback(null)
//     }
//   } catch (err) {
//     callback(null)
//   } 
}

export function* userSaga() {
  yield takeEvery(USER_LOGIN_ACTION, login);
}
