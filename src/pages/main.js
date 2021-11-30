import React from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Btn from "../elements/btn";
import { getCookie } from "../shared/cookies";
import BtnLogin from "../elements/btn_signIn";
import { apiKey } from "../shared/firebase";
import { actionCreators as userActions } from "../redux/modules/user";

export default function Main() {
  // const [is_login, setIsLogin] = React.useState(false);

  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_session);

  React.useEffect(() => {
    if (is_session) {
      console.log(is_session);
      dispatch(userActions.loginCheckFB());
    }
  }, []);

  if (is_login && is_session) {
    return (
      <>
        <BtnLogin />
      </>
    );
  }
  return (
    <>
      <Btn />
    </>
  );
}
