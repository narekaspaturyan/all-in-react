import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 10px;
  box-shadow: 0px 15px 30px rgba(134, 117, 79, 0.12);
  border-radius: 6px;
  background-color: ${(props) => props.theme.white};
  height: 60px;
  width: 440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Span1 = styled.span`
  height: 22px;
  margin: 20px 30px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.dark_Grey}; ;
`;

const Span2 = styled.span`
  height: 22px;
  margin: 20px 30px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.dark_Grey};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function LoginBottom(props) {
  return (
    <Wrapper>
      <Span1>Register</Span1>
      <Span2>Forgot Password</Span2>
    </Wrapper>
  );
}

export default LoginBottom;
