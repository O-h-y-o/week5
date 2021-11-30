import styled from "styled-components";

export default function PostBtn() {
  return (
    <BtnWrap>
      <PostBt>포스팅하기</PostBt>
    </BtnWrap>
  );
}

const BtnWrap = styled.div`
  width: 50%;
  margin: auto;
  background-color: #111;
`;

const PostBt = styled.button`
  width: 120px;
  height: 50px;
  background-color: #bbb;
  border-radius: 40%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: auto;
  cursor: pointer;
  line-height: 3.2;
  text-align: center;
  transition: 0.5s;

  &:hover {
    background-color: #999;
    transform: scale(1.1);
  }
`;
