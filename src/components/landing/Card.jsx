import React from "react";
import styled from "styled-components";
import ArrowRightIcon from "./iconsAndLogos/ArrowRightIcon";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 422px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.blue};
  margin: 55px 20px;
`;

const CardBottomTextAndArowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin-top: 80%;
`;

const Span = styled.span`
  /* font-family: Avenir; */
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: 29px;
  letter-spacing: 0px;
  text-align: left;
`;

const Eclipse = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.white};
  cursor: pointer;
`;

function Card(props) {
  return (
    <Wrapper>
      <CardBottomTextAndArowWrapper>
        <Span>Popular</Span>
        <Eclipse>
          <ArrowRightIcon />
        </Eclipse>
      </CardBottomTextAndArowWrapper>
    </Wrapper>
  );
}

export default Card;
