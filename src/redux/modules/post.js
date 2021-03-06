import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
// import { collection, getDocs, addDoc } from "firebase/firestore";
import { storage } from "../../shared/firebase";
import { actionCreators as imgActions } from "./image";
import moment from "moment";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  image_url: "",
  contents: "",
  comment_cnt: 5,
  insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm"),
};

export const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("Post");

    postDB.get().then((docs) => {
      console.log(docs);
      let post_list = [];
      docs.forEach((doc) => {
        // console.log(docs);
        let _post = doc.data();
        // ['commenct_cnt', 'contents', ..]
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} }
        );

        post_list.push(post);
      });

      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

const addPostFB = (title, contents, tags) => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("Post");
    const _user = getState().user.user;
    const _image = getState().image.preview;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };

    const _post = {
      ...initialPost,
      title: title,
      contents: contents,
      tags: tags,
      insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm"),
    };

    const _upload = storage
      .ref(`images/$user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          dispatch(imgActions.uploadImage(url));
          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              window.alert("작성 성공!");
              history.replace("/");
            })
            .catch((err) => {
              console.log("post 작성 실패!", err);
            });
        });
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {}),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const actionCreates = {
  setPost,
  addPost,
  addPostFB,
};
