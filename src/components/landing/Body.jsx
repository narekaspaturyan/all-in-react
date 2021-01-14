import React from "react";
import styled from "styled-components";

import BodyRight from "./BodyRight";
import BodyLeft from "./BodyLeft";
const BodyWrapper = styled.div`
  height: 550px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function Body(props) {
  return (
    <BodyWrapper>
      <BodyLeft />
      <BodyRight />
    </BodyWrapper>
  );
}

export default Body;
