import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../utils/Input";
import Btn from "../../utils/StyledButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 0px;
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
  /* font-family: Avenir; */
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 21px;
  letter-spacing: 0px;
  text-align: left;
  /* color: ${(props) => props.theme.dark_Grey}; */
`;

const Button = styled.button`
  /* font-family: Avenir; */
  width: ${({ width }) => (width ? width : "480px")};
  margin: ${({ margin }) => (margin ? margin : "10px 0")};
  align-self: flex-end;
  height: 56px;
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.blue};
`;

const ImageWrapper = styled.div`
  width: 143px;
  height: 143px;
  border-radius: 10px;
  border: solid 1px ${(props) => props.theme.blue};
`;

const ImageAndButtonWrapper = styled.div`
  width: 480px;
  height: auto;
  display: flex;
  justify-content: space-around;
`;

function YourProfile(props) {
  const [password, setPassword] = useState("");

  console.log(password, "password");
  return (
    <>
      <Wrapper>
        <FormWrapper>
          <ImageAndButtonWrapper>
            <ImageWrapper>Img</ImageWrapper>
            <Button width="200px" margin="0px">
              Update Image
            </Button>
          </ImageAndButtonWrapper>
          <Form>
            <Span1>Name</Span1>
            <Input width="480px" margin="10px 0" placeholder="Name" />
            <Span1>Email</Span1>
            <Input width="480px" margin="10px 0" placeholder="Email" />
            <Span1>Phone</Span1>
            <Input width="480px" margin="10px 0" placeholder="Phone" />
            <Button>Change Password</Button>
          </Form>
          <Btn margin="35px 0px 0px 0px" width="480px" height="52px">
            Save chages
          </Btn>
        </FormWrapper>
      </Wrapper>
    </>
  );
}

export default YourProfile;
