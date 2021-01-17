import React from "react";
import styled from "styled-components";

import StarIcon from "../../../iconsAndLogos/StartIcon";

const Wrapper = styled.div`
  width: 321px;
  height: 109px;
  border-radius: 16px;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.white};
  /* filter: blur(1px); */
`;

const RatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 31px;
  background-color: #f2f2f2;
  border-radius: 8px;
`;
const RatingNumberSpan = styled.span`
  height: 18px;
  margin-left: 7px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.black};
`;

const CostWrapperSpan = styled.span`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.dark_Grey};
`;

const CostAndTatingWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  margin: 0px 20px;
`;

const AddresWrapperSpan = styled.div`
  font-family: "Avenir";
  margin: 10px 20px;
  height: 30px;
  width: 185px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.light_Grey_Inactive};
`;

function PerfectFitCardBottom(props) {
  return (
    <Wrapper>
      <CostAndTatingWraper>
        {" "}
        <CostWrapperSpan>$254,000</CostWrapperSpan>
        <RatingWrapper>
          <StarIcon />
          <RatingNumberSpan>4.7</RatingNumberSpan>
        </RatingWrapper>
      </CostAndTatingWraper>
      <AddresWrapperSpan>
        730 Columbus Ave, Manhattan, NY 10025
      </AddresWrapperSpan>
    </Wrapper>
  );
}

export default PerfectFitCardBottom;
