// 마지막 누에고치 팀 홍보 페이지
import styled from "styled-components";
import Typewriter from "../components/Typewriter.jsx";

// 배경
const Background = styled.div`
  background-color: #b6b6b6;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 100%; // 박스 가로 길이 조정
  box-sizing: border-box;
  font-size: 14px;
  text-align: left;
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
    border-color: transparent transparent #eaddcb transparent;
  }
`;
// 아래쪽 메세지 박스
const ModalBox = styled.div`
  background-color: #eaddcb;
  width: 100%; // 박스 가로 길이 조정
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
  word-break: keep-all;
`;

const Red = styled.span`
  color: #ff0000;
`;
const Blue = styled.span`
  color: #0000ff;
`;

export default function Ending() {
  return (
    <Background>
      <Container>
        <img src="/실뭉치.png" style={{ width: "100vw" }} />
        {/*여기에 추후 누에고치팀에서 받은 이미지 삽입*/}
        <SpeechBubble>
          <Typewriter>
            {`허허.. 살의 기운은 확인했으니...\n이제 그대를 기다리는 인연의 이야기로 함께 떠나보겠느냐?`}
          </Typewriter>
        </SpeechBubble>
        <ModalBox>
          <Description>
            <a
              href="https://www.game-ping.kr/games/ninth-rebirth-demo"
              title="아홉수 환생 게임하러 가기"
            >
              [게임하러 가기]
            </a>{" "}
            <br />
            <br />
            {/*추후 링크들 삽입*/}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("준비 중입니다!");
              }}
              title="누에고치 부스 위치 보기!"
            >
              [부스 위치 보기]
            </a>{" "}
            <br />
            <br />
            <a
              href="https://www.game-ping.kr/posts/59"
              title="개발일지 보러 가기"
            >
              [개발일지 보기]
            </a>
          </Description>
        </ModalBox>
      </Container>
    </Background>
  );
}
