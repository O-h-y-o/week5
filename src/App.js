import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <Wrap></Wrap>
    </>
  );
}

const Wrap = styled.div`
  width: 500px;
  height: 1000px;
  background-color: #eee;
  margin: auto;
`;

export default App;
