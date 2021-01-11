import styled from "styled-components";

const StyledButton = styled.button`
  ${({
    theme,

    backgroundColor = theme.blue,
    borderRadius = "10px",
    border = "none",

    color = theme.white,

    fontStyle = "normal",
    fontSize = "14px",
    fontWeight = 900,

    letterSpacing = "1px",
    lineHeight = "18px",

    textAlign = "center",
    textTransform = "uppercase",

    width = "110px",
    height = "40px",
    margin = "0px",
  }) => {
    return {
      // fontFamily: Avenir,
      backgroundColor,
      borderRadius,
      border,

      color,
      cursor: "pointer",

      fontStyle,
      fontSize,
      fontWeight,

      letterSpacing,
      lineHeight,

      textAlign,
      textTransform,
      theme,

      width,
      height,
      margin,
    };
  }};
`;

export default StyledButton;
