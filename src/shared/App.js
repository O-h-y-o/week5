import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled from "styled-components";

import { history } from "../redux/configStore";

import Main from "../pages/main";
import signIn from "../pages/signIn";
import signUp from "../pages/signUp";
import Post from "../pages/post";
import Edit from "../pages/edit";

function App() {
  return (
    <>
      <Wrap>
        <ConnectedRouter history={history}>
          <Route exact path="/pages/edit" component={Edit} />
          <Route exact path="/pages/post" component={Post} />
          <Route exact path="/pages/signUp" component={signUp} />
          <Route exact path="/pages/signIn" component={signIn} />
          <Route exact path="/" component={Main} />
        </ConnectedRouter>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 50%;
  min-width: 400px;
  background-color: #eee;
  margin: 70px auto;
  /* padding: 100px 0; */
`;

export default App;
