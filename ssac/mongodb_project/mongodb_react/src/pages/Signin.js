import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SignInContainer from "../container/auth/SignInContainer";

function Signin() {
  return (
    <>
      <FullCenterContainer>
        <SignInContainer />
      </FullCenterContainer>
    </>
  );
}

export default Signin;
