import React from "react";
import styled from "styled-components";
import FullCenterContainer from "../container/common/FullCenterContainer";

const BorderBox = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 50rem;
  padding: 3rem;
  align-items: center;
  margin-top: 1rem;
`;

const BodyHead = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const ProfileImg = styled.img`
  width: 3rem;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
`;

const Name = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  height: 2.5rem;
  align-text: center;
  margin-left: 1rem;
`;

const Job = styled.div`
  height: 2.5rem;
  font-size: 1.2rem;
  font-color: #999999;
  font-weight: 400;
  margin-left: 1rem; ;
`;

const TimeLine = styled.div`
  height: 2.5rem;
  font-size: 1.2rem;
  font-color: #999999;
  font-weight: 400;
  margin-left: 1rem; ;
`;

const ContentBox = styled.div`
  //border: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 1rem;
`;

const ImgBox = styled.img`
  width: 50rem;
  margin-top: 1rem;
`;

const BottomBox = styled.div``;

const BottomFavorite = styled.div``;

const Faviorte = styled.div``;

const BottomRepl = styled.div``;

const Suggestion = styled.div``;

const Share = styled.div``;

const Repl = styled.div``;

function Main() {
  return (
    <>
      <FullCenterContainer>
        <BorderBox>
          <BodyHead>
            <ProfileImg
              src={
                "https://careerly.co.kr/_next/static/images/img_profile-dummy-9e28d259cbf9e126af9c467a4bf0884f.png"
              }
            />
            <ProfileBox>
              <Name>유승범</Name>
              <Job>교육생</Job>
            </ProfileBox>
            <TimeLine>1시간 전</TimeLine>
          </BodyHead>
          <ContentBox>Content 글 내용</ContentBox>
          <ImgBox
            src={
              "https://publy-cdn.s3.ap-northeast-2.amazonaws.com/user-uploaded/90599/2021.10/20211003021114.jpeg"
            }
          />
          <BottomBox>
            <BottomFavorite>
              <Faviorte></Faviorte>
            </BottomFavorite>
            <BottomRepl>
              <Suggestion></Suggestion>
              <Share></Share>
              <Repl></Repl>
            </BottomRepl>
          </BottomBox>
        </BorderBox>
      </FullCenterContainer>
    </>
  );
}

export default Main;
