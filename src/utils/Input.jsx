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

const InputField = styled.input`
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
  margin: 0px;
  color: ${(props) => props.theme.dark_Grey};
  background-color: ${(props) => props.theme.white};
  ${({ type, height, width }) => {
    return { type, width, height };
  }}
`;

function Input({
  placeholder,
  type = "text",
  margin,
  width = "360px",
  height = "56px",
  onChange,
}) {
  return (
    <Wrapper margin={margin}>
      <InputField
        onChange={onChange}
        height={height}
        width={width}
        type={type}
        placeholder={placeholder}
      />
    </Wrapper>
  );
}

export default Input;
