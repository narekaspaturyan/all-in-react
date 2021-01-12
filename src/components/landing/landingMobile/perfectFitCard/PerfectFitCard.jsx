import React from "react";
import styled from "styled-components";
import PerfectFitCardBottom from "./PerfectFitCardBottom";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 321px;
  height: 404px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
  /* border: 1px solid ${({ theme }) => theme.blue}; */
`;

const InnerWrapper = styled.div`
  border-radius: 16px;
  /* border: 1px solid ${({ theme }) => theme.dark_Blue}; */
  height: 343px;
  width: 321px;
`;

const Span = styled.span`
  align-self: flex-start;
  height: 29px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  color: ${({ theme }) => theme.black};
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.fancy_Green};
  width: 321px;
  height: 236px;
  /* border: 1px solid ${({ theme }) => theme.dark_Blue}; */
  /* background: url(image.png); */
  border-radius: 12px;
`;

function PerfectFitCard(props) {
  return (
    <Wrapper>
      <Span>USA, NY</Span>
      <InnerWrapper>
        <ImageWrapper>Image</ImageWrapper>
        <PerfectFitCardBottom />
      </InnerWrapper>
    </Wrapper>
  );
}

export default PerfectFitCard;
