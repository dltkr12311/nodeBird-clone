import axios from "axios";
import { all, put, fork, delay, takeLatest } from "@redux-saga/core/effects";

//*붙이는거 아님 실제로 서버에 요청을 보내는 함수
function loginAPI(data) {
  return axios.post("/api/login", data);
}

//항상 이펙터 앞에는 yield를 붙여준다.
//put을 dispatch라고 생각하면 좋다.
function* logIn(action) {
  try {
    //const result = yield call(loginAPI, action.data);
    console.log("saga logInSuccess");
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_IN_FAILURE",
      data: err.response.data,
    });
  }
}

function logoutAPI() {
  return axios.post("/api/logout");
}
function* logOut() {
  try {
    //const result = yield call(logoutAPI);
    yield delay(1000);
    yield put({
      type: "LOG_OUT_SUCCESS",
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

//fork는 비동기 함수호출, call은 동기 함수 호출
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
