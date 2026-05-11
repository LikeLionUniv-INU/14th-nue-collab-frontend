import styled from "styled-components";

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

/* 
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
*/

/*
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
*/

/*
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
    left: 50%;

    border-width: 12px;
    border-style: solid;
    border-color: #eedbc6 transparent transparent transparent;
  }
`;
*/

// -----------------------------------------------------------

export default function TemplatePage() {
  return (
    <Background>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />

        <Content>
          {/* 아래에 두루마리 안쪽 내용 작성 (지금은 이미지랑 멘트 영역으로 나눴는데, 필요시 더 나눠야 함) */}
          {/* 이미지 영역 */}
          <img src="/임시할아버지.png" style={{ width: "180px" }} />

          {/* 멘트 영역 */}
          <SpeechBubble>멘트 멘트 멘트 멘트</SpeechBubble>
        </Content>
      </ScrollArea>
    </Background>
  );
}
