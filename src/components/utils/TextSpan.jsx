import styled from "styled-components";
import colors from "../../config/colors";

const TextSpan = styled.span`
  ${({
    b,
    alignSelf = "",

    backgroundColor = "fff",
    borderRadius = "0px",

    color = colors.light_Grey_Inactive,

    lineHeight = "100%",
    margin = "0px",

    fontSize = "14px",
    fontStyle = "normal",
    fontWeight = "normal",

    textAlign = "center",
    textTransform = "uppercase",

    width = "fit-content",
    height = "42px",
  }) => {
    return {
      alignSelf,

      border: b ? "dotted green" : null,

      backgroundColor,
      borderRadius,

      color,

      lineHeight,
      margin,

      fontSize,
      fontStyle,
      fontWeight,

      textAlign,
      textTransform,
      width,
      height,

      display: "flex",
      alignItems: "center",
      fontFamily: "Avenir",
    };
  }}
`;

export default TextSpan;
