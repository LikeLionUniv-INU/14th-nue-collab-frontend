// 마지막 누에고치 팀 홍보 팝업 모달
import styled from "styled-components";

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

// 사진, 위쪽말풍선, 아래쪽 말풍선을 배열하는 말풍선
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

//위쪽 메세지 박스
const SpeechBubble = styled.div`
  position: relative;
  background-color: #eaddcb;
  border-radius: 10px;
  padding: 15px;
  margin-top: 7.5vh; // 말풍선 위치에 따라 변경
  width: 113%; // 박스 가로 길이 조정
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
    border-color: transparent transparent #eaddcb transparent;
  }
`;
// 아래쪽 메세지 박스
const ModalBox = styled.div`
  background-color: #eaddcb;
  width: 150%; // 박스 가로 길이 조정
  max-width: 320px;
  border-radius: 10px;
  padding: 20px 50px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
`;

const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  word-break: keep-all;
`;

const Red = styled.span`
  color: #ff0000;
`;
const Blue = styled.span`
  color: #0000ff;
`;

export default function Last_Result_PopupModal() {
  return (
    <Overlay>
      <Container>
        <img
          src="/임시할아버지_1.png"
          style={{ width: "180px", height: "180px" }}
        />{" "}
        {/*여기에 추후 누에고치팀에서 받은 이미지 삽입*/}
        <SpeechBubble>
          <Description>
            모든 살을 모으셨군요!
            <br />
            <br />
            <Red>홍연</Red>의 살을 강화하고 <Blue>청연</Blue>의 살을 날려버리러
            가볼까요?
          </Description>
        </SpeechBubble>
        <ModalBox>
          <Description>
            <a href="" title="아홉수 환생 게임하러 가기">
              [게임하러 가기]
            </a>{" "}
            <br />
            <br />
            {/*추후 링크들 삽입*/}
            <a href="" title="누에고치 부스 위치 보기!">
              [부스 위치 보기]
            </a>{" "}
            <br />
            <br />
            <a href="" title="개발일지 보러 가기">
              [개발일지 보기]
            </a>
          </Description>
        </ModalBox>
      </Container>
    </Overlay>
  );
}
