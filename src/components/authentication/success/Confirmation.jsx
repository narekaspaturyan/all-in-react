import React from "react";
import styled from "styled-components";
import ConfirmationIcon from "../../landing/iconsAndLogos/ConfirmationIcon";

import Header from "../../landing/Header";

const Wrapper = styled.div`
  margin-top: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  width: 200px;
  color: ${(props) => props.theme.light_Grey_Inactive};
`;

const Button = styled.button`
  /* font-family: Avenir; */
  margin-top: 30px;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  border: none;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.blue};
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
  }
`;

function Confirmation(props) {
  return (
    <>
      <Header title="Account" />
      <Wrapper>
        <InnerWrapper>
          <ConfirmationIcon />
          <Span1>Confirmation sent!</Span1>
          <Span2>
            We have sent a confirmation letter to your mail, follow the link in
            it to continue
          </Span2>
          <Button>Resend Email</Button>
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

export default Confirmation;
