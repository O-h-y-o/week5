import React from "react";
import { getPostFB } from "../redux/modules/post";
// import {} from "";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export default function PostList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostFB());
  }, []);

  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  return (
    <>
      {post_list.map((post, idx) => {
        return (
          <View>
            <Img src={post.image_url} alt="image" />
            <Title>{post.title}</Title>
            <Contents>{post.contents}</Contents>
            <Tags>{post.tags}</Tags>
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
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`;

const Title = styled.div`
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Contents = styled.div``;

const Tags = styled.div`
  margin: 15px;
  cursor: pointer;
`;
