import React from "react";
import { actionCreates as Actions } from "../redux/modules/post";
// import {} from "";
import { useDispatch } from "react-redux";

export default function PostList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Actions.getPostFB());
  });
  return (
    <>
      <div>123</div>
    </>
  );
}
