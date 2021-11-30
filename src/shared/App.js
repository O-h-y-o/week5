import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

import Main from "../pages/main";
import signIn from "../pages/signIn";
import signUp from "../pages/signUp";
import { apiKey } from "./firebase";

function App() {
  return (
    <>
      <Wrap>
        <Switch>
          <Route exact path="/pages/signUp" component={signUp} />
          <Route exact path="/pages/signIn" component={signIn} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 30%;
  min-width: 400px;
  height: 1500px;
  background-color: #eee;
  margin: auto;
`;

export default App;
