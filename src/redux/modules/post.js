import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  user_info: {
    id: 0,
    user_name: "mean0",
    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  },
  image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  contents: "고양이네요!",
  comment_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
};

export const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("Post");
    window.alert("테스트");
    console.log(postDB);
    console.log(postDB.get());
    postDB.get().then((doc) => {
      console.log(doc);
      let post_list = [];
      doc.forEach((doc) => {
        console.log(doc.id, doc.data());
        let _post = doc.data();
        let post = {
          id: doc.id,
          user_info: {
            user_name: _post.user_name,
            user_profile: _post.user_profile,
            user_id: _post.user_id,
          },
          contents: _post.contents,
          image_url: _post.image_url,
          comment_url: _post.comment_url,
          comment_cnt: _post.comment_cnt,
          insert_dt: _post.insert_dt,
        };

        post_list.push(post);
      });

      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) => produce(state, (draft) => {}),
    [ADD_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const actionCreates = {
  setPost,
  addPost,
  getPostFB,
};
