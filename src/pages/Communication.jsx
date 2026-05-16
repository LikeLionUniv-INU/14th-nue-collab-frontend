import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GranpaAnimation from "../components/GranpaAnimation.jsx";
import Typewriter from "../components/Typewriter.jsx";

const Background = styled.div`
  background-color: #b6b6b6;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 250px;
  height: 300px;
  overflow: hidden;
  border-radius: 45px 45px 10px 10px;
  background-color: #eedbc6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 12px solid #dcb98e;
  margin-top: 10px;
  align-self: flex-end;
`;

const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const Red = styled.span`
  color: #ff0000;
`;
const Blue = styled.span`
  color: #0000ff;
`;

export default function Communication() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const dialogs = [
    "나는 총 16가지의 실을 볼 수 있다네.",
    <>
      그 중에서 자신에게 힘이 되는 <Red>붉은 색의 홍연 살</Red>과, <br />
      흐름을 방해하는 <Blue> 푸른색의 청연 살</Blue>도 있고
      <br />
      간혹 2% 확률로 특별한 살도 나온단다.
    </>,
    "자네의 생년월일을 먼저 알려주게나.",
  ];

  // 클릭 시 대사 넘기기 로직
  const handleNext = () => {
    if (step < dialogs.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/birth");
    }
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
            <div key={step}>
              <Typewriter>{dialogs[step]}</Typewriter>
            </div>
            <SpeechClick />
          </SpeechBubble>
        </Content>
      </ScrollArea>
    </Background>
  );
}
