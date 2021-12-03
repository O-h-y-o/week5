import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { $CombinedState } from "redux";

import styled from "styled-components";
import BtnLogin from "../elements/btn_signIn";
import { actionCreators as imgActions } from "../redux/modules/image";
import { actionCreates as Actions } from "../redux/modules/post";
import { storage } from "../shared/firebase";

export default function Post() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [tags, setTags] = useState("");
  const [file_name, setFileName] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const changeTags = (e) => {
    setTags(e.target.value);
  };

  const dispatch = useDispatch();
  const preview = useSelector((state) => state.image.preview);

  const addPost = () => {
    dispatch(Actions.addPostFB(title, contents, tags));
  };

  const fileinput = React.useRef();

  const uploadFB = () => {
    let image = fileinput.current?.files[0];
    // const _upload = storage.ref(`images/${image.name}`).put(image);

    setFileName(image.name);
    dispatch(imgActions.uploadImageFB(fileinput.current.files[0]));

    const reader = new FileReader();

    reader.readAsDataURL(image);

    reader.onloadend = () => {
      dispatch(imgActions.setPreview(reader.result));
    };
  };
  return (
    <>
      <BtnLogin />
      <PostingWrap>
        <PreviewWrap>
          <Preview>
            <Img
              src={preview ? preview : "http://via.placeholder.com/400x300"}
              alt="이미지"
            />
            <Title>{title}</Title>
            <Contents>{contents}</Contents>
            <Tags>{tags}</Tags>
          </Preview>
        </PreviewWrap>
        <Posting>
          <WriteWrap>
            <Input placeholder="제목을 입력해주세요" onChange={changeTitle} />
            <FileInputArea>
              <FileLabel for="file">이미지 업로드</FileLabel>
              <FileInput
                type="file"
                id="file"
                onChange={uploadFB}
                ref={fileinput}
              />
              <FileTitleView value={file_name} />
            </FileInputArea>
            <Textarea
              onChange={changeContents}
              placeholder="내용을 입력해주세요"
            />
            <Input
              placeholder="태그를 입력해주세요 ex) #리액트 #너무 #쉽다"
              onChange={changeTags}
              style={{ marginTop: "30px" }}
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
  height: 100%;
`;

const Posting = styled.div`
  position: relative;
  margin: 0 auto 50px;
  border: 10px dotted #ddd;
  border-radius: 5px;
  width: 80%;
`;

const PreviewWrap = styled.div`
  width: 80%;
  padding-top: 100px;
  margin: 0 auto 50px;
`;

const Preview = styled.div`
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
  pointer-events: none;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: auto;
`;

const Title = styled.div`
  font-weight: 900;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Contents = styled.div``;

const Tags = styled.div`
  margin: 15px;
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

const FileInputArea = styled.div`
  margin: auto auto auto;
  padding: 30px 0;
`;

const FileInput = styled.input`
  display: none;
`;

const FileLabel = styled.label`
  display: block;
  width: 100px;
  border: 1px solid #999;
  padding: 10px;
  border-radius: 5px;
  cursor: wait;
  transition: 0.5s;
  text-align: center;
  margin: 10px 0;

  &:hover {
    transform: scale(1.1);
    background-color: #999;
  }
`;
const FileTitleView = styled.input`
  width: 100%;
  font-size: 16px;
  border: none;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  padding-left: 20px;
  cursor: default;
  visibility: none;
  outline: none;
  pointer-events: none;
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
  cursor: wait;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;
