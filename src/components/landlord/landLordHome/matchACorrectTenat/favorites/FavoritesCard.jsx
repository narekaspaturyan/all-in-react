import React from "react";
import styled from "styled-components";

import colors from "../../../../../config/colors";

import LineBreak from "../../../../utils/lineBreak";
import TextSpan from "../../../../utils/TextSpan";
import StyledButton from "../../../../utils/StyledButton";

import faceImg from "../../../../../images/face.png";
import WhiteHeartIcon from "../../../../iconsAndLogos/WhiteHeartIcon";
import ButtonWithTrashCan from "../../../../utils/ButtonWithTrashCan";

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
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-image: url(${faceImg});
  height: 207px;
  width: 207px;
  border-radius: 10px;
`;

const ImageInfoWrapper = styled.div`
  margin-top: 11px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
  height: 40px;
`;

const BlureRactangle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  margin-right: 11px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: flex-start;
  width: 140px;
  height: 100%;
  margin-right: 80px;
`;

const TrashCanWrapper = styled.div`
  display: flex;
  align-self: flex-start;
  margin: 14px;
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

const BottomInfoWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
`;

function FavoritesCard(props) {
  return (
    <Wrapper>
      <ImageWrapper>
        <ImageInfoWrapper>
          <BlureRactangle>
            <WhiteHeartIcon />
          </BlureRactangle>
        </ImageInfoWrapper>
      </ImageWrapper>

      <InfoWrapper>
        <InfoSpan1>The woods</InfoSpan1>
        <InfoSpan2>1410 E Butker Pike, Ambler, PA 19002 Apartment 3</InfoSpan2>
        <StyledButton
          margin="20px 0 0 0"
          fontSize="12px"
          height="24px"
          width="83px"
        >
          2.3 miles
        </StyledButton>
        <LineBreak width="190px" margin="20px 16px 0px 0px" />
        <BottomInfoWrapper>
          <TextSpan width="80px" height="21px" fontWeight={800} color="#252525">
            Per Month
          </TextSpan>
          <TextSpan
            margin="0 0 0 30px"
            height="21px"
            fontSize="18px"
            fontWeight={900}
            color={colors.blue}
          >
            $337.000
          </TextSpan>
        </BottomInfoWrapper>
      </InfoWrapper>
      <TrashCanWrapper>
        <ButtonWithTrashCan />
      </TrashCanWrapper>
    </Wrapper>
  );
}

export default FavoritesCard;
