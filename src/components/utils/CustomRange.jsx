import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.white};
`;

const Span = styled.span`
  height: 10px;
  width: 10px;
  border-radius: 19px;
  display: flex;
  align-items: center;
  background-color: ${({ color, theme }) =>
    color ? theme.fancy_Green : " #CECECE"};
`;

const Hr = styled.hr`
  height: 2px;
  width: 99px;
  border-radius: 0px;
  display: flex;
  align-items: center;
  background-color: ${({ color, theme }) =>
    color ? theme.fancy_Green : " #CECECE"};
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 450px;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 68px;
  display: flex;
  align-items: center;
  color: ${({ color, theme }) => (color ? theme.fancy_Green : " #CECECE")};
  font-family: "Avenir";
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
`;

function RangeMain({ st1, st2, st3, st4, st5 }) {
  return (
    <Wrapper>
      <Ul>
        <Li color={st1}>1.Type</Li>
        <Li color={st2}>2.Loaction</Li>
        <Li color={st3}>3.Area</Li>
        <Li color={st4}>4.Info</Li>
        <Li color={st5}>5.Time</Li>
      </Ul>
      <InnerWrapper>
        <Span color={st1}></Span>
        <Hr color={st2}></Hr>
        <Span color={st2}></Span>
        <Hr color={st3}></Hr>
        <Span color={st3}></Span>
        <Hr color={st4}></Hr>
        <Span color={st4}></Span>
        <Hr color={st5}></Hr>
        <Span color={st5}></Span>
      </InnerWrapper>
    </Wrapper>
  );
}

export default RangeMain;
