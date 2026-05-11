// 인트로(2) 페이지
import styled from "styled-components";
import Scroll from "../components/Scroll.jsx";

import { useNavigate } from "react-router-dom";

// ---------------------공통 레이아웃-----------------------------
const Background = styled.div`
  background-color: #341d02;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px; /* 모바일 화면 최대 너비 제한 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollImage = styled.img`
  width: 90%;
  height: auto;
`;

const Content = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%); /* 두루마리 정중앙에 컨텐츠 배치 */
  width: 70%; /* 두루마리 안쪽 여백 고려 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 말풍선 (위쪽 꼬리)
const SpeechBubble = styled.div`
  position: relative;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 15px;
  margin-top: 5vh; // 말풍선 위치에 따라 변경
  width: 90%;
  box-sizing: border-box;
  font-size: 14px;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;

    // 이 수치 바꿔서 꼬리 위치 조정
    left: 15%;

    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent #eedbc6 transparent;
  }
`;

// -----------------------------------------------------------

export default function Intro2() {
  const navigate = useNavigate();

  return (
    <Background onClick={() => navigate("/Intro3")}>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />

        <Content>
          <img src="/임시할아버지.png" style={{ width: "180px" }} />

          <SpeechBubble>
            "사주 살이란 인연의 시작점이라고 할 수 있지
            <br />
            <br />
            너의 인연은 어떤지 한번 들여다보자꾸나."
          </SpeechBubble>
        </Content>
      </ScrollArea>
    </Background>
  );
}
