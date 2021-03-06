import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

export default function Btn() {
  const dispatch = useDispatch();

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
            <Link
              to="/"
              onClick={() => {
                dispatch(userActions.logoutFB({}));
              }}
            >
              로그아웃
            </Link>
          </SignBtn>
        </SignWrap>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  position: fixed;
  top: 0;
  width: 50%;
  min-width: 400px;
  height: 70px;
  background-color: #888;
  border-bottom: 1px solid #999;
  opacity: 0.85;
  z-index: 10;
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
  transition: 0.5s;

  & a {
    text-decoration: none;
    color: #000;
  }

  &:hover {
    background-color: #777;
    transform: scale(1.1);
  }
`;
