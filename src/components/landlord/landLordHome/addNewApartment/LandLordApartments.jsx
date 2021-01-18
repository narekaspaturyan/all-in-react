import React, { useState } from "react";
import styled from "styled-components";
import PlusIcon from "../../../iconsAndLogos/plusIcon";

import StyledButton from "../../../utils/StyledButton";
import HeaderSpan from "../../../utils/HeaderSpan";
import ApartmentCard from "./ApartmentCard";
import LineBreak from "../../../utils/LineBreak";
import TextSpan from "../../../utils/TextSpan";
import colors from "../../../../config/colors";
import ButtonWithShevron from "../../../utils/buttonWithShevron/ButtonWithShevron";
import FlexWrapperDiv from "../../../utils/FlexWrapperDiv";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 50px;
  background-color: ${({ theme }) => theme.white};
`;

const ApartmentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px;
`;

const CityNameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 50px;
`;

const CityNameInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

function LandLordApartments(props) {
  const [showAppartments, setVisibility] = useState(false);

  return (
    <Wrapper>
      <InnerWrapper>
        <HeaderSpan>My Apartments</HeaderSpan>
        <StyledButton width="284px" height="52px" justifyContent="center">
          <PlusIcon margin="0 10px 0 0" /> Add New Apartment
        </StyledButton>
      </InnerWrapper>

      <CityNameWrapper>
        <CityNameInfoWrapper>
          <TextSpan
            fontSize="24px"
            lineHeight="120%"
            fontWeight={900}
            color={colors.dark_Grey}
          >
            Aachen
          </TextSpan>

          <FlexWrapperDiv>
            <TextSpan
              textAlign="center"
              fontWeight={900}
              fontSize="18px"
              lineHeight="22px"
              color={colors.blue}
              margin="0 13px 0 0"
            >
              2
            </TextSpan>

            <TextSpan
              textAlign="center"
              fontWeight={800}
              fontSize="14px"
              lineHeight="150%"
              color={colors.blue_Grey}
            >
              Apartments
            </TextSpan>
          </FlexWrapperDiv>

          <TextSpan>
            <ButtonWithShevron
              down={!showAppartments}
              handleClick={() => setVisibility(!showAppartments)}
            />
          </TextSpan>
        </CityNameInfoWrapper>
        <LineBreak width="100%" />
      </CityNameWrapper>
      {showAppartments ? (
        <ApartmentWrapper>
          <ApartmentCard />
          <ApartmentCard />
        </ApartmentWrapper>
      ) : (
        ""
      )}
      <CityNameWrapper>
        <CityNameInfoWrapper>
          <TextSpan
            fontSize="24px"
            lineHeight="120%"
            fontWeight={900}
            color={colors.dark_Grey}
          >
            Aachen
          </TextSpan>

          <FlexWrapperDiv>
            <TextSpan
              textAlign="center"
              fontWeight={900}
              fontSize="18px"
              lineHeight="22px"
              color={colors.blue}
              margin="0 13px 0 0"
            >
              2
            </TextSpan>

            <TextSpan
              textAlign="center"
              fontWeight={800}
              fontSize="14px"
              lineHeight="150%"
              color={colors.blue_Grey}
            >
              Apartments
            </TextSpan>
          </FlexWrapperDiv>

          <TextSpan>
            <ButtonWithShevron down />
          </TextSpan>
        </CityNameInfoWrapper>
        <LineBreak width="100%" />
      </CityNameWrapper>

      <CityNameWrapper></CityNameWrapper>
    </Wrapper>
  );
}

export default LandLordApartments;
