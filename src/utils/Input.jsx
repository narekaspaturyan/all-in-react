import React from "react";
import styled from "styled-components";

const InputField = styled.input`
  height: 56px;
  width: 360px;
  left: 0px;
  top: 0px;
  border: 1px solid rgba(134, 117, 79, 0.2);
  box-sizing: border-box;
  border-radius: 6px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: start;
  padding-left: 15px;

  color: ${(props) => props.theme.dark_Grey};
  background-color: ${(props) => props.theme.white};
  ${(props) => {
    if (props.type) {
      return { type: props.type };
    }
    return "type:text";
  }}

  ${(props) => {
    if (props.margin) {
      return { margin: props.margin };
    }
    return "margin:0px";
  }}
`;

function Input({ placeholder, type, margin }) {
  return <InputField margin={margin} type={type} placeholder={placeholder} />;
}

export default Input;
