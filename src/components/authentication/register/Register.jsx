import React, { useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";

import CheckBox from "../../utils/CheckBox";
import Input from "../../utils/Input";
import Select from "../../utils/Select";

import RegisterBottom from "./RegisterBottom";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import StyledButton from "../../utils/StyledButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  form {
    @media (max-width: 767px) {
      width: 270px;
    }
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  position: static;
  width: 550px;
  height: fit-content;
  background: ${(theme) => theme.white};
  border-radius: 5px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 30px;
  @media (max-width: 767px) {
    width: 300px;
  }
`;

const Div = styled.div`
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
  color: ${({ theme }) => theme.dark_Grey};
  @media (max-width: 767px) {
    width: 240px;
    margin-bottom: 20px;
  }
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

const CheckboxButtonWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 80px 0;
  width: 100%;
  @media (max-width: 767px) {
    width: 240px;
  }
`;

function Register(props) {
  return (
    <Wrapper>
      <FormWrapper>
        <Span1>Nice to meet you, fill in your data</Span1>
        <Div>
          <Select />
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatPassword: "",
              fullName: "",
              termsAndConditions: false,
              privacyPolicy: false,
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
              }, 500);
            }}
            validationSchema={Yup.object().shape({
              fullName: Yup.string()
                .min(1, "Full Name  is too short - should be 1 chars minimum.")
                .max(
                  50,
                  "Full Name  is too long - should be no more than 50 chars."
                )
                .required("Required"),
              email: Yup.string().email().required("Required"),
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
              termsAndConditions: Yup.boolean().oneOf(
                [true],
                "You should accept Terms and conditions"
              ),

              privacyPolicy: Yup.boolean().oneOf(
                [true],
                "You should accept Privacy policy"
              ),
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
                <form onSubmit={handleSubmit}>
                  <Input
                    width="480px"
                    margin="10px 0"
                    placeholder="Full Name"
                    name="fullName"
                    value={values.emailfullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.fullName && touched.fullName && "error"}
                  />
                  {errors.fullName && touched.fullName && (
                    <div className="input-RegisterFeedback">
                      {errors.fullName}
                    </div>
                  )}
                  <Input
                    name="email"
                    width="480px"
                    margin="10px 0"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  {errors.email && touched.email && (
                    <div className="input-RegisterFeedback">{errors.email}</div>
                  )}
                  <Input
                    name="password"
                    width="480px"
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
                    width="480px"
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
                  <PasswordStrengthMeter password={values.password} />
                  <Span3>
                    Your password should consist of at least 8 characters
                    including at least 1 digit and at least 1 special character.
                  </Span3>
                  <CheckboxButtonWrapper>
                    <Span2>
                      <CheckBox
                        onChange={handleChange}
                        value={values.privacyPolicy}
                        type="checkbox"
                        name="privacyPolicy"
                        border="2px solid #002052"
                        margin="0px 20px 0px 0"
                      />{" "}
                      Accept privacy policy
                    </Span2>
                    {errors.privacyPolicy && touched.privacyPolicy && (
                      <span className="input-RegisterFeedback">
                        {errors.privacyPolicy}
                      </span>
                    )}
                    <Span2>
                      {" "}
                      <CheckBox
                        onChange={handleChange}
                        value={values.termsAndConditions}
                        type="checkbox"
                        name="termsAndConditions"
                        border="2px solid #002052"
                        margin="0px 20px 0px 0"
                      />
                      Accept Terms and conditions
                    </Span2>
                    {errors.termsAndConditions &&
                      touched.termsAndConditions && (
                        <span className="input-RegisterFeedback">
                          {errors.termsAndConditions}
                        </span>
                      )}
                  </CheckboxButtonWrapper>
                  <RegisterBottom />
                  <ButtonWrapper>
                    <StyledButton
                      fontSize="18px"
                      width="286px"
                      height="52px"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Register
                    </StyledButton>
                  </ButtonWrapper>
                </form>
              );
            }}
          </Formik>
        </Div>
      </FormWrapper>
    </Wrapper>
  );
}

export default Register;
