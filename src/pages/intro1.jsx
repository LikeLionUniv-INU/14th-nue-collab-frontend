//인트로(1) 페이지

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

const Grandimg = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <Background onClick={() => navigate("/intro2")}>
      <Scroll>
        <img src="두루마리.png" />
        <Content>
          <Grandimg>
            <img src="임시할아버지.png" />
          </Grandimg>
          <br />
          <br />
          <TextBox>
            사주 삶이란 인연의 시작점이라 할 수 있지
            <br />
            <br />
            너의 인연은 어떤지 한번 들여다 보자꾸나.
          </TextBox>
        </Content>
      </Scroll>
    </Background>
  );
}
