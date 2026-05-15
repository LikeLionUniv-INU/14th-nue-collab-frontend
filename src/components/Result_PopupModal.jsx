// 결과 팝업모달
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

// 실제 모달 박스
const ModalBox = styled.div`
  background-color: #eaddcb;
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

const Title = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  word-break: keep-all;
`;

// 다음으로 버튼
const NextButton = styled.button`
  background-color: #dcb88e;
  border: none;
  border-radius: 10px;
  padding: 8px 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
`;
// 결과 저장 버튼
const ResultSaveButton = styled.button`
  background-color: #dcb88e;
  border: none;
  border-radius: 10px;
  padding: 4px 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 10px;
`;

// 메세지 구역
const Message = styled.div`
  margin-top: 10px;
`;

const Red = styled.span`
  color: #ff0000;
`;
const Blue = styled.span`
  color: #0000ff;
`;

export default function Result_PopupModal({ message, onClose }) {
  return (
    <Overlay>
      <ModalBox>
        <Title>결과 확인</Title>
        <Description>
          <Red>홍연</Red>으로 강화된 인연
          <br />
          00살
          <br />
          00살
        </Description>
        <Description>
          <Blue>청연</Blue>으로 풀어낸 인연
          <br />
          00살
          <br />
          00살
        </Description>
        <Message>
          <Description>{message}</Description>
        </Message>{" "}
        {/*여기에는 버튼2개위에 있는 메세지 삽입하는 부분*/}
        <ResultSaveButton /*여기에 결과화면 저장 기능 삽입*/>
          결과 저장
        </ResultSaveButton>
        <NextButton onClick={onClose}>다음으로</NextButton>
      </ModalBox>
    </Overlay>
  );
}
