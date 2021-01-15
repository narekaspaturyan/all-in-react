import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../utils/Input";

import NewPasswordBottom from "./NewPasswordBottom";
import PasswordStrengthMeter from "../register/PasswordStrengthMeter";

import { Formik } from "formik";
import * as Yup from "yup";
import StyledButton from "../../utils/StyledButton";

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

const FormInnerWrapper = styled.div`
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
  color: ${(theme) => theme.dark_Grey};
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

  @media (max-width: 767px) {
    width: 240px;
    margin: 40px 0px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 360px;

  @media (max-width: 767px) {
    width: 240px;
  }
`;

function NewPassword(props) {
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <FormWrapper>
        <Span1>Let’s try again</Span1>
        <Span2>Enter your new Password</Span2>
        <Formik
          initialValues={{
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
            repeatPassword: Yup.string()
              .when("password", {
                is: (val) => (val && val.length > 0 ? true : false),
                then: Yup.string().oneOf(
                  [Yup.ref("password")],
                  "Both password need to be the same"
                ),
              })
              .required("Both password need to be the same"),
          })}
        >
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <FormInnerWrapper>
                <form onSubmit={handleSubmit}>
                  <Input
                    name="password"
                    width="360px"
                    margin="10px 0"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  {errors.password && touched.password && (
                    <div className="input-RegisterFeedback">
                      {errors.password}
                    </div>
                  )}
                  <Input
                    name="repeatPassword"
                    width="360px"
                    margin="10px 0"
                    type="password"
                    placeholder="Repeat Password"
                    value={values.repeatPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.repeatPassword && touched.repeatPassword && "error"
                    }
                  />
                  {errors.repeatPassword && touched.repeatPassword && (
                    <div className="input-RegisterFeedback">
                      {errors.repeatPassword}
                    </div>
                  )}
                  <PasswordStrengthMeter
                    width="360px"
                    password={values.password}
                  />
                  <Span3>
                    Your password should consist of at least 8 characters
                    including at least 1 digit and at least 1 special character.
                  </Span3>
                  <ButtonWrapper>
                    <StyledButton
                      fontSize="16px"
                      width="173px"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Save Password
                    </StyledButton>
                  </ButtonWrapper>
                </form>
              </FormInnerWrapper>
            );
          }}
        </Formik>
      </FormWrapper>
      <NewPasswordBottom />
    </Wrapper>
  );
}

export default NewPassword;
