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
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  width: 550px;
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

function RoomDetails(props) {
  const [count, setCount] = useState([
    { name: "bathroom", count: 1 },
    { name: "bedroom", count: 1 },
    { name: "kitchen", count: 1 },
    { name: "balcony", count: 1 },
    { name: "parkning slots", count: 1 },
  ]);

  const handleAddition = () => {};

  const handleSubtraction = () => {};

  return (
    <Wrapper>
      <InnerWrapper>
        {count.map((el) => {
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
