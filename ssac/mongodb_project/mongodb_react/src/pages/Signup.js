import React from "react";
import FullCenterContainer from "../components/common/container/FullCenterContainer";
import SignUpContainer from "../container/auth/SignupContainer";

function Signup() {
  return (
    <>
      <FullCenterContainer>
        <SignUpContainer />
      </FullCenterContainer>
    </>
  );
}

export default Signup;
