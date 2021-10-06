import React from "react";
import styled from "styled-components";

const ContainerWrap = styled.div`
  width: 100%;
  height: calc(100vh - 6rem); // 브라우저의 높이
  padding-top: 8rem;
  display: flex;
  justify-content: btween;
  align-items: center;
  flex-direction: column;
`;

function FullCenterContainer({ children }) {
  return (
    <>
      <ContainerWrap>{children}</ContainerWrap>
    </>
  );
}

export default FullCenterContainer;
