import React from "react";
import { Route, Switch } from "react-router-dom";
import Btn from "../elements/btn";
import { getCookie, setCookie } from "../shared/cookies";
import BtnLogin from "../elements/btn_signIn";

export default function Main() {
  const [is_login, setIsLogin] = React.useState(false);

  React.useEffect(() => {
    let cookie = getCookie();
    console.log(cookie);
    if (cookie) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  if (is_login === null) {
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
