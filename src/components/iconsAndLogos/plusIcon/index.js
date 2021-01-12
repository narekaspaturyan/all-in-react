import React from "react";
import styled from "styled-components";

const DivWrapper = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin};
`;

const Div1 = styled.span`
  font-size: 16px;
  height: 2.5em;
  width: 2.5em;
  position: relative;

  &:after,
  &:before {
    content: "";
    display: block;
    border-radius: 9px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:before {
    height: 16px;
    width: 2px;
  }

  &:after {
    height: 2px;
    width: 16px;
  }
`;

function PlusIcon({ margin = "0px" }) {
  return (
    <DivWrapper margin={margin}>
      <Div1></Div1>
    </DivWrapper>
  );
}

export default PlusIcon;
