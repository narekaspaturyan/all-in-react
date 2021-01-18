import styled from "styled-components";

const LineBreak = styled.hr`
  ${({
    margin = "0px",
    width = "90%",
    color = "#efefef",
    borderRadius = "0px",
  }) => {
    return {
      backgroundColor: color,
      margin,
      width,
      borderRadius,
    };
  }}
  height: 1px;
`;

export default LineBreak;

// const Hr = styled.hr`
//   border: 0;
//   height: 1px;
//   border-top: 1px solid rgba(0, 0, 0, 0.1);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//   background-color: #efefef;
// `;

// background: #EFEFEF;

// function LineBreak({ margin = "0px auto", width = " 90%" }) {
//   return (
//     <div style={{ margin, width }}>
//       <Hr />
//     </div>
//   );
// }

// export default LineBreak;
