import styled from "styled-components";
import colors from "../../config/colors";

const TextSpan = styled.span`
  ${({
    b,

    backgroundColor = "fff",
    borderRadius = "0px",

    color = colors.light_Grey_Inactive,

    lineHeight = "100%",
    margin = "0px",

    fontSize = "14px",
    fontStyle = "normal",
    fontWight = "normal",

    textAlign = "center",

    width = "fit-content",
    height = "42px",
  }) => {
    return {
      border: b ? "dotted green" : null,

      backgroundColor,
      borderRadius,

      color,

      lineHeight,
      margin,

      fontSize,
      fontStyle,
      fontWight,

      textAlign,

      width,
      height,
    };
  }}/* font-family: Avenir; */
`;

export default TextSpan;
