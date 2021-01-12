import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import HeartIcon from "./bottomNavBarIcons/HeartIcon";
import HomeIcon from "./bottomNavBarIcons/HomeIcon";
import MessageIcon from "./bottomNavBarIcons/MessageIcon";
import UserIcon from "./bottomNavBarIcons/UserIcon";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
  /* border: 1px solid ${({ theme }) => theme.black}; */
  height: 78px;
  width: 375px;
  position: absolute;
  bottom: 0px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -6px 32px 12px rgba(0, 0, 0, 0.27);
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 14px 52px 41px 52px;
`;

function BottomNavBar(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <NavLink to="/home">
          <HomeIcon />
        </NavLink>
        <NavLink to="/">
          <HeartIcon />
        </NavLink>
        <NavLink to="/">
          <MessageIcon />
        </NavLink>
        <NavLink to="/">
          <UserIcon />
        </NavLink>
      </InnerWrapper>
    </Wrapper>
  );
}

export default BottomNavBar;
