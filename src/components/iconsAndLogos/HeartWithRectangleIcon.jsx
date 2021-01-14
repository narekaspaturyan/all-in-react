import React from "react";

function HeartWithRectangleIcon(props) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b)">
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0H26C31.5228 0 36 4.47715 36 10V26C36 31.5228 31.5228 36 26 36H10C4.47715 36 0 31.5228 0 26V10Z"
          fill="white"
          fill-opacity="0.2"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 25.68L16.84 24.624C12.72 20.888 10 18.416 10 15.4C10 12.928 11.936 11 14.4 11C15.792 11 17.128 11.648 18 12.664C18.872 11.648 20.208 11 21.6 11C24.064 11 26 12.928 26 15.4C26 18.416 23.28 20.888 19.16 24.624L18 25.68Z"
        stroke="white"
        stroke-width="2"
      />
      <defs>
        <filter
          id="filter0_b"
          x="-4"
          y="-4"
          width="44"
          height="44"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default HeartWithRectangleIcon;
