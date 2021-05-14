import axios from "axios";
import { all, put, fork, delay, takeLatest } from "@redux-saga/core/effects";
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from "../reducers/post";

function addPostAPI(data) {
  return axios.post("/api/post", data);
}
function* addPost(action) {
  try {
    //const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    //const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

//함수의 뜻은 로그인이라는 액션이 실행되기 전까지 기달리겠다.
//take는 일회용이다. 한번 실행되면 해당 함수는 사라진다. 예를 들어 로그인을 한번밖에 못한다...
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost, 10000);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment, 10000);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchAddComment)]);
}
