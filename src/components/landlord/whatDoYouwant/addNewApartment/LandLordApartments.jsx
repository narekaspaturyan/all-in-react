import React from "react";
import styled from "styled-components";
import PlusIcon from "../../../iconsAndLogos/plusIcon";

import StyledButton from "../../../utils/StyledButton";
import HeaderSpan from "../../../utils/HeaderSpan";

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: space-between;
  margin: 30px 50px;
  background-color: ${({ theme }) => theme.white};
`;

function LandLordApartments(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <HeaderSpan>My Apartments</HeaderSpan>
        <StyledButton width="284px" height="52px">
          <PlusIcon /> Add New Apartment
        </StyledButton>
      </InnerWrapper>
    </Wrapper>
  );
}

export default LandLordApartments;
