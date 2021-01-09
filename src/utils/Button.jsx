import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  ${(props) => {
    if (props.margin) {
      return { margin: props.margin };
    }
    return "margin: 0px";
  }}
`;

const Btn = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 10px;
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
  ${({ size, theme, color, bgColor }) => {
    switch (size) {
      case "sm":
        return { "font-size": "12px" };
      case "lg":
        return {
          "font-size": "16px",
          width: "173px",
          height: "40px",
          color: color ? color : theme.white,
          backgroundColor: bgColor ? bgColor : theme.blue,
        };
      case "xl":
        return {
          "font-size": "18px",
          width: "286px",
          height: "52px",
          color: color ? color : theme.white,
          backgroundColor: bgColor ? bgColor : theme.blue,
        };
    }
    return {
      fontSize: "14px",
      color: theme.white,
      backgroundColor: theme.blue,
    };
  }}
`;

function Button({ margin, size, title = "Button", color, bgColor }) {
  return (
    <Wrapper margin={margin}>
      <Btn bgColor={bgColor} color={color} size={size}>
        {title}
      </Btn>
    </Wrapper>
  );
}

export default Button;
