import React from "react";
import styled from "styled-components";
import PlusIcon from "../../../iconsAndLogos/plusIcon";

import StyledButton from "../../../utils/StyledButton";
import HeaderSpan from "../../../utils/HeaderSpan";
import ApartmentCard from "./ApartmentCard";

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 50px;
  background-color: ${({ theme }) => theme.white};
`;

const ApartmentWrapper = styled.div`
  margin: 60px;
`;

function LandLordApartments(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <HeaderSpan>My Apartments</HeaderSpan>
        <StyledButton width="284px" height="52px" justifyContent="center">
          <PlusIcon margin="0 10px 0 0" /> Add New Apartment
        </StyledButton>
      </InnerWrapper>
      <ApartmentWrapper>
        {" "}
        <ApartmentCard />
        <ApartmentCard />
      </ApartmentWrapper>
    </Wrapper>
  );
}

export default LandLordApartments;
