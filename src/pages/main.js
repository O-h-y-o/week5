import { Route, Switch } from "react-router-dom";
import Btn from "../elements/btn";
import BtnLogin from "../elements/btn_signIn";

export default function main() {
  let id;
  if (id === null) {
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
