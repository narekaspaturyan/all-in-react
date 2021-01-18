import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../../../../config/colors";
import LineBreak from "../../../../utils/LineBreak";
import StyledSlider from "../../../../utils/StyledSlider";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  /* border: dotted red; */
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  width: ${({ width }) => (width ? width : "500px")};
  margin-bottom: 52px;
`;

const SpanHeader = styled.span`
  font-family: "Avenir";
  text-transform: capitalize;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.dark_Grey};
`;

const SpanCount = styled.span`
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.fancy_Green};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

function SliderWithInfo({
  width = "513px",
  header,
  count,
  other = "+",
  value = 10,
  setValue,
}) {
  return (
    <Wrapper>
      <InnerWrapper width={width}>
        <SpanHeader>{header}</SpanHeader>
        <SpanCount>
          {count}
          {other}
          <LineBreak
            width="100%"
            color={colors.dark_Grey}
            margin="10px 0 0 0"
            borderRadius="2px"
          />
        </SpanCount>
      </InnerWrapper>
      <StyledSlider width={width} value={value} setValue={setValue} />
    </Wrapper>
  );
}

export default SliderWithInfo;
