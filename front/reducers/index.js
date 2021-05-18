import { HYDRATE } from "next-redux-wrapper";
import user from "./user";
import post from "./post";
import { combineReducers } from "redux";

//(이전상태, 액션) => 다음상태
//HYDRATE는 서버에서 생성한 상태를 클라이언트 스토어에 합쳐준다.(서버사이드렌더링을 위해서)
const rootReducers = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducers;
