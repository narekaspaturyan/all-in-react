import React from "react";
import styled from "styled-components";

import Slider from "./sliderCard/Slider";
import ArrowLeftIcon from "../../iconsAndLogos/ArrowLeftIcon";
import ShevronIcon from "../../iconsAndLogos/ShevronIcon";
import img1 from "./img/1.png";
import PerfectFitCard from "./perfectFitCard/PerfectFitCard";
import MuchMoreCard from "./muchMoreCard/MuchMoreCard";
import BottomNavBar from "./bottomNavBar/BottomNavBar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const InnerWrapperMain = styled.div`
  border: solid 1px red;
  width: 375px;
  height: 536px;
  overflow-x: hidden;
  height: 100vh;
`;

const InnerWrapper1 = styled.div`
  width: 375px;
  height: 536px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-image: url(${img1});
`;

const InnerWrapper2 = styled.div`
  width: 375px;
  display: flex;
  align-items: center;
  margin-top: -100px;
`;

const InnerWrapper3 = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 375px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 16px;
`;

const AccountPicWrapper = styled.div`
  margin: 0px 23px;
  padding: 30px 0 0 0;
  width: 325px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccountPic = styled.div`
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.white};
  border-radius: 50%;
  box-sizing: border-box;
`;

const TextWrapper = styled.div`
  margin: 20px 24px;
  width: 326px;
  height: 82px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.white};
`;

const Button = styled.button`
  margin: 50px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 52px;
  width: 325px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue};
  /* font-family: Avenir; */
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
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
  color: ${({ theme }) => theme.white};
  margin-left: 20px;
  text-transform: uppercase;
`;

function LandingMobile(props) {
  return (
    <Wrapper>
      <InnerWrapperMain>
        <InnerWrapper1>
          <AccountPicWrapper>
            <ArrowLeftIcon />
            <AccountPic>Pic</AccountPic>
          </AccountPicWrapper>
          <TextWrapper>What type of Place do you want?</TextWrapper>
          <Button>
            <ButtonTextWrapper>Create Search Profile Now</ButtonTextWrapper>
            <ShevronWrapper>
              <ShevronIcon />
            </ShevronWrapper>
          </Button>
        </InnerWrapper1>
        <InnerWrapper2>
          {" "}
          <Slider />
        </InnerWrapper2>

        <InnerWrapper3>
          <PerfectFitCard />
        </InnerWrapper3>
        <InnerWrapper3>
          <MuchMoreCard />
        </InnerWrapper3>
      </InnerWrapperMain>
      <BottomNavBar />
    </Wrapper>
  );
}

export default LandingMobile;
