import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};
  font-family: Avenir;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  /* identical to box height, or 129% */
  text-align: center;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  ${(props) => {
    switch (props.size) {
      case "sm":
        return { "font-size": "12px" };
      case "lg":
        return { "font-size": "20px", width: "210px" };
    }
    return "font-size: 14px";
  }}
`;

function Button({ size }) {
  return <Btn size={size}>Login</Btn>;
}

export default Button;
