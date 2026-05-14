// 대화창 공통 팝업 모달 (내용만 갈이끼우면 됨)
import styled from "styled-components";
import GranpaAnimation from "./GranpaAnimation.jsx";
// 화면 전체를 덮는 회색 배경
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: #b6b6b6;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 사진, 말풍선을 배열하는 말풍선
const Container = styled.div`
  width: 85%;
  max-width: 320px;
  border-radius: 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;
const Person_Box = styled.div`
  padding-top: 50px;
  width: 70%;
  aspect-ratio: 1 / 1.4;
  background-color: #eaddcb;
  border-radius: 40px 40px 0px 0px;
  position: relative;
  z-index: 1005;
`;

//할아버지 인물창 하반신 가리게 하는 박스
const Bottom_Mask = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 32%; /* 하반신을 가릴 만큼의 높이 */
  background-color: #b6b6b6;
  z-index: 1010; /* 캐릭터보다 위에 오도록 설정 */
`;

// 메세지 박스
const SpeechBubble = styled.div`
  position: relative;
  background-color: #eaddcb;
  border-radius: 10px;
  padding: 15px;
  margin-top: -10vh; // 말풍선 위치에 따라 변경
  width: 74%; // 박스 가로 길이 조정
  box-sizing: border-box;
  font-size: 14px;
  z-index: 1011;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;

    // 이 수치 바꿔서 꼬리 위치 조정
    left: 18%;

    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent #eaddcb transparent;
  }
`;

const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  word-break: keep-all;
`;

export default function Chat_PopupModal({ text }) {
  return (
    <Overlay>
      <Container>
        <Person_Box>
          <GranpaAnimation />
          <Bottom_Mask />
        </Person_Box>
        <SpeechBubble>{text}</SpeechBubble>
      </Container>
    </Overlay>
  );
}
