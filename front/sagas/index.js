import {
  all,
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
  throttle,
} from "redux-saga/effects";
import axios from "axios";

//*붙이는거 아님 실제로 서버에 요청을 보내는 함수
function loginAPI(data) {
  return axios.post("/api/login", data);
}

//항상 이펙터 앞에는 yield를 붙여준다.
//put을 dispatch라고 생각하면 좋다.
//fork는 비동기 함수호출, call은 동기 함수 호출
function* logIn(action) {
  try {
    //const result = yield call(loginAPI, action.data);
    yield delay(1000);
    yield put({
      type: "LOG_IN_SUCCESS",
      data: result.data,
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
    const result = yield call(logoutAPI);
    yield put({
      type: "LOG_OUT_SUCCESS",
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: "LOG_OUT_FAILURE",
      data: err.response.data,
    });
  }
}

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
function* watchLogIn() {
  yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
  yield takeLatest("LOG_OUT_REQUEST", logOut);
}

function* watchAddPost() {
  yield takeLatest("ADD_POST_REQUEST", addPost, 10000);
}

//all은 배열을 받는다 한번에 실행을 해준다. fork는 함수를 실행해준다.
export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchAddPost)]);
}
