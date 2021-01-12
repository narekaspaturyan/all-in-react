import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 80px;
  width: 321px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid ${({ theme }) => theme.error}; */
`;

const InnerWrapper = styled.div`
  margin: 5px 0;
  height: 113px;
  width: 321px;
  border-radius: 16px;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid ${({ theme }) => theme.blue}; */
`;

const Span = styled.span`
  margin-bottom: 10px;
  height: 22px;
  width: 213px;
  align-self: flex-start;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.dark_Grey};
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.fancy_Green};
  width: 135px;
  height: 113px;
  border-radius: 16px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 100px;
`;

const InfoSpan1 = styled.span`
  /* font-family: Avenir; */
  font-style: normal;
  margin-top: 9px;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.blue};
`;

const InfoSpan2 = styled.span`
  /* font-family: Avenir; */
  margin-top: 9px;
  height: 32px;
  width: 131px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.light_Grey_Inactive};
`;

function MuchMoreCard(props) {
  return (
    <Wrapper>
      <Span>Much More</Span>
      <InnerWrapper>
        <ImageWrapper>Image</ImageWrapper>
        <InfoWrapper>
          <InfoSpan1>$433,000</InfoSpan1>
          <InfoSpan2>408 E 92nd St, New York, NY 10128</InfoSpan2>
        </InfoWrapper>
      </InnerWrapper>
      <InnerWrapper>
        <ImageWrapper>Image</ImageWrapper>
        <InfoWrapper>
          <InfoSpan1>$433,000</InfoSpan1>
          <InfoSpan2>408 E 92nd St, New York, NY 10128</InfoSpan2>
        </InfoWrapper>
      </InnerWrapper>
    </Wrapper>
  );
}

export default MuchMoreCard;
