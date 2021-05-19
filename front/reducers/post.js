import shortid from "shortid";
import produce from "immer";

export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "아이즉",
      },
      content: "첫 번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
        },
        {
          src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      Comments: [
        {
          id: shortid.generate(),
          User: {
            id: shortid.generate(),
            nickname: "nero",
          },
          content: "취업준비중입니다~",
        },
        {
          id: shortid.generate(),
          User: {
            id: shortid.generate(),
            nickname: "hero",
          },
          content: "조만간 취뽀합니다~",
        },
      ],
    },
  ],
  //이미지 업로드 할때 이미지 경로들이 담긴다.
  imagePaths: [],
  // 게시글 추가가 완료되었을때 true로 바뀜
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMNENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: "리삭",
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: "리삭",
  },
});

// 이전 상태를 액션을 통해 다음상태로 만들어 내는 함수 (불변성은 지키면서)
const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        //전역으로 관리하고 있는 상태  mainPosts에서 고유 값을 비교해서 true라면,
        // 해당 고유값 mainPosts로 얕은 복사를 한다.
        // 기존의 댓글과 새로 단 댓글을 해당 post에 넣고
        // 기존 mainPosts를 얕은 복사하고
        // 해당 post를 mainPosts로 할당한다.
      }
      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
