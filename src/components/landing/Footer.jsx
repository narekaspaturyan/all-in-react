import React from "react";
import styled from "styled-components";
import Card from "./Card";

import smallImage from "./img/small.png";

const FooterWrapper = styled.footer`
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 540px;
  background-color: ${({ theme }) => theme.blue_Grey};
`;

const SmallImageWrapper = styled.div`
  position: absolute;
  right: 300px;
  top: 443px;
`;

function Footer(props) {
  return (
    <FooterWrapper>
      <SmallImageWrapper>
        <img src={smallImage} alt="" />
      </SmallImageWrapper>
      <Card />
      <Card />
      <Card />
    </FooterWrapper>
  );
}

export default Footer;
