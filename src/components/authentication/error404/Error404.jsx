import React from "react";
import styled from "styled-components";
import Button from "../../utils/Button";
import Error404Icon from "../../landing/iconsAndLogos/Error404Icon";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapperLeft = styled.div`
  margin: 100px 0 0 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.white};
`;

const Span1 = styled.span`
  margin-top: 30px;
  width: 370px;
  height: 95px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 120%;
  color: ${(props) => props.theme.blue_Grey}; ;
`;

const WrapperRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${(props) => props.theme.white};
`;

function Error404(props) {
  return (
    <Wrapper>
      <WrapperLeft>
        <Error404Icon />
        <Span1>Sorry, we are already working on fixing this error</Span1>
        <Button margin="100px 0 0 0" size="xl" title="Go to main screen" />
      </WrapperLeft>
    </Wrapper>
  );
}

export default Error404;
