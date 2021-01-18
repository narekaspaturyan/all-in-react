import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import LocationInfo from "./LocationInfo";
import CustomRange from "../../../../utils/CustomRange";
import StyledButton from "../../../../utils/StyledButton";

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
  width: 633px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  margin: 80px 30px 0 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 80px 0 0 80px;
  background-color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  text-align: start;
  width: 380px;
  height: 95px;
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

const WrapperForMargin = styled.div`
  margin: 170px 0 10px 0;
`;

function ChooseLocationMain(props) {
  return (
    <Wrapper>
      <LeftWrapper>
        <SpanWrapper>
          <CustomRange st1="true" st2="true" />
        </SpanWrapper>

        <SpanWrapper>
          <Span>Please choose your location.</Span>
        </SpanWrapper>
      </LeftWrapper>

      <RightWrapper>
        <LocationInfo />
        <WrapperForMargin />
        <Link style={{ textDecoration: "none" }} to="/landAreaAndRooms">
          <StyledButton margin="0 0 10px 0" height="52px" width="557px">
            Next
          </StyledButton>
        </Link>
      </RightWrapper>
    </Wrapper>
  );
}

export default ChooseLocationMain;
