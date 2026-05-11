import { useState } from "react";
import styled from "styled-components";
import PopupModal from "../components/PopupModal";

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

// 상단 가로 정렬 레이아웃
const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

// 상단 텍스트박스
const TextBox = styled.div`
  position: relative;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 15px;
  width: 90%;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
`;

// -----------------------------------------------------------

export default function ResultPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Background>
      {isModalOpen && (
        <PopupModal
          title="Tips"
          content={
            <>
              궁금한 살을 눌러 내용을 자세히 확인해보세요.
              <br />
              <br />
              홍연으로 이어 좋은 살은 더욱 강하게 만들고, 청연으로 이어 나쁜
              살을 무력화 시킬 수 있습니다!
            </>
          }
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />
        <Content>
          <ProfileRow>
            <img src="/임시할아버지.png" style={{ width: "50px" }} />
            <TextBox>asdf</TextBox>
          </ProfileRow>

          <div
            style={{
              backgroundColor: "#EEDBC6",
              width: "85%",
              minHeight: "340px",
              padding: "20px",
              borderRadius: "10px",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <TextBox
              style={{
                backgroundColor: "#DCB98E",
                width: "100%",
                padding: "8px 15px",
                fontSize: "14px",
              }}
            >
              사용자 입력 정보
            </TextBox>
          </div>
        </Content>
      </ScrollArea>
    </Background>
  );
}
