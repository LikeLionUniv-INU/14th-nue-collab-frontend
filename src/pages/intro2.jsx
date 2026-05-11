//인트로(2) 페이지

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Background = styled.div`
  background-color: #341d02; /* 배경색 */
  width: 100vw; /* 브라우저 화면의 가로 100% */
  height: 100vh; /* 브라우저 화면의 높이 100% */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Scroll = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Content = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grandimg = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  margin: 15px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #eedbc6;
  border-radius: 10px;
  //font-family:
`;

const Logo = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 10%;
  height: 10%;
`;

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <Background>
      <Scroll>
        <img src="두루마리.png" style={{ width: "100%", height: "auto" }} />
        <Content>
          <TextBox>어르신이 분석중!</TextBox>

          <Grandimg>
            <img src="임시할아버지.png" />
          </Grandimg>

          <TextBox>시작하기</TextBox>

          <Logo>
            <img src="로고.png" style={{ width: "300%", height: "auto" }} />
          </Logo>
        </Content>
      </Scroll>
    </Background>
  );
}
