import React from "react";
import styled from "styled-components";
import BorderBox from "../common/box/BorderBox";
import RoundedButton from "../common/button/RoundedButton";
import RoundedInput from "../common/input/RoundedInput";
import InputLable from "../common/text/InputLable";
import InputTitle from "../common/text/InputTitle";

const FormWrap = styled.div`
  margin-top: 2rem;
`;

const InputWrap = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

function SignInComponent({ onChangeInput, userInfo, onSubmit }) {
  const { userId, password } = userInfo;

  return (
    <BorderBox>
      <InputTitle>로그인</InputTitle>
      <FormWrap>
        <InputWrap>
          <InputLable>유저 아이디</InputLable>
          <RoundedInput name="userId" value={userId} onChange={onChangeInput} />
        </InputWrap>
        <InputWrap>
          <InputLable>비밀 번호</InputLable>
          <RoundedInput
            type="password"
            name="password"
            value={password}
            onChange={onChangeInput}
          />
        </InputWrap>
        <RoundedButton>로그인</RoundedButton>
      </FormWrap>
    </BorderBox>
  );
}

export default SignInComponent;
