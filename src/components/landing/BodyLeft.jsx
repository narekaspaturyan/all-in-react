import React from "react";
import styled from "styled-components";
import ShevronIcon from "./iconsAndLogos/ShevronIcon";

const LeftSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: 600;
  border: dotted red;
`;

const LeftSectionInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
  padding: 50%;
`;

const Span1 = styled.span`
  /* font-family: Avenir; */
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 43px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme.dark_Grey};
`;

const Span2 = styled.span`
  /* font-family: Avenir; */
  height: 37px;
  width: 318px;
  margin-top: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.light_Grey_Inactive};
`;

const Button = styled.button`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  width: 335px;
  left: 160px;
  top: 329px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.blue};
  //styleName: H4_uppercase_14;
  /* font-family: Avenir; */
  cursor: pointer;
  border: none;
`;

const ShevronWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background-color: #5077bd;
  border-radius: 8px;
`;

const ButtonTextWrapper = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 0.699999988079071px;
  text-align: center;
  color: ${(props) => props.theme.white};
  margin-left: 20px;
  text-transform: uppercase;
`;

function BodyLeft(props) {
  return (
    <LeftSectionWrapper>
      <LeftSectionInnerWrapper>
        <Span1>Just match and move</Span1>
        <Span2>
          We make your flat hunt easier than ever – receive personalized
          landlords’ offers today!
        </Span2>
        <Button>
          <ButtonTextWrapper>Create Search Profile Now</ButtonTextWrapper>
          <ShevronWrapper>
            <ShevronIcon />
          </ShevronWrapper>
        </Button>
      </LeftSectionInnerWrapper>
    </LeftSectionWrapper>
  );
}

export default BodyLeft;
