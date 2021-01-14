import styled from "styled-components";

const CheckBox = styled.input`
  ${({
    type = "checkbox",
    borderRadius = "3px",
    height = "22px",
    width = "22px",
    margin = "0px",
    name = "",
  }) => {
    return {
      type,
      borderRadius,
      height,
      width,
      margin,
      name,
    };
  }}
  border: 1px solid #002052;
`;

export default CheckBox;
