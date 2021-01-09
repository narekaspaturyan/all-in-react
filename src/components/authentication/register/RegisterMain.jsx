import React from "react";
import styled from "styled-components";

import Header from "../../landing/Header";
import Register from "./Register";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.white};
`;

const Span = styled.span`
  height: 29px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: ${(props) => props.theme.dark_Blue};
  height: 95px;
  font-size: 36px;
  margin: 50px 0 0 50px;
`;

function RegisterMain(props) {
  return (
    <>
      <Header title="Account" />
      <Wrapper>
        <Span>Register</Span>
        <Register />
      </Wrapper>
    </>
  );
}

export default RegisterMain;
