import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px 0;
  background-color: ${({ theme }) => theme.white};
  height: 60px;
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
  margin-bottom: 20px;
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
  letter-spacing: 0.699999988079071px;
  text-align: center;
  align-content: center;
  width: 240px;
  border-radius: 10px;
  height: 52px;
  border: none;
  ${({ tenat, theme }) => {
    if (tenat) {
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
  border: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 18px;
  letter-spacing: 0.699999988079071px;
  text-align: center;
  align-content: center;
  width: 240px;
  border-radius: 10px;
  height: 52px;
  ${({ tenat, theme }) => {
    if (!tenat) {
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

function RegisterBottom(props) {
  const [tenat, setTenat] = useState(true);

  return (
    <Wrapper>
      <Span1>Who are you?</Span1>
      <Div>
        <ButtonTenat
          onClick={(e) => {
            e.preventDefault();
            setTenat(true);
          }}
          tenat={tenat}
        >
          Tenat
        </ButtonTenat>
        <ButtonLandLord
          onClick={(e) => {
            e.preventDefault();
            setTenat(false);
          }}
          tenat={tenat}
        >
          LandLord
        </ButtonLandLord>
      </Div>
    </Wrapper>
  );
}

export default RegisterBottom;
