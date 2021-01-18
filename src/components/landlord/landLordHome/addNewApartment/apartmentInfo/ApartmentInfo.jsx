import React, { useState } from "react";
import styled from "styled-components";

import colors from "../../../../../config/colors";
import { Link } from "react-router-dom";

import StyledButton from "../../../../utils/StyledButton";
import ApartmentInfoButton from "./ApartmentInfoButton";
import CustomCheckBox from "../../../../utils/CustomCheckBox";
import RealEstateType from "./RealEstateType";
import RealEstateSubType from "./RealEstateSubType";

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

const InfoSpan2 = styled.span`
  font-family: "Avenir";
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

      <RealEstateType />

      <InfoSpan1>Please choose which type of apartment</InfoSpan1>
      <RealEstateSubType />

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
      <Link style={{ textDecoration: "none" }} to="/chooseLocation">
        <StyledButton height="52px" margin="0 0 10px 0" width="557px">
          Next
        </StyledButton>
      </Link>
    </Wrapper>
  );
}

export default ApartmentInfo;
