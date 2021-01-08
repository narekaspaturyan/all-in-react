import React from "react";
import styled from "styled-components";

const RightSectionWrapper = styled.div`
  width: 55%;
  height: auto;
  border: dotted red;
  overflow: hidden;
`;

const BigBoxInnerWraper = styled.div`
  padding-top: 160px;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  padding-left: 40%;
`;

const BgBox = styled.div`
  background-color: #262626;
  display: inline-block;
  height: 377px;
  width: 377px;
  overflow: hidden;
  margin: 5px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.dark_Grey};
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
  &:hover {
    background-color: #a31313;
  }
`;

const SmallBoxInnerWraper = styled.div`
  padding-top: 5px;
  transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  padding-left: 40%;
`;

const SmBox = styled.div`
  background-color: #262626;
  display: inline-block;
  height: 179px;
  width: 179px;
  overflow: hidden;
  filter: drop-shadow(0px 4px 35px rgba(0, 0, 0, 0.05));
  border-radius: 20px;
  &:hover {
    background-color: #a31313;
  }
`;

function BodyRight(props) {
  return (
    <RightSectionWrapper>
      <BigBoxInnerWraper>
        <BgBox></BgBox>
        <BgBox></BgBox>
      </BigBoxInnerWraper>
      <SmallBoxInnerWraper>
        <SmBox></SmBox>
      </SmallBoxInnerWraper>
    </RightSectionWrapper>
  );
}

export default BodyRight;
