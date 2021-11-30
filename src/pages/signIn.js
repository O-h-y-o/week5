import React from "react";
import styled from "styled-components";
import Btn from "../elements/btn";

import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { emailCheck } from "../shared/common";

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePw = (e) => {
    setPw(e.target.value);
  };

  const login = () => {
    console.log(id, pw);

    if (id === "" || pw === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }

    if (!emailCheck(id)) {
      window.alert("이메일 형식이 맞지 않습니다!");
      return;
    }

    dispatch(userActions.loginFB(id, pw));
  };

  return (
    <Wrap>
      <Btn />
      <InputWrap>
        <InputText>환영합니다.</InputText>
        <Input placeholder="아이디" onChange={changeId} />
        <Input placeholder="비밀번호" onChange={changePw} />

        <BtnLogin onClick={login}>로그인</BtnLogin>
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
  margin: 200px auto;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #999;
  border-radius: 10%;
`;

const InputText = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin: 30px auto 10px;
  padding-bottom: 30px;
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
