/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { getPostFB } from "../redux/modules/post";
// import {} from "";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { apiKey } from "../shared/firebase";
import { actionCreators as userActions } from "../redux/modules/user";

export default function PostList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostFB());
  }, []);

  const post_list = useSelector((state) => state.post.list);

  const edit = () => {};

  return (
    <>
      {post_list.map((post, idx) => {
        return (
          <View>
            <Img src={post.image_url} alt="image" />
            <Title>{post.title}</Title>
            <Contents>{post.contents}</Contents>
            <Tags>{post.tags}</Tags>
            <div>댓글 {post.comment_cnt}개</div>
            <div>작성자 {post.user_info.user_name}</div>
            <div>작성일 {post.insert_dt}</div>
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
