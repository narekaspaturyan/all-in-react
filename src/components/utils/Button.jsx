import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: fit-content;
  height: fit-content;
  ${(props) => {
    if (props.margin) {
      return { margin: props.margin };
    }
    return "margin: 0px";
  }}
`;

const Btn = styled.button`
  width: ${({ width }) => (width ? width : "110px")};
  height: ${({ height }) => (height ? height : "40px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "10px"};
  font-family: Avenir;
  font-style: ${({ fontStyle }) => (fontStyle ? fontStyle : "normal")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 900)};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "18px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "1px"};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "uppercase"};
  border: ${({ border }) => (border ? border : "none")};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${({ size, theme, color, bgColor }) => {
    switch (size) {
      case "sm":
        return { "font-size": "12px" };
      case "lg":
        return {
          "font-size": "16px",
          width: "173px",
          height: "40px",
          color: color ? color : theme.white,
          backgroundColor: bgColor ? bgColor : theme.blue,
        };
      case "xl":
        return {
          "font-size": "18px",
          width: "286px",
          height: "52px",
          color: color ? color : theme.white,
          backgroundColor: bgColor ? bgColor : theme.blue,
        };
    }
    return {
      fontSize: "14px",
      color: theme.white,
      backgroundColor: theme.blue,
    };
  }}
`;

function Button({
  borderRadius,
  fontStyle,
  fontWeight,
  lineHeight,
  textAlign,
  border,
  width,
  height,
  margin,
  size,
  title = "Button",
  color,
  bgColor,
}) {
  return (
    <Wrapper margin={margin}>
      <Btn
        fontStyle={fontStyle}
        borderRadius={borderRadius}
        fontWeight={fontWeight}
        lineHeight={lineHeight}
        textAlign={textAlign}
        border={border}
        width={width}
        height={height}
        bgColor={bgColor}
        color={color}
        size={size}
      >
        {title}
      </Btn>
    </Wrapper>
  );
}

export default Button;
