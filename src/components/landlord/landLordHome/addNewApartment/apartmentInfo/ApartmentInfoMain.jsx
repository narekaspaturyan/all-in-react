import React from "react";
import styled from "styled-components";

import ApartmentInfo from "./ApartmentInfo";
import CustomRange from "../../../../utils/CustomRange";

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  @media (max-width: 767px) {
    flex-direction: column;
    width: 330px;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  margin: 80px 130px 0 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 80px 0 0 80px;
  background-color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  align-self: flex-start;
  height: 29px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  color: ${(props) => props.theme.dark_Blue};
  font-size: 36px;
  line-height: 120%;
  @media (max-width: 767px) {
    height: 50px;
    margin: 50px 0 0 25px;
  }
`;

const SpanWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function ApartmentInfoMain(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <SpanWrapper>
          <CustomRange st1="true" />
        </SpanWrapper>

        <SpanWrapper>
          <Span>Apartment Info</Span>
        </SpanWrapper>
      </LeftWrapper>

      <RightWrapper>
        <ApartmentInfo />
      </RightWrapper>
    </Wrapper>
  );
}

export default ApartmentInfoMain;
