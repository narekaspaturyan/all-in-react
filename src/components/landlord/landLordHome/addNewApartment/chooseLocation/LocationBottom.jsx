import React from "react";
import styled from "styled-components";
import colors from "../../../../../config/colors";
import Input from "../../../../utils/Input";
import StyledButton from "../../../../utils/StyledButton";
import TextSpan from "../../../../utils/TextSpan";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
`;

function LocationBottom(props) {
  return (
    <Wrapper>
      <InnerWrapper>
        <TextSpan
          margin="20px 0 20px 0"
          fontWeight={900}
          fontSize="18px"
          lineHeight="22px"
          color={colors.dark_Grey}
        >
          Location
        </TextSpan>

        <Input
          backgroundColor="linear-gradient(282.38deg, #FFFFFF 0.64%, #FFFFFF 75.95%)"
          width="534px"
          height="60px"
          borderRadius="8px"
          placeholder="Enter a place, city, street or pincode"
          boxShadow="-12px -6px 24px rgba(255, 255, 255, 0.4), 1px 4px 8px rgba(126, 126, 126, 0.08)"
        />
      </InnerWrapper>
    </Wrapper>
  );
}

export default LocationBottom;
