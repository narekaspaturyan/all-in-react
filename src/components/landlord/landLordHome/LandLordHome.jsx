import React from "react";
import styled from "styled-components";

import image1 from "../../../images/bg.png";
import image2 from "../../../images/bg2.png";
const Wrapper = styled.div`
  display: flex;
  margin: 0 50px;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.white};
`;

const ImageWrapper = styled.div`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  background-position: center; // remember
  margin-top: 40px;
  width: 49%;
  height: 430px;
  background-color: ${({ theme }) => theme.blue_Grey};
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
  background-image: ${({ image }) => `url(${image})`};
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

function LandLordHome(props) {
  return (
    <>
      <SpanWrapper>
        <Span>What do you want?</Span>
      </SpanWrapper>
      <Wrapper>
        <ImageWrapper image={image1}></ImageWrapper>
        <ImageWrapper image={image2}></ImageWrapper>
      </Wrapper>
    </>
  );
}

export default LandLordHome;
