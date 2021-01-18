import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uid } from "uuid";

import colors from "../../../../../config/colors";
import DownTriangleIcon from "../../../../iconsAndLogos/DownTriangleIcon";
import UpTriangleIcon from "../../../../iconsAndLogos/UpTriangleIcon";
import TextSpan from "../../../../utils/TextSpan";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  /* border: dotted red; */
`;

const InnerWrapper = styled.div`
  width: 513px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  height: 204px;
  width: 130px;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  margin: 8px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  height: 62px;
  width: 62px;
  box-shadow: -14.7898px -7.39489px 29.5795px rgba(255, 255, 255, 0.4),
    1.23248px 4.92992px 9.85985px rgba(126, 126, 126, 0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 800;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
`;

const CountWrapper = styled.div`
  height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.white};
`;

const SpanHeader = styled.span`
  align-self: flex-start;
  font-family: "Avenir";
  text-transform: capitalize;
  font-style: normal;
  font-weight: 900;
  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.dark_Grey};
  margin: 60px 0 40px 0;
`;

function RoomDetails(props) {
  const [details, setSetDetails] = useState([
    { name: "bathroom", count: 1 },
    { name: "bedroom", count: 1 },
    { name: "kitchen", count: 1 },
    { name: "balcony", count: 1 },
    { name: "parkning slots", count: 1 },
  ]);

  const handleAddition = (name) => {
    const arr = details.map((el) =>
      el.name === name ? { ...el, name: el.name, count: (el.count += 1) } : el
    );
    setSetDetails(arr);
  };

  const handleSubtraction = (name) => {
    const arr = details.map((el) =>
      el.name === name && el.count > 1
        ? { ...el, name: el.name, count: (el.count -= 1) }
        : el
    );
    setSetDetails(arr);
  };

  return (
    <Wrapper>
      <SpanHeader>Room Details</SpanHeader>
      <InnerWrapper>
        {details.map((el) => {
          return (
            <CardWrapper key={uid()}>
              <TextSpan
                fontWeight={800}
                fontSize="14px"
                lineHeight="150%"
                textAlign="center"
                textTransform="capitalize"
                color={colors.blue_Grey}
              >
                {el.name}
              </TextSpan>
              <CountWrapper>
                <UpTriangleIcon onClick={() => handleAddition(el.name)} />
                <Span>{el.count}</Span>
                <DownTriangleIcon onClick={() => handleSubtraction(el.name)} />
              </CountWrapper>
            </CardWrapper>
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
}

export default RoomDetails;
