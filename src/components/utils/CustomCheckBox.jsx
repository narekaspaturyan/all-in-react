import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  height: 17px;
  width: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ border }) => (border ? border : " white")};
  border-radius: ${({ square }) => (square ? "3px" : "50%")};
  margin: ${({ margin }) => (margin ? margin : "0px")};
`;

const Span = styled.span`
  height: 11px;
  width: 11px;
  border-radius: ${({ square }) => (square ? "2px" : "50%")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ checked, backgroundColor }) => {
    return checked ? backgroundColor : "";
  }};
`;

const CheckboxSquare = ({
  checked,
  onClick,
  square,
  border,
  backgroundColor,
  margin,
}) => (
  <Wrapper margin={margin} border={border} square={square}>
    <Span
      square={square}
      backgroundColor={backgroundColor}
      onClick={onClick}
      checked={checked}
    />
  </Wrapper>
);

export default CheckboxSquare;
