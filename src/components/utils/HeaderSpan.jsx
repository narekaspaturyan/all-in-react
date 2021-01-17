import styled from "styled-components";

const HeaderSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Avenir";
  font-style: normal;
  font-weight: 900;
  line-height: 120%;
  color: ${({ theme }) => theme.dark_Blue};
  height: 95px;
  font-size: 36px;
  margin: 0px;
`;

export default HeaderSpan;
