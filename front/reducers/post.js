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
          src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
        },
        {
          src: "https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg",
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
