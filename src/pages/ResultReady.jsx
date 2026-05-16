// 결과 준비 페이지
import styled from "styled-components";
import Scroll from "../components/Scroll.jsx";
import GranpaAnimation from "../components/GranpaAnimation";
import Typewriter from "../components/Typewriter.jsx";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ---------------------공통 레이아웃-----------------------------
const Background = styled.div`
  background-color: #b6b6b6;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//할아버지 애니메이션 뒷배경 박스
const ImageBox = styled.div`
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 45px 45px 10px 10px;
  background-color: #eedbc6;
  display: flex;
  justify-content: center;
`;

//할아버지 애니메이션 확대 및 위치 조정
const AnimationWrapper = styled.div`
  transform: scale(1.5) translateY(25%);
`;

const ScrollArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px; /* 모바일 화면 최대 너비 제한 */
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.5;

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

const SpeechClick = styled.div`
  position: relative;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 12px solid #dcb98e;
  margin-top: 10px;
  align-self: flex-end;
`;

// -----------------------------------------------------------

export default function ResultReady() {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(true);

  const handleNext = () => {
    if (isTyping) {
      setIsTyping(false);
      return;
    }
    navigate("/result");
  };

  return (
    <Background onClick={handleNext}>
      <ScrollArea>
        <Content>
          <ImageBox>
            <AnimationWrapper>
              <GranpaAnimation />
            </AnimationWrapper>
          </ImageBox>
          <SpeechBubble>
            <div>
              <Typewriter
                skip={!isTyping}
                onComplete={() => setIsTyping(false)}
              >
                "결과가 나왔네. 확인해 보겠나?"
              </Typewriter>
            </div>
            <SpeechClick />
          </SpeechBubble>
        </Content>
      </ScrollArea>
    </Background>
  );
}
