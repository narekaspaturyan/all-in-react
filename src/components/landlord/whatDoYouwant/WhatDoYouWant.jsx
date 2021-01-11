import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.white};
`;
const ImageWrapper = styled.div`
  margin-top: 40px;
  width: 600px;
  height: 440px;
  background-color: ${(props) => props.theme.blue_Grey};
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
`;

const SpanWrapper = styled.div`
  margin: 60px 0 0 50px;
`;
const Span = styled.span`
  height: 29px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: ${(props) => props.theme.dark_Blue};
  height: 95px;
  font-size: 36px;
`;

function WhatDoYouWant(props) {
  return (
    <>
      <SpanWrapper>
        <Span>What do you want?</Span>
      </SpanWrapper>
      <Wrapper>
        <ImageWrapper></ImageWrapper>
        <ImageWrapper></ImageWrapper>
      </Wrapper>
    </>
  );
}

export default WhatDoYouWant;
