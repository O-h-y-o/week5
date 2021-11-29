import styled from "styled-components";
import Btn from "../elements/btn";

export default function signUp() {
  return (
    <Wrap>
      <Btn />
      <InputWrap>
        <InputText>회원가입 페이지 입니다~</InputText>
        <Input placeholder="아이디" />
        <Input placeholder="비밀번호" />
        <Input placeholder="비밀번호 확인" />

        <BtnLogin>회원가입</BtnLogin>
      </InputWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const InputWrap = styled.div`
  position: absolute;
  width: 80%;
  margin: 100px auto;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #999;
`;

const InputText = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin: 30px auto 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  margin: 15px auto;
  width: 80%;
  height: 50px;
  border: 1px solid greenyellow;
  border-radius: 10%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    padding-left: 10px;
    color: #000;
    font-weight: 900;
    font-size: 18px;
  }
`;

const BtnLogin = styled.div`
  width: 80%;
  height: 50px;
  background-color: greenyellow;
  margin: 10px auto 20px;
  cursor: pointer;
  font-size: 40px;
  font-weight: 900;
  border-radius: 5px;
  transition: all 0.5s;

  &:hover {
    background-color: green;
  }
`;
