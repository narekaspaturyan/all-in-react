import React from "react";

function HomeIcon(props) {
  let color = "#8F92A1";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.58801 19.9579V13.1368H10.8617H13.1354H15.4091V19.9579H18.8196V10.7608L11.9985 3.93979L5.17749 10.7608V19.9579H8.58801ZM11.9985 0.733887L23.2646 12H21.0933V22.2316H13.1354V15.4105H10.8617V22.2316H2.90379V12H0.732422L11.9985 0.733887Z"
        fill={color}
      />
      <mask
        id="mask0"
        masktype="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="23"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.58801 19.9579V13.1368H10.8617H13.1354H15.4091V19.9579H18.8196V10.7608L11.9985 3.93979L5.17749 10.7608V19.9579H8.58801ZM11.9985 0.733887L23.2646 12H21.0933V22.2316H13.1354V15.4105H10.8617V22.2316H2.90379V12H0.732422L11.9985 0.733887Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0)"></g>
    </svg>
  );
}

export default HomeIcon;
