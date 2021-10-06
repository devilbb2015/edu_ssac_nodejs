import styled from "styled-components";
import {
    AiOutlineSearch,
    AiOutlineBell,
    AiOutlineComment,
  } from "react-icons/ai";

const NavbarWrap = styled.div`
  height: 6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  width: 100%;
  background: #ffffff;
`;

const NavContainer = styled.div`
  max-width: 99.6rem;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavFrontWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavLogo = styled.img`
height: 2.3rem;
  margin-left: 2rem;
`;

const NavLinkWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3rem;
`;

const NavStyledLink = styled.div`
font-family: Pretendard, sans-serif;
letter-spacing: 0.005rem;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  color: #555555;
  margin-right: 10px;
`;

const NavProfileWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavIconsWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavStyledIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  & + & {
    margin-left: 2rem;
  }
`;

const NavProfileImg = styled.img`
  width: 3.4rem;
  height: 3.4rem;
  margin-left: 3rem;
  border-radius: 1.6rem;
`;

function NavbarComponent() {
  return (
      <>
        <NavbarWrap>
        <NavContainer>
          <NavFrontWrap>
            <NavLogo src = {"https://careerly.co.kr/_next/static/images/img-logo-789fb5a9000960c8e86ed6e1a0f54a2f.png"} />
            <NavLinkWrap>
                <NavStyledLink>프로필 탐색</NavStyledLink>
                <NavStyledLink>인턴 채용공고</NavStyledLink>
            </NavLinkWrap>
            </NavFrontWrap>
          <NavProfileWrap>
            <NavIconsWrap>
              <NavStyledIcon>
                <AiOutlineSearch />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineComment />
              </NavStyledIcon>
              <NavStyledIcon>
                <AiOutlineBell />
              </NavStyledIcon>
            </NavIconsWrap>
            <NavProfileImg
              src={
                "https://k.kakaocdn.net/dn/c2Ywnq/btqxC6B4Q6H/5ejBCvk2rdaisPRdkJxGs0/m1.jpg?w=200&h=200"
              }
            />
          </NavProfileWrap>
        </NavContainer>
      </NavbarWrap>
      </>

  )
}

export default NavbarComponent;
