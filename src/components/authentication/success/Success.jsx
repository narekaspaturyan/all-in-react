import React from "react";
import styled from "styled-components";
import SuccessIcon from "../../iconsAndLogos/SuccessIcon";

import colors from "../../../config/colors";
import StyledButton from "../../utils/StyledButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
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
  color: ${({ theme }) => theme.dark_Grey}; ;
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
  color: ${({ theme }) => theme.light_Grey_Inactive};
`;

function Success(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <SuccessIcon />
        <Span1>Success!</Span1>
        <Span2>Your account has been successfully registered</Span2>

        <StyledButton
          margin="40px 0"
          fontSize="18px"
          width="286px"
          backgroundColor={colors.fancy_Green}
        >
          {" "}
          Nice
        </StyledButton>
      </InnerWrapper>
    </Wrapper>
  );
}

export default Success;
