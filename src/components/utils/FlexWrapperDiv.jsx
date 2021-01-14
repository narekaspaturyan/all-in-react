import styled from "styled-components";

const FlexWrapperDiv = styled.div`
  ${({ margin = "0px" }) => {
    return {
      margin,
    };
  }}

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
`;

export default FlexWrapperDiv;
