import React from "react";
import styled from "styled-components";
import SuccessIcon from "../../landing/iconsAndLogos/SuccessIcon";
import Button from "../../../utils/Button";
import colors from "../../../config/colors";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.white};
`;

const Span1 = styled.span`
  /* font-family: Avenir; */
  margin-top: 35px;
  font-size: 36px;
  font-style: normal;
  font-weight: 900;
  line-height: 43px;
  letter-spacing: 0px;
  text-align: center;
  color: ${(props) => props.theme.dark_Grey}; ;
`;

const Span2 = styled.span`
  /* font-family: Avenir; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: center;
  display: flex;
  align-items: center;
  margin: 10px 0;
  width: 250px;
  color: ${(props) => props.theme.light_Grey_Inactive};
`;

function Success(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <SuccessIcon />
        <Span1>Success!</Span1>
        <Span2>Your account has been successfully registered</Span2>
        <Button
          margin="40px 0"
          bgColor={colors.fancy_Green}
          title="Nice"
          size="xl"
        />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Success;
