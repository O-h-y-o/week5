import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Main from "../pages/main";
import signIn from "../pages/signIn";
import signUp from "../pages/signUp";

function App() {
  return (
    <>
      <Wrap>
        <Switch>
          <Route path="/pages/signUp" component={signUp} />
          <Route path="/pages/signIn" component={signIn} />
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
