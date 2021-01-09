import React from "react";
import styled from "styled-components";
import Button from "../../../utils/Button";
import Input from "../../../utils/Input";
import RegisterBottom from "./RegisterBottom";
import { useState } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

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
  width: 550px;
  height: fit-content;
  left: 0px;
  top: 0px;
  background: ${(props) => props.theme.white};
  border-radius: 5px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 30px;
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
  height: 21px;
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #202020;
  margin: 10px 0;
  /* color: ${(props) => props.theme.dark_Grey}; */
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

const CheckboxButtonWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Checkbox = styled.input`
  border: 2px solid #002052;
  border-radius: 3px;
  height: 22px;
  width: 22px;
  margin: 0px 20px 0px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 80px 0;
  width: 100%;
`;

function Register(props) {
  const [password, setPassword] = useState("");

  console.log(password, "password");
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <Span1>Nice to meet you, fill in your data</Span1>
          <Form>
            <Input width="480px" margin="10px 0" placeholder="Gender" />
            <Input width="480px" margin="10px 0" placeholder="Full Name" />
            <Input width="480px" margin="10px 0" placeholder="E-mail" />
            <Input
              width="480px"
              margin="10px 0"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              width="480px"
              margin="10px 0"
              type="password"
              placeholder="Repeat Password"
            />

            <PasswordStrengthMeter password={password} />
            <Span3>
              Your password should consist of at least 8 characters including at
              least 1 digit and at least 1 special character.
            </Span3>
            <CheckboxButtonWrapper>
              <Span2>
                <Checkbox type="checkbox" /> Accept privacy policy
              </Span2>
              <Span2>
                {" "}
                <Checkbox type="checkbox" />
                Accept Terms and conditions
              </Span2>
            </CheckboxButtonWrapper>
            <RegisterBottom />
            <ButtonWrapper>
              <Button title="Register" size="xl" />
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default Register;
