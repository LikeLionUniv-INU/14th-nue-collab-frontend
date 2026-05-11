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
  transform: translate(-50%, -50%);
  width: 70%;
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
  margin-bottom: 2vh;
`;

// 상단 텍스트박스
const TextBox = styled.div`
  position: relative;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 14px;
  width: 90%;
  box-sizing: border-box;
  font-size: 12px;
  text-align: center;
`;

// --------------------- 리스트 아이템 스타일 -----------------------------
const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px;
  background-color: #eedbc6;
  border-radius: 8px;
  box-sizing: border-box;

  /* lucky면 파란색, unlucky면 빨간색 테두리 */
  border: 2px solid ${(props) => (props.$type === "lucky" ? "blue" : "red")};
  cursor: pointer;
`;

const NumberBadge = styled.div`
  background-color: #dcb88e;
  width: 20px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 12px;
`;

const ItemName = styled.div`
  flex: 1;
  text-align: left;
  font-size: 12px;
`;
// -----------------------------------------------------------

// --------------------- 버튼 스타일 -----------------------------
const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;

const LeftButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const CircleButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  cursor: pointer;
  text-align: center;
  word-break: keep-all;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ActionButton = styled(CircleButton)`
  background-color: #dcb88e;
  color: ${(props) => props.color || "black"};
`;

const TipsButton = styled(CircleButton)`
  background-color: #8c3636;
  color: white;
`;
// -----------------------------------------------------------

// 스크롤 전용 리스트 박스 (흰부분, 내용 길어지면 스크롤 가능)
const ScrollableListBox = styled.div`
  background-color: #eedbc6;
  width: 100%;
  height: 400px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  /* 모바일 회색 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default function ResultPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // 서버 연동 전 임시 데이터
  const apiData = {
    birthDate: "2002-04-12",
    pillars: "임오년 갑진월 임자일",
    totalCount: 4,
    sinSals: [
      {
        key: "cheon_eul_gwi_in",
        name: "천을귀인",
        hanja: "天乙貴人",
        type: "lucky",
      },
      { key: "do_hwa_sal", name: "도화살", hanja: "桃花殺", type: "unlucky" },
      {
        key: "baek_ho_dae_sal",
        name: "백호대살",
        hanja: "白虎大殺",
        type: "unlucky",
      },
      {
        key: "tae_geuk_gwi_in",
        name: "태극귀인",
        hanja: "太極貴人",
        type: "lucky",
      },
      {
        key: "tae_geuk_gwi_in",
        name: "태극귀인",
        hanja: "太極貴人",
        type: "lucky",
      },
      {
        key: "tae_geuk_gwi_in",
        name: "태극귀인",
        hanja: "太極貴人",
        type: "lucky",
      },
    ],
  };

  return (
    <Background>
      {/* 팝업 모달 */}
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
          {/* 상단 프로필 영역 */}
          <ProfileRow>
            <img src="/임시할아버지.png" style={{ width: "50px" }} />
            <TextBox>어르신의 한마디</TextBox>
          </ProfileRow>

          {/* 하단 사주 결과 리스트 영역 */}
          <ScrollableListBox>
            <TextBox
              style={{
                backgroundColor: "#DCB98E",
                width: "100%",
                padding: "8px 15px",
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              {apiData.pillars}
            </TextBox>

            {/* API 데이터 매핑 영역 */}
            {apiData.sinSals.map((sal, index) => (
              <ListItem key={sal.key} $type={sal.type}>
                <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <NumberBadge>{index + 1}</NumberBadge>
                  <ItemName>
                    {sal.name} ({sal.hanja})
                  </ItemName>
                </div>
                <div>→</div>
              </ListItem>
            ))}

            <ButtonArea>
              <LeftButtonGroup>
                <ActionButton color="red">
                  살<br />
                  강화
                </ActionButton>
                <ActionButton color="blue">
                  살<br />
                  무력화
                </ActionButton>
              </LeftButtonGroup>

              <TipsButton onClick={() => setIsModalOpen(true)}>TIPS</TipsButton>
            </ButtonArea>
          </ScrollableListBox>
        </Content>
      </ScrollArea>
    </Background>
  );
}
