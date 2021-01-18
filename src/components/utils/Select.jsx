import React, { useState } from "react";
import styled from "styled-components";

import { Field, ErrorMessage } from "formik";

const Selected = styled.div`
  width: 480px;
  height: 54px;
  border: 1px solid rgba(134, 117, 79, 0.2);
  border-radius: 6px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.light_Grey_Inactive};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:focus {
    outline: none;
  }

  .op {
    font-family: "Avenir";
    color: ${({ theme }) => theme.light_Grey_Inactive};
    background: ${({ theme }) => theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 52px;
    font-size: 14px;
    margin: 0 4%;
    border: none;
    :focus {
      outline: none;
    }
  }

  @media (max-width: 767px) {
    width: 240px;
    .op {
      width: 230px;
    }
  }
  margin: 10px 0;
`;

// const Div = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   width: 480px;
//   height: 54px;
//   padding: 0 10px 0 0px;
//   border: 1px solid rgba(134, 117, 79, 0.2);
//   border-radius: 6px;

//   @media (max-width: 767px) {
//     width: 240px;
//   }
// `;

function Asd({ label, name, options, ...rest }) {
  return (
    // <Div>
    <Selected>
      {/* <label htmlFor="name">{label}</label> */}
      <Field as="select" id={name} name={name} {...rest} className="op">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
    </Selected>
    // </Div>
  );
}

export default Asd;

// import React, { useState } from "react";
// import styled from "styled-components";

// const Selected = styled.select`
//   width: 480px;
//   height: 52px;
//   background: ${({ theme }) => theme.white};
//   color: ${({ theme }) => theme.light_Grey_Inactive};
//   font-size: 14px;
//   border: none;
//   margin-left: 10px;
//   :focus {
//     outline: none;
//   }
//   option {
//     color: black;
//     background: ${({ theme }) => theme.white};
//     display: flex;
//     white-space: pre;
//     min-height: 20px;
//   }

//   @media (max-width: 767px) {
//     width: 240px;
//   }
// `;
// const Div = styled.div`
//   display: flex;
//   align-items: flex-start;
//   justify-content: center;
//   width: 480px;
//   height: 54px;
//   padding: 0 10px 0 0px;
//   border: 1px solid rgba(134, 117, 79, 0.2);
//   border-radius: 6px;

//   @media (max-width: 767px) {
//     width: 240px;
//   }
// `;

// function Select() {
//   const [gender, setGender] = useState("");

//   return (
//     <Div>
//       <Selected>
//         <option value="" hidden>
//           Gender
//         </option>
//         <option value="male">Male</option>{" "}
//         <option value="female">Female</option>
//       </Selected>
//     </Div>
//   );
// }

// export default Select;
