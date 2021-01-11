import React from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
  .navlink {
    color: ${(props) => props.theme.dark_Grey};
  }
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
  color: ${(props) => props.theme.dark_Grey};
  &:hover {
    text-decoration: underline;
  }
  cursor: pointer;
`;

function ForgotPasswordBottom(props) {
  return (
    <Wrapper>
      <Span1>
        {" "}
        <NavLink className="navlink" to="/login">
          Back to Login
        </NavLink>
      </Span1>
    </Wrapper>
  );
}

export default ForgotPasswordBottom;
