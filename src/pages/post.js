import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { $CombinedState } from "redux";

import styled from "styled-components";
import BtnLogin from "../elements/btn_signIn";
import image from "../redux/modules/image";
import { actionCreates as Actions } from "../redux/modules/post";
import { storage } from "../shared/firebase";

export default function Post() {
  const [contents, setContents] = useState("");
  const [file_name, setFileName] = useState("");

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const dispatch = useDispatch();
  const uploading = useSelector((state) => state.image.uploading);

  const addPost = () => {
    dispatch(Actions.addPostFB(contents));
  };

  const fileinput = React.useRef();

  const uploadFB = () => {
    let image = fileinput.current?.files[0];
    const _upload = storage.ref(`images/${image.name}`).put(image);

    setFileName(image.name);

    // const file_name = document.querySelector(".upload_name");

    // file_name
    _upload.then((snapshot) => {
      console.log(snapshot);

      snapshot.ref.getDownloadURL().then((url) => {
        console.log(url);
      });
    });
  };
  return (
    <>
      <BtnLogin />
      <PostingWrap>
        <Posting>
          <WriteWrap>
            <Input placeholder="제목을 입력해주세요" />
            <FileInputArea>
              <FileLabel for="file">이미지 업로드</FileLabel>
              <FileInput
                type="file"
                id="file"
                onChange={uploadFB}
                ref={fileinput}
              />
              <input className="upload_name" value={file_name} />
            </FileInputArea>
            <Textarea
              onChange={changeContents}
              placeholder="내용을 입력해주세요"
            />
            {/* <InputButton onChange={uploadFB} ref={fileinput} type="file" /> */}
            <ButtonArea>
              <Button onClick={addPost}>작성하기</Button>
            </ButtonArea>
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

const FileInputArea = styled.div`
  margin: auto auto auto;
  padding: 30px 0;
`;
const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  margin: auto;

  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonArea = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 60px auto;
  border-radius: 5px;
  border: 1px solid #999;
  outline: none;
  cursor: pointer;
`;
