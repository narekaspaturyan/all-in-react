import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 5px 0;
  height: 207px;
  width: 530px;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.fancy_Green};
  height: 207px;
  width: 273px;
  border-radius: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 140px;
  height: 100px;
  margin-right: 80px;
  border: dotted red;
`;
const InfoSpan1 = styled.span`
  /* font-family: Avenir; */
  width: 188px;
  height: 22px;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  margin-top: 9px;
  color: ${({ theme }) => theme.dark_Blue};
`;

const InfoSpan2 = styled.span`
  /* font-family: Avenir; */
  width: 188px;
  height: 42px;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  font-style: normal;
  margin-top: 6px;
  color: ${({ theme }) => theme.light_Grey_Inactive};
`;

function ApartmentCard(props) {
  return (
    <Wrapper>
      <ImageWrapper>Image</ImageWrapper>
      <InfoWrapper>
        <InfoSpan1>The woods</InfoSpan1>
        <InfoSpan2>1410 E Butker Pike, Ambler, PA 19002 Apartment 3</InfoSpan2>
      </InfoWrapper>
    </Wrapper>
  );
}

export default ApartmentCard;
