import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-align: center;
  background-color: ${({ theme }) => theme.white};
`;

function DownTriangleIcon({ onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <svg
        width="7"
        height="6"
        viewBox="0 0 7 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.22658 5.35757C3.98588 5.7427 3.42499 5.7427 3.18429 5.35757L0.635012 1.27873C0.379183 0.869409 0.67346 0.338459 1.15616 0.338459L6.25471 0.338458C6.73741 0.338458 7.03168 0.869407 6.77585 1.27873L4.22658 5.35757Z"
          fill="black"
        />
      </svg>
    </Wrapper>
  );
}

export default DownTriangleIcon;
