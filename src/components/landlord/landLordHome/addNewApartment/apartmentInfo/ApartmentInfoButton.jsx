import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0 110px 0;
  background-color: ${({ theme }) => theme.white};
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Span1 = styled.span`
  height: 29px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.dark_Grey}; ;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 52px;
  background-color: ${({ theme }) => theme.light_Grey};

  @media (max-width: 767px) {
    width: 240px;
  }
`;

const ButtonTenat = styled.button`
  font-family: "Avenir";
  &:focus {
    outline: none;
  }
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 1;
  text-align: center;
  align-content: center;
  text-transform: uppercase;
  width: 261px;
  border-radius: 10px;
  height: 52px;
  border: none;
  ${({ bool, theme }) => {
    if (bool) {
      return {
        backgroundColor: theme.blue_Grey,
        color: theme.white,
      };
    } else return theme.light_Grey;
  }};

  @media (max-width: 767px) {
    width: 120px;
  }
`;

const ButtonLandLord = styled.button`
  font-family: "Avenir";
  &:focus {
    outline: none;
  }
  text-transform: uppercase;
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  align-content: center;
  width: 261px;
  border-radius: 10px;
  height: 52px;
  ${({ bool, theme }) => {
    if (!bool) {
      return {
        backgroundColor: theme.blue_Grey,
        color: theme.white,
      };
    } else return theme.light_Grey;
  }};

  @media (max-width: 767px) {
    width: 120px;
  }
`;

function RegisterBottom({
  showInterior,
  buttonOption1,
  buttonOption2,
  setButtonOption,
  bool,
}) {
  return (
    <Wrapper>
      {showInterior && <Span1>Interior</Span1>}
      <Div>
        <ButtonTenat
          onClick={(e) => {
            e.preventDefault();
            setButtonOption(true);
          }}
          bool={bool}
        >
          {buttonOption1}
        </ButtonTenat>
        <ButtonLandLord
          onClick={(e) => {
            e.preventDefault();
            setButtonOption(false);
          }}
          bool={bool}
        >
          {buttonOption2}
        </ButtonLandLord>
      </Div>
    </Wrapper>
  );
}

export default RegisterBottom;
