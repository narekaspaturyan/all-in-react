import React from "react";
import styled from "styled-components";
import ForgotPasswordBottom from "./ForgotPasswordBottom";
import Input from "../../utils/Input";
import Button from "../../utils/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  position: static;
  width: 440px;
  height: 290px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 15px 30px rgba(134, 117, 79, 0.12);
  border-radius: 0px 0px 5px 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media (max-width: 767px) {
    width: 330px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 40px;
`;

const Span1 = styled.span`
  height: 29px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  color: ${({ theme }) => theme.dark_Grey}; ;
`;

const Span2 = styled.span`
  height: 22px;
  margin-top: 20px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.dark_Grey};
`;

function ForgotPassword(props) {
  return (
    <Wrapper>
      <FormWrapper>
        <Span1>You forgot something?</Span1>
        <Span2>Enter you E-Mail and reset Password</Span2>
        <Form>
          {/* check input type */}
          <Input type="email" placeholder="E-mail" />
          <Button margin="20px 0px" title="Reset Password" size="lg" />
        </Form>
      </FormWrapper>
      <ForgotPasswordBottom />
    </Wrapper>
  );
}

export default ForgotPassword;
