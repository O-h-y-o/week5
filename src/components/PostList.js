import React from "react";
import post, { actionCreates as Actions } from "../redux/modules/post";
// import {} from "";
import { useDispatch, useSelector } from "react-redux";

export default function PostList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Actions.getPostFB());
  });

  const post_list = useSelector((state) => state);

  console.log(post_list);

  return <></>;
}
