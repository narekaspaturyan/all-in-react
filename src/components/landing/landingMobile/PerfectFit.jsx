import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 321px;
  height: 343px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;

  background-color: ${(props) => props.theme.blue};
`;

const InnerWrapper = styled.div``;

function PerfectFit(props) {
  return <Wrapper></Wrapper>;
}

export default PerfectFit;
