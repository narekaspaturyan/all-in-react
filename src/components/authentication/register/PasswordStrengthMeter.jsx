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
      <span
        style={{
          // font-family: Avenir;
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "800",
          lineHeight: "21px",
          letterSpacing: "0px",
          textAlign: "left",
          margin: 0,
          color: "2E3034",
        }}
      >
        {"security"}
      </span>
      <div
        className="progress"
        style={{
          display: "flex",
          alignItems: "center",
          height: "20px",
          border: " 1px solid #D6C8A8",
          background: "#FCFBF8",
          width: width
            ? (() => {
                return parseInt(width) - 100 + "px";
              })()
            : "360px",
          borderRadius: "8px",
        }}
      >
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
    </Div>
  );
};

export default PasswordStrengthMeter;
