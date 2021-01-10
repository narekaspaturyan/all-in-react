import React from "react";
import styled from "styled-components";
import Header from "../../landing/Header";
import YourProfile from "./YourProfile";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${(props) => props.theme.white};
`;

const Span = styled.span`
  height: 29px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: ${(props) => props.theme.dark_Blue};
  height: 95px;
  font-size: 36px;
  margin: 50px 0 0 50px;
`;

function YourProfileMain(props) {
  return (
    <>
      <Header title="Account" navBar={true} />
      <Wrapper>
        <Span>Your Profile</Span>
        <YourProfile />
      </Wrapper>
    </>
  );
}

export default YourProfileMain;
