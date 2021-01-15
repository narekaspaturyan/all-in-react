import React from "react";
import styled from "styled-components";
import TrachCanIcon from "../iconsAndLogos/TrashCanIcon";

const Wrapper = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  backdrop-filter: blur(4px);
  border: none;
  &:focus {
    outline: none;
  }
`;

function ButtonWithTrashCan({ up }) {
  return (
    <Wrapper>
      <TrachCanIcon />
    </Wrapper>
  );
}

export default ButtonWithTrashCan;
