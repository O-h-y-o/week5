/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";
import { getPostFB } from "../redux/modules/post";
// import {} from "";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { apiKey } from "../shared/firebase";
import { actionCreators as userActions } from "../redux/modules/user";

export default function PostList() {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  React.useEffect(() => {
    if (is_session) {
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  React.useEffect(() => {
    dispatch(getPostFB());
  }, []);

  const post_list = useSelector((state) => state.post.list);

  let user_info = useSelector((state) => state.user.user.uid);
  console.log(user_info);

  return (
    <>
      {post_list.map((post, idx) => {
        return (
          <View>
            <Img src={post.image_url} alt="image" />
            <Title>{post.title}</Title>
            <Contents>{post.contents}</Contents>
            <Tags>{post.tags}</Tags>
            <div>작성자 {post.user_info.user_name}</div>
            <div>작성일 {post.insert_dt}</div>
            {console.log(post.user_info.user_id)}
            {post.user_info.user_id === user_info ? (
              <PostRight>
                {/* <Link to="../pages/edit" style={{ textDecoration: "none" }}> */}
                <Edit>수정</Edit>
                {/* </Link> */}
                <Delete>삭제</Delete>
              </PostRight>
            ) : null}
          </View>
        );
      })}
    </>
  );
}

const View = styled.div`
  width: 80%;
  margin: 0 auto 20px;
  border: 5px dotted #999;
  border-radius: 5px;
  position: relative;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`;

const Title = styled.div`
  font-weight: 900;
  margin: 15px;
  font-size: 20px;
`;

const Contents = styled.div`
  margin: 15px;
`;

const Tags = styled.div`
  margin: 15px;
  cursor: pointer;
`;

const PostRight = styled.div`
  position: absolute;
  top: 0;
  right: -33px;
`;

const Edit = styled.div`
  border: 1px solid #999;
  margin-bottom: 3px;
  cursor: pointer;
  border-left: 0;
  transition: 0.5s;
  color: #000;

  &:hover {
    background-color: #111;
    color: #fff;
  }
`;

const Delete = styled.div`
  border: 1px solid #aaa;
  cursor: pointer;
  border-left: 0;
  transition: 0.5s;

  &:hover {
    background-color: #111;
    color: #fff;
  }
`;
