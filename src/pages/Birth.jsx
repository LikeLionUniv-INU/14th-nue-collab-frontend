import styled from "styled-components";
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

const StartButton = styled.button`
  font-size: 20px;
  width: 220px;
  height: 47px;
  background-color: #eedbc6;
  border: none;
  padding: 10px;
  border-radius: 8.75px;
  margin-top: 6vh; // 위치에 따라 변경
  font-weight: bold;
`;

const Button = styled.button`
  font-size: 15px;
  width: 90%;
  height: 40px;
  background-color: #eedbc6;
  border: none;
  padding: 10px;
  border-radius: 8.75px;
  margin-top: 6vh; // 위치에 따라 변경
  text-align: left;
  margin: 7px 7px 7px 0;
`;

const BackButton = styled.button`
  padding: 0;
  font-size: 15px;
  background: none;
  border: none;
`;

const Btn = ({ OnClick, name }) => {
  return <Button onClick={OnClick}> {name}</Button>;
};

const StBtn = ({ OnClick, name }) => {
  return <StartButton onClick={OnClick}> {name}</StartButton>;
};

/* 
// 시작하기 버튼

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

export default function Birth() {
  const navigate = useNavigate();

  return (
    <Background>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />

        <Content>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: "12vw",
            }}
          >
            <BackButton onClick={() => navigate("/intro3")}>
              ← 뒤로가기
            </BackButton>
            <p
              style={{
                fontSize: "20px",
                marginBottom: "20%",
              }}
            >
              생년월일 입력 [양력]
            </p>
          </div>

          <Btn OnClick={() => {}} name="생년" />
          <Btn OnClick={() => {}} name="생월" />
          <Btn OnClick={() => {}} name="생일" />

          <StBtn OnClick={() => navigate("/result")} name="분석하기" />
        </Content>
      </ScrollArea>
    </Background>
  );
}
