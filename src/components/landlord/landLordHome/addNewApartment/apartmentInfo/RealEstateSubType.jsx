import React, { useState } from "react";
import styled from "styled-components";
import TextSpan from "../../../../utils/TextSpan";
import CustomCheckBox from "../../../../utils/CustomCheckBox";

import home4 from "./images/apartmentTypes/bg.png";
import home5 from "./images/apartmentTypes/bg2.png";
import home6 from "./images/apartmentTypes/bg3.png";
import home7 from "./images/apartmentTypes/bg4.png";
import home8 from "./images/apartmentTypes/bg5.png";
import home9 from "./images/apartmentTypes/bg6.png";

import colors from "../../../../../config/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
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

const BottomInfoWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 18px;
  width: 130px;
`;

function RealEstateSubType(props) {
  const [checked, setChecked] = useState(true);

  const [realEstateSubType, setRealEstateSubType] = useState({
    penthouse: true,
    house: false,
    atticFloor: false,
    maisonette: false,
    other: false,
    loft: false,
  });
  const handleClick = (apartmentType) => {
    let obj = { ...realEstateSubType };
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        obj[k] = false;
      }
    }
    obj[apartmentType] = true;
    setRealEstateSubType(obj);
  };

  return (
    <Wrapper>
      <ImagesWrapper>
        <ImageWrapper image={home4}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              square
              checked={realEstateSubType.penthouse}
              onClick={() => handleClick("penthouse")}
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
              checked={realEstateSubType.house}
              onClick={() => handleClick("house")}
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
              checked={realEstateSubType.atticFloor}
              onClick={() => handleClick("atticFloor")}
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
              checked={realEstateSubType.maisonette}
              onClick={() => handleClick("maisonette")}
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
              checked={realEstateSubType.loft}
              onClick={() => handleClick("loft")}
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
              checked={realEstateSubType.other}
              checked={realEstateSubType.other}
              onClick={() => handleClick("other")}
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
    </Wrapper>
  );
}

export default RealEstateSubType;
