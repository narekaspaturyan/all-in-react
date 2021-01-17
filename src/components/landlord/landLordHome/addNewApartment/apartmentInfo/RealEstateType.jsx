import React, { useState } from "react";
import styled from "styled-components";
import TextSpan from "../../../../utils/TextSpan";
import CustomCheckBox from "../../../../utils/CustomCheckBox";

import home1 from "./images/realestateTypes/bg3.png";
import home2 from "./images/realestateTypes/bg1.png";
import home3 from "./images/realestateTypes/bg2.png";

import colors from "../../../../../config/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
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

function RealEstateType(props) {
  const [checked, setChecked] = useState(true);

  const [realEstate, setRealEstate] = useState({
    apartment: true,
    house: false,
    property: false,
  });

  const handleClick = (apartmentType) => {
    let obj = { ...realEstate };
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        obj[k] = false;
      }
    }
    obj[apartmentType] = true;
    setRealEstate(obj);
  };

  return (
    <Wrapper>
      <ImagesWrapper>
        <ImageWrapper image={home1}>
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              checked={realEstate.apartment}
              onClick={() => handleClick("apartment")}
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
              checked={realEstate.house}
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
        <ImageWrapper image={home3}>
          {" "}
          <BottomInfoWrapper>
            <CustomCheckBox
              backgroundColor={colors.white}
              checked={realEstate.property}
              onClick={() => handleClick("property")}
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
    </Wrapper>
  );
}

export default RealEstateType;
