import React from "react";
import styled from "styled-components";
import Card from "./Card";

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 540px;
  background-color: ${(props) => props.theme.blue_Grey};
`;

function Footer(props) {
  return (
    <FooterWrapper>
      <Card />
      <Card />
      <Card />
    </FooterWrapper>
  );
}

export default Footer;
