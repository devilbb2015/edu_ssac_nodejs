import React from "react";
import styled from "styled-components";
import BoarderBox from "../common/box/BoarderBox";
import RoundedButton from "../common/button/RoundedButtion";
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

const StyledRoundedButton = styled(RoundedButton)`
  background: orange;
`;

function SignInComponent() {
  return (
    <BoarderBox>
      <InputTitle>회원가입</InputTitle>
      <FormWrap>
        <InputWrap>
          <InputLable>유저 아이디</InputLable>
          <RoundedInput />
        </InputWrap>
        <InputWrap>
          <InputLable>이름</InputLable>
          <RoundedInput />
        </InputWrap>
        <InputWrap>
          <InputLable>비밀 번호</InputLable>
          <RoundedInput />
        </InputWrap>
        <StyledRoundedButton>회원가입</StyledRoundedButton>
      </FormWrap>
    </BoarderBox>
  );
}

export default SignInComponent;
