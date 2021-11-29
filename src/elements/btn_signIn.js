import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Btn() {
  return (
    <>
      <Wrap>
        <Logo>
          <Link to="/">Logo</Link>
        </Logo>
        <SignWrap>
          <SignBtn>
            <Link to="../pages/notify">내정보</Link>
          </SignBtn>
          <SignBtn>
            <Link to="../pages/alram">알림</Link>
          </SignBtn>
          <SignBtn>
            <Link to="/">로그아웃</Link>
          </SignBtn>
        </SignWrap>
      </Wrap>
      <SignBtn>내정보</SignBtn>
      <SignBtn>알림</SignBtn>
      <SignBtn>로그아웃</SignBtn>
    </>
  );
}

const Wrap = styled.div`
  position: fixed;
  width: 30%;
  height: 70px;
  border-bottom: 1px solid #999;
`;

const Logo = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  width: 50px;
  height: 50px;
  background-color: #999;
  border-radius: 40%;
  text-align: center;
  line-height: 3;
  cursor: pointer;

  & a {
    text-decoration: none;
    color: #000;
  }
`;

const SignWrap = styled.div`
  position: absolute;
  top: 15px;
  right: 10px;
  display: flex;
`;

const SignBtn = styled.div`
  margin: 0;
  width: 80px;
  height: 40px;
  background-color: #999;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  line-height: 2.5;
  margin-right: 10px;

  & a {
    text-decoration: none;
    color: #000;
  }
`;
