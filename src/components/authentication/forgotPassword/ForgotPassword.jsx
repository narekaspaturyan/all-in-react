import React from "react";
import styled from "styled-components";
import ForgotPasswordBottom from "./ForgotPasswordBottom";
import Input from "../../utils/Input";
import StyledButton from "../../utils/StyledButton";

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
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // setTimeout(() => {
            //   console.log("Logging in", values);
            //   setSubmitting(false);
            // }, 500);
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <FormInnerWrapper>
                <form onSubmit={handleSubmit}>
                  <Input
                    margin="0 0 20px 0"
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
                  <StyledButton
                    type="submit"
                    disabled={isSubmitting}
                    fontSize="16px"
                    width="173px"
                    height="40px"
                  >
                    Reset Password
                  </StyledButton>
                </form>
              </FormInnerWrapper>
            );
          }}
        </Formik>
      </FormWrapper>
      <ForgotPasswordBottom />
    </Wrapper>
  );
}

export default ForgotPassword;
