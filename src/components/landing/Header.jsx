import React from "react";
import styled from "styled-components";

import EazyRentLogo from "./iconsAndLogos/EazyRentLogo";
import UserImageIcon from "./iconsAndLogos/UserImageIcon";

const Head = styled.header`
  position: relative;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  height: 67px;
  border-radius: 0px;
  box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
  background-color: ${(props) => props.theme.white};
`;

const LogoWrapper = styled.span`
  position: relative;
  width: 25px;
  height: 25px;
  left: 25px;
  top: 20px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`;

const SignInAndUserContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 15px;
  width: auto;
  right: 20px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.text_Grey};
`;

const Span = styled.span`
  width: 100%;
  cursor: pointer;
  margin: 0 15px;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  li {
    width: 150px;
    display: inline;
    align-items: center;
    justify-content: center;
    /* font-family: Avenir; */
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.5px;
    margin: 0;
    color: ${(props) => props.theme.text_Grey};
    cursor: pointer;
  }
`;

function Header({ title = "SignIn", navBar = false }) {
  return (
    <Head>
      <LogoWrapper>
        <EazyRentLogo />
      </LogoWrapper>
      <SignInAndUserContainer>
        {navBar && (
          <Ul>
            <li>Make a match</li>
            <li>Add an Appartment</li>
            <li>My Matches</li>
            <li>Appartment listings</li>
            <li>My Calendar</li>
          </Ul>
        )}
        <Span>
          {" "}
          <UserImageIcon />
        </Span>{" "}
        <Span>{title}</Span>{" "}
      </SignInAndUserContainer>{" "}
    </Head>
  );
}

export default Header;
