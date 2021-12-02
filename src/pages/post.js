import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import BtnLogin from "../elements/btn_signIn";
import { actionCreates as Actions } from "../redux/modules/post";

export default function Post() {
  const [contents, setContents] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  console.log(contents);

  const dispatch = useDispatch();

  const addPost = () => {
    dispatch(Actions.addPostFB(contents));
  };

  return (
    <>
      <BtnLogin />
      <PostingWrap>
        <Posting>
          <WriteWrap>
            <Input placeholder="제목을 입력해주세요" />
            <Textarea
              onChange={changeContents}
              placeholder="내용을 입력해주세요"
            />
            <InputButton style={{}} type="file" />
            <Button onClick={addPost}>작성하기</Button>
          </WriteWrap>
        </Posting>
      </PostingWrap>
    </>
  );
}

const PostingWrap = styled.div`
  position: relative;
`;

const Posting = styled.div`
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  margin: auto;
  border: 10px dotted #ddd;
  border-radius: 5px;
  width: 80%;
  height: 800px;
`;

const WriteWrap = styled.div`
  width: 80%;
  margin: 30px auto;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  transition: 0.5s;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 20px;

  &::placeholder {
    text-align: center;
  }

  &:focus {
    transform: scale(1.2);
    border: 1px solid #111;
    font-size: 20px;

    &::placeholder {
      color: #000;
    }
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 400px;
  transition: 0.5s;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    text-align: center;
  }

  &:focus {
    transform: scale(1.2);
    border: 1px solid #111;
    font-size: 20px;

    &::placeholder {
      color: #000;
    }
  }
`;

const InputButton = styled.input`
  & button {
    width: 100px;
    height: 100px;
  }
`;

const Button = styled.button``;
