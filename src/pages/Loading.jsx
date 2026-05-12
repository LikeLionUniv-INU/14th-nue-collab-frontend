// 로딩 페이지
import styled from "styled-components";
import Scroll from "../components/Scroll.jsx";

import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

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

// 말풍선 (아래쪽 꼬리)
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
    top: 100%;

    // 이 수치 바꿔서 꼬리 위치 조정
    left: 45%;

    border-width: 12px;
    border-style: solid;
    border-color: #eedbc6 transparent transparent transparent;
  }
`;

const Message = styled.div`
  color: #eedbc6;
  font-size: 18px;
  margin-bottom: 20px;
`;

// 껍데기 - 항상 고정된 크기
const BarWrapper = styled.div`
  width: 70%; // 고정 너비
  background-color: #eedbc6; // 갈색 배경
  overflow: hidden; // Bar가 밖으로 삐져나오지 않게
  border-radius: 10px;
`;

// 채워지는 부분 - percent에 따라 너비가 변함
const Bar = styled.div`
  width: ${(props) => props.$percent}%; // 0% → 100% 로 변함
  height: 20px;
  background-color: #a2392d;
  transition: width 0.3s ease; // 부드럽게 채워지는 애니메이션
  position: relative;
`;

// -----------------------------------------------------------

export default function TemplatePage() {
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();

  return (
    <Background>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />
        <Content>
          <SpeechBubble>어르신이 분석 중!</SpeechBubble>
          <br />
          <img
            src="/임시할아버지.png"
            alt="할아버지"
            style={{ width: "150px" }}
          />
          <br />
          {percent}%
          <BarWrapper>
            <Bar $percent={percent} />
          </BarWrapper>
        </Content>
      </ScrollArea>
    </Background>
  );
}
