import { all, fork } from "redux-saga/effects";

import userSaga from "./user";
import postSaga from "./post";

//all은 배열을 받는다 한번에 실행을 해준다. fork는 함수를 실행해준다.
export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
