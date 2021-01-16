import React from "react";
import styled from "styled-components";

const Input = styled.input`
  ${({
    type = "text",
    width = "360px",
    height = "56px",
    margin = "0px",
    placeholder = "",
    name = "",
    borderRadius = "6px",
    color = "#000",
    backgroundColor = "fff",
    display,
  }) => {
    return {
      type,
      width,
      height,
      margin,
      placeholder,
      name,
      borderRadius,
      color,
      backgroundColor,
      display,
    };
  }}
  border: 1px solid rgba(134, 117, 79, 0.2);
  box-sizing: border-box;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: start;
  padding-left: 15px;
  @media (max-width: 767px) {
    width: 240px;
  }
`;

export default Input;
