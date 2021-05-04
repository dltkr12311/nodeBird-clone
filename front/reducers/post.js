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
          src:
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
        },
        {
          src:
            "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "취업준비중입니다~",
        },
        {
          User: {
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
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다",
  User: {
    id: 1,
    nickname: "리삭",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
