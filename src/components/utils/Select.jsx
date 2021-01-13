import React, { useState } from "react";
import styled from "styled-components";

const Selected = styled.select`
  width: 480px;
  height: 52px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.light_Grey_Inactive};
  font-size: 14px;
  border: none;
  margin-left: 10px;
  :focus {
    outline: none;
  }
  option {
    color: black;
    background: ${({ theme }) => theme.white};
    display: flex;
    white-space: pre;
    min-height: 20px;
  }

  @media (max-width: 767px) {
    width: 240px;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 480px;
  height: 54px;
  padding: 0 10px 0 0px;
  border: 1px solid rgba(134, 117, 79, 0.2);
  border-radius: 6px;

  @media (max-width: 767px) {
    width: 240px;
  }
`;

function Select() {
  const [gender, setGender] = useState("");

  return (
    <Div>
      <Selected>
        <option value="" hidden>
          Gender
        </option>
        <option value="male">Male</option>{" "}
        <option value="female">Female</option>
      </Selected>
    </Div>
  );
}

export default Select;
