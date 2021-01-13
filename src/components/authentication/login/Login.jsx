import React from "react";
import styled from "styled-components";
import Button from "../../utils/Button";
import Input from "../../utils/Input";
import LoginBottom from "./LoginBottom";

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
  height: 400px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 15px 30px rgba(134, 117, 79, 0.12);
  border-radius: 0px 0px 5px 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media (max-width: 767px) {
    width: 330px;
    height: 450px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const Span3 = styled.span`
  height: 21px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #202020;
  margin: 0 105px 0 20px;
  /* @media (max-width: 767px) {
    margin: 0px;
  } */
`;

const CheckboxButtonWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Checkbox = styled.input`
  border: 1px solid #002052;
  border-radius: 3px;
  height: 22px;
  width: 22px;
  margin: 0;
`;

const CheckboxAndTitleWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    margin: 20px 0;
  }
`;

function Login(props) {
  return (
    <Wrapper>
      <FormWrapper>
        <Span1>Hi, do we know you?</Span1>
        <Span2>Log in with the account?</Span2>
        <Form>
          <Input margin="20px 0" placeholder="E-mail" />
          <Input margin="20px 0" type="password" placeholder="Password" />

          <CheckboxButtonWrapper>
            <CheckboxAndTitleWrapper>
              <Checkbox type="checkbox" />
              <Span3>Remember Data</Span3>
            </CheckboxAndTitleWrapper>
            <Button title="Login" />
          </CheckboxButtonWrapper>
        </Form>
      </FormWrapper>
      <LoginBottom />
    </Wrapper>
  );
}

export default Login;
