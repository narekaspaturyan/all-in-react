import React from "react";
import styled from "styled-components";
import StyledButton from "../../utils/StyledButton";
import Input from "../../utils/Input";
import CheckBox from "../../utils/CheckBox";
import LoginBottom from "./LoginBottom";

import { Formik } from "formik";
import * as Yup from "yup";

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
  height: 410px;
  background: ${({ theme }) => theme.white};
  box-shadow: 0px 15px 30px rgba(134, 117, 79, 0.12);
  border-radius: 0px 0px 5px 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;

  @media (max-width: 767px) {
    width: 330px;
    height: 480px;
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
  /* font-family: Avenir; */
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 120%;
  color: ${({ theme }) => theme.dark_Grey};
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
  margin-top: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

function Login() {
  return (
    <Wrapper>
      <FormWrapper>
        <Span1>Hi, do we know you?</Span1>
        <Span2>Log in with the account?</Span2>
        <Formik
          initialValues={{ email: "", password: "", rememberData: false }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log("Logging in", values);
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
            rememberData: Yup.boolean().oneOf([false]),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum.")
              .matches(/(?=.*[0-9])/, "Password must contain a number."),
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
                    margin="20px 0"
                    name="email"
                    type="text"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                  <Input
                    margin="20px 0"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
                  )}

                  <CheckboxButtonWrapper>
                    <CheckboxAndTitleWrapper>
                      <CheckBox
                        onChange={handleChange}
                        name="rememberData"
                        value={values.rememberData}
                        type="checkbox"
                      />
                      <Span3>Remember Data</Span3>
                    </CheckboxAndTitleWrapper>
                    <StyledButton type="submit" disabled={isSubmitting}>
                      Login
                    </StyledButton>
                  </CheckboxButtonWrapper>
                </form>
              </FormInnerWrapper>
            );
          }}
        </Formik>
      </FormWrapper>
      <LoginBottom />
    </Wrapper>
  );
}

export default Login;
