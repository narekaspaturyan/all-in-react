import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../utils/Button";
import Error404Icon from "../../iconsAndLogos/Error404Icon";

import bigImage from "../../landing/img/main.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: auto;
  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
  }
`;

const WrapperLeft = styled.div`
  margin: 100px 0 0 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.white};

  @media (max-width: 767px) {
    align-items: center;
    margin: 100px 0 0 0px;
  }
`;

const Span1 = styled.span`
  margin: 30px 0 100px 0;
  width: 370px;
  height: 95px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 120%;
  color: ${({ theme }) => theme.blue_Grey};

  @media (max-width: 767px) {
    text-align: center;
    width: 300px;
    height: 180px;
    margin: 30px 0 50px 0;
  }
`;

const WrapperRight = styled.div`
  width: 55%;
  height: 500px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1150px) {
    display: none;
  }
`;

const BigImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

function Error404(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <Wrapper>
      <WrapperLeft>
        <Error404Icon />
        <Span1>Sorry, we are already working on fixing this error</Span1>
        <NavLink to="/landing">
          <Button margin="0px" size="xl" title="Go to main screen" />
        </NavLink>
      </WrapperLeft>
      <WrapperRight>
        <BigImageWrapper>
          <img src={bigImage} alt="Landing" />
        </BigImageWrapper>
      </WrapperRight>
    </Wrapper>
  );
}

export default Error404;
