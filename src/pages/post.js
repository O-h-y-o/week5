import styled from "styled-components";
import BtnLogin from "../elements/btn_signIn";

export default function Post() {
  return (
    <>
      <BtnLogin />
      <PostingWrap>
        <Posting>
          <WriteWrap>
            <Input placeholder="제목을 입력해주세요" />
            <input type="file" />
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
  height: 500px;
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
