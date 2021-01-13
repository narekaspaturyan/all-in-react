import React from "react";
import zxcvbn from "zxcvbn";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ width }) => {
    return width ? width : "480px";
  }};

  @media (max-width: 767px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    width: 240px;
  }
`;

const Span = styled.span`
  font-size: 14px;
  font-style: "normal";
  font-weight: "800";
  line-height: "21px";
  letter-spacing: "0px";
  text-align: "left";
  margin: 0;
  color: "2E3034";
  @media (max-width: 767px) {
    margin: 20px 0 10px 0;
  }
`;

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  border: 1px solid "#D6C8A8";
  background: "#FCFBF8";
  width: ${({ width }) => {
    return width
      ? (() => {
          return parseInt(width) - 100 + "px";
        })()
      : "360px";
  }};
  border-radius: 8px;
  @media (max-width: 767px) {
    width: 240px;
  }
`;

const PasswordStrengthMeter = ({ password, width }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  //   const createPassLabel = () => {
  //     switch (testResult.score) {
  //       case 0:
  //         return "Security Very weak";
  //       case 1:
  //         return "Security Weak";
  //       case 2:
  //         return "Security Fear";
  //       case 3:
  //         return "Security Good";
  //       case 4:
  //         return "Security Strong";
  //       default:
  //         return "";
  //     }
  //   };

  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#EA1111";
      case 1:
        return "#EA1111";
      case 2:
        return "#E68F04";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: "14px",
    border: " 1px solid #D6C8A8",
    borderRadius: "8px",
  });

  return (
    <Div width={width}>
      <Span>{"security"}</Span>
      <BarWrapper width={width} className="progress">
        <div className="progress-bar" style={changePasswordColor()}></div>
      </BarWrapper>
    </Div>
  );
};

export default PasswordStrengthMeter;
