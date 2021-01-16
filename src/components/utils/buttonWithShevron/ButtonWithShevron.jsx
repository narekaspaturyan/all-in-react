import React from "react";
import styled from "styled-components";
import UpShevronIcon from "./UpShevronIcon";

const Wrapper = styled.button`
  &:focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, backgroudColor }) =>
    backgroudColor ? backgroudColor : theme.white};
  width: 52px;
  height: 52px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 10px;
  ${({ left, right, up, down }) => {
    if (left) {
      return "transform: rotate(-90deg)";
    } else if (right) {
      return "transform: rotate(90deg)";
    } else if (down) {
      return "transform: rotate(180deg)";
    } else if (up) {
      return "";
    }
  }};
`;

function ButtonWithShevron({
  up,
  left,
  right,
  down,
  backgroudColor,
  shevronColor,
  handleClick,
}) {
  return (
    <Wrapper
      backgroudColor={backgroudColor}
      left={left}
      right={right}
      up={up}
      down={down}
      onClick={handleClick}
    >
      <UpShevronIcon shevronColor={shevronColor} />
    </Wrapper>
  );
}

export default ButtonWithShevron;
