import React, { useState } from "react";
import Header from "../../landing/Header";
import styled from "styled-components";
import Button from "../../../utils/Button";
import Input from "../../../utils/Input";

import NewPasswordBottom from "./NewPasswordBottom";
import PasswordStrengthMeter from "../register/PasswordStrengthMeter";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  position: static;
  width: 440px;
  height: fit-content;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme.white};
  box-shadow: 0px 15px 30px rgba(134, 117, 79, 0.12);
  border-radius: 0px 0px 5px 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 40px;
`;

const Span1 = styled.span`
  height: 29px;
  top: calc(50% - 29px / 2 - 140.5px);
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  color: ${(props) => props.theme.dark_Grey}; ;
`;

const Span2 = styled.span`
  height: 22px;
  margin-top: 20px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 150%;
  color: ${(props) => props.theme.dark_Grey};
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
  margin: 30px 0;
  /* color: ${(props) => props.theme.dark_Grey}; */
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 360px;
`;

function NewPassword(props) {
  const [password, setPassword] = useState("");

  return (
    <>
      <Header title="Account" />
      <Wrapper>
        <FormWrapper>
          <Span1>Let’s try again</Span1>
          <Span2>Enter your new Password</Span2>
          <Form>
            <Input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              margin="20px 0"
              type="password"
              placeholder="Password"
            />
            <Input
              margin="20px 0"
              type="password"
              placeholder="Reset Password"
            />

            <PasswordStrengthMeter width="360px" password={password} />
            <Span3>
              Your password should consist of at least 8 characters including at
              least 1 digit and at least 1 special character.
            </Span3>
            <ButtonWrapper>
              <Button size="lg" title="Save Password" />
            </ButtonWrapper>
          </Form>
        </FormWrapper>
        <NewPasswordBottom />
      </Wrapper>
    </>
  );
}

export default NewPassword;
