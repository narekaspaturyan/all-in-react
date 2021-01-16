import React from "react";
import styled from "styled-components";
import colors from "../../../../../config/colors";
import ButtonWithShevron from "../../../../utils/buttonWithShevron/ButtonWithShevron";
import TextSpan from "../../../../utils/TextSpan";
import ApartmentInfo from "./ApartmentInfo";

import { Link } from "react-router-dom";

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
  margin: 80px 150px 0 0;
`;

const LeftWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 80px 0 0 80px;
  background-color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  height: 29px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  margin-left: 17px;
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
          <Link to="/landing">
            {" "}
            <ButtonWithShevron
              left
              backgroudColor={colors.fancy_Green}
              shevronColor={colors.white}
            />
          </Link>

          <TextSpan
            fontWeight={900}
            fontSize="14px"
            lineHeight="18px"
            // letter-spacing: 0.7px;
            textTransform="uppercase"
            color={colors.blue_Grey}
            margin="0 0 0 18px"
          >
            Go back to search results
          </TextSpan>
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
