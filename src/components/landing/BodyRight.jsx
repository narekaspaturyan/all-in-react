import React from "react";
import styled from "styled-components";

import bigImage from "./img/main.png";

const RightSectionWrapper = styled.div`
  width: 55%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const BigImageWrapper = styled.div`
  img {
    /* width: 100%;
    height: 100%; */
    position: absolute;
    right: 0;
    top: 0;
    width: 775.11px;
    height: 972.96px;
  }
`;

function BodyRight(props) {
  return (
    <RightSectionWrapper>
      <BigImageWrapper>
        <img src={bigImage} alt="Landing" />
      </BigImageWrapper>
    </RightSectionWrapper>
  );
}

export default BodyRight;
