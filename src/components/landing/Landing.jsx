import React from "react";
import styled from "styled-components";
import Body from "./Body";
import Footer from "./Footer";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.white};
  display: flex;
  flex-direction: column;
`;

function Landing(props) {
  return (
    <Wrapper>
      <Body />
      <Footer />
    </Wrapper>
  );
}

export default Landing;
