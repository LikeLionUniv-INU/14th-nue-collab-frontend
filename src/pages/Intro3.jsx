// 인트로(3) 페이지
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import GranpaAnimation from "../components/GranpaAnimation";
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

// 시작하기 버튼
const StartButton = styled.button`
  font-size: 20px;
  width: 220px;
  height: 47px;
  background-color: #eedbc6;
  border: none;
  padding: 10px;
  border-radius: 8.75px;
  margin-top: 6vh; // 위치에 따라 변경
`;

// 말풍선 (아래쪽 꼬리)
const SpeechBubble = styled.div`
  position: relative;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 5vh; // 말풍선 위치에 따라 변경
  width: 90%;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;

  &::after {
    content: "";
    position: absolute;
    top: 100%;

    // 이 수치 바꿔서 꼬리 위치 조정
    left: 50%;
    transform: translateX(-50%);

    border-width: 12px;
    border-style: solid;
    border-color: #eedbc6 transparent transparent transparent;
  }
`;

// -----------------------------------------------------------

export default function TemplatePage() {
  const navigate = useNavigate();

  return (
    <Background>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />

        <Content>
          <SpeechBubble>어르신이 분석 중!</SpeechBubble>
          <GranpaAnimation />
          {/* <img
            src="/임시할아버지.png"
            alt="할아버지"
            style={{ width: "150px" }}
          /> */}
          <StartButton onClick={() => navigate("/BirthDate")}>
            시작하기
          </StartButton>
          <img
            src="/로고.png"
            alt="로고"
            style={{ width: "63px", marginTop: "8vh" }}
          />
        </Content>
      </ScrollArea>
    </Background>
  );
}
