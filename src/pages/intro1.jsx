//인트로 페이지
import styled from "styled-components";

const Background = styled.div`
  background-color: #341d02; /* 배경색 */
  width: 100vw; /* 브라우저 화면의 가로 100% */
  height: 100vh; /* 브라우저 화면의 높이 100% */
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Grandimg = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function IntroPage() {
  return (
    <Background>
      <Grandimg>
        <img src="임시할아버지.png" />
      </Grandimg>
      <br />
      <TextBox>
        <img src="말풍선.png" />
      </TextBox>
    </Background>
  );
}
