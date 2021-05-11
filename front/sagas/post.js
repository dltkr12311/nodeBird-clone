import axios from "axios";
import { all, put, fork, delay, takeLatest } from "@redux-saga/core/effects";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}
function* addPost(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: "ADD_POST_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "ADD_POST_FAILURE",
      data: err.response.data,
    });
  }
}

//함수의 뜻은 로그인이라는 액션이 실행되기 전까지 기달리겠다.
//take는 일회용이다. 한번 실행되면 해당 함수는 사라진다. 예를 들어 로그인을 한번밖에 못한다...
function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost, 10000);
}

export default function* postSaga() {
  yield all([fork(watchAddPost)]);
}
