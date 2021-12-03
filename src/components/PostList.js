import React from "react";
import { getPostFB } from "../redux/modules/post";
// import {} from "";
import { useDispatch, useSelector } from "react-redux";

export default function PostList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPostFB());
  });

  const post_list = useSelector((state) => state.post);

  console.log(post_list);

  return (
    <>
      {/* {post_list.map((p, idx) => {
        
      })} */}
    </>
  );
}
