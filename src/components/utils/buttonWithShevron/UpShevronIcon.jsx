import React from "react";

function UpShevronIcon({ shevronColor }) {
  return (
    <svg
      width="18"
      height="11"
      viewBox="0 0 18 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 9L9 2L2 9"
        stroke={shevronColor ? shevronColor : "#538BF0"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default UpShevronIcon;
