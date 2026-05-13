// 공통 팝업 모달 (내용만 갈이끼우면 됨)
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
  padding: 16px 20px;
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
  margin-bottom: 15px;
  word-break: keep-all;
`;

// 확인 버튼
const ConfirmButton = styled.button`
  background-color: #dcb88e;
  border: none;
  border-radius: 10px;
  padding: 8px 50px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  margin-bottom: 15px;
`;

export default function BirthPopupModal({ title, content, onClose }) {
  return (
    <Overlay>
      <ModalBox>
        <Title>{title}</Title>
        <Description>{content}</Description>

        <ConfirmButton onClick={onClose}>확인</ConfirmButton>
      </ModalBox>
    </Overlay>
  );
}
