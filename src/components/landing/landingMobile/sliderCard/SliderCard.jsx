import React from "react";
import styled from "styled-components";

import RedShevronRightIcon from "../../../iconsAndLogos/RedShevronRightIcon";

const Wrapper = styled.div`
  height: 344px;
  width: 220px;
  border-radius: 10px;
  margin: 0 20px;
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const Span1 = styled.div`
  width: 125px;
  height: 32px;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 1px;
  margin-right: 20px;

  color: ${({ theme }) => theme.white};
`;

const Span2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.white};
  border-radius: 10px;
`;

const SliderCard = () => {
  return (
    <Wrapper>
      <Div>
        <Span1>My Matches</Span1>
        <Span2>
          <RedShevronRightIcon />
        </Span2>
      </Div>
    </Wrapper>
  );
};

export default SliderCard;
