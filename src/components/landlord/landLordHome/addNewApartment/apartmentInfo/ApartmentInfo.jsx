import React, { useState } from "react";
import styled from "styled-components";
import home1 from "./images/realestateTypes/bg3.png";
import home2 from "./images/realestateTypes/bg1.png";
import home3 from "./images/realestateTypes/bg2.png";

import home4 from "./images/apartmentTypes/bg.png";
import home5 from "./images/apartmentTypes/bg2.png";
import home6 from "./images/apartmentTypes/bg3.png";
import home7 from "./images/apartmentTypes/bg4.png";
import home8 from "./images/apartmentTypes/bg5.png";
import home9 from "./images/apartmentTypes/bg6.png";

import colors from "../../../../../config/colors";

import StyledButton from "../../../../utils/StyledButton";
import ApartmentInfoButton from "./ApartmentInfoButton";
import CustomCheckBox from "../../../../utils/CustomCheckBox";
import TextSpan from "../../../../utils/TextSpan";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const InfoSpan1 = styled.span`
  font-size: 24px;
  line-height: 120%;
  width: 311px;
  height: 59px;
  font-style: normal;
  font-weight: 900;
  margin: 40px 0;
  color: ${({ theme }) => theme.dark_Blue};
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-image: ${({ image }) => `url(${image})`};
  height: 240px;
  width: 172px;
  background-position: center;
  border-radius: 10px;
  margin: 10px 0;
`;

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 544px;
`;

const InfoSpan2 = styled.span`
  /* font-family: Avenir; */
  width: 428px;
  height: 52px;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  font-style: normal;
  color: ${({ theme }) => theme.black};
  display: flex;
  align-items: center;
`;

const InfoSpanWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const BottomInfoWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 18px;
  width: 130px;
`;

const BottomInfoCheckWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 55px 0 18px 0;
`;

function ApartmentInfo(props) {
  const [rent, setRent] = useState(true);
  const [furnished, setFurnished] = useState(true);
  const [checked, setChecked] = useState(true);

  return (
    <Wrapper>
      <ApartmentInfoButton
        buttonOption1="rent"
        buttonOption2="sale"
        setButtonOption={setRent}
        bool={rent}
      />

      <InfoSpan1>What type of real estate do you want for rent?</InfoSpan1>

      <ImagesWrapper>
        {" "}
        <ImageWrapper image={home1}>
          {" "}
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Apartments
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>
        <ImageWrapper image={home2}>
          {" "}
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              House
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>
        <ImageWrapper image={home3}>
          {" "}
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Property
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>
      </ImagesWrapper>

      <InfoSpan1>Please choose which type of apartment</InfoSpan1>

      <ImagesWrapper>
        <ImageWrapper image={home4}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Penthouse
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>

        <ImageWrapper image={home5}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              House
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>
        <ImageWrapper image={home6}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Attic floor
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>
      </ImagesWrapper>

      <ImagesWrapper>
        <ImageWrapper image={home7}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Maisonette
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>

        <ImageWrapper image={home8}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Loft
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>

        <ImageWrapper image={home9}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
            <TextSpan
              margin="0 0 0 13px"
              fontWeight={800}
              fontSize="14px"
              color={colors.white}
            >
              Other
            </TextSpan>
          </BottomInfoWrapper>
        </ImageWrapper>
      </ImagesWrapper>

      <BottomInfoCheckWrapper>
        <CustomCheckBox
          margin="10px 20px 0 0"
          border={colors.blue_Grey}
          backgroundColor={colors.blue_Grey}
          square
          checked={checked}
          onClick={() => {
            setChecked(!checked);
          }}
        />
        <InfoSpanWrapper>
          <InfoSpan2>
            Let the Tenant select exclusive furnishing service from our partner
            furnished.de for leasing or buying fruniture for his new home.
          </InfoSpan2>
          <InfoSpan2>
            This Service is free for you, you don’t have to pay any fee or get
            in service/support with your tenant.
          </InfoSpan2>
        </InfoSpanWrapper>
      </BottomInfoCheckWrapper>

      <ApartmentInfoButton
        showInterior
        buttonOption1="furnished"
        buttonOption2="unfurnished"
        setButtonOption={setFurnished}
        bool={furnished}
      />

      <StyledButton height="52px" margin="95px 0 10px 0" width="557px">
        Next
      </StyledButton>
    </Wrapper>
  );
}

export default ApartmentInfo;
