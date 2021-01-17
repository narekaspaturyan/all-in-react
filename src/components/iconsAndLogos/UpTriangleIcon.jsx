import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  margin: 0;
  padding: 0;
  cursor: pointer;
  text-align: center;
  background-color: ${({ theme }) => theme.white};
`;

function UpTriangleIcon({ onClick }) {
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
          d="M3.10545 0.783052C3.34616 0.397927 3.90704 0.397927 4.14774 0.783051L6.69702 4.86189C6.95285 5.27122 6.65857 5.80217 6.17587 5.80217H1.07732C0.594625 5.80217 0.300349 5.27122 0.556178 4.86189L3.10545 0.783052Z"
          fill="black"
        />
      </svg>
    </Wrapper>
  );
}

export default UpTriangleIcon;
