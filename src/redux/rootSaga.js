import { fork } from "redux-saga/effects"
import { userSaga } from "./User"
import { videoSaga } from "./video"

export default function* rootSaga() {
    yield fork(userSaga)

    yield fork(videoSaga)
}