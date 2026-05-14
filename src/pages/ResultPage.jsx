import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  align-items: stretch;
  gap: 13px;
  width: 100%;
  margin-bottom: 2vh;
`;

// 상단 이미지
const ImageBox = styled.div`
  width: 30%;
  padding: 15px 4px 0 4px;
  background-color: #eedbc6;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  img {
    width: 90%;
    height: auto;
    display: block;
  }
`;

// 상단 텍스트박스
const TextBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 20px 14px;
  width: 90%;
  box-sizing: border-box;
  font-size: 10px;
  text-align: left;
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
  cursor: pointer;

  border: 2px solid ${(props) => (props.$type === "lucky" ? "red" : "blue")};

  /* 읽었으면 회색 처리 */
  filter: ${(props) =>
    props.$isRead ? "grayscale(100%) opacity(60%)" : "none"};
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [readItems, setReadItems] = useState([]);
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // 최초 1회 방문인지 확인
  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenTips");

    // 기록 없으면 팝업 띄우고 상태 저장
    if (!hasSeen) {
      setIsModalOpen(true);
      localStorage.setItem("hasSeenTips", "true");
    }
  }, []);

  // 백엔드에 데이터 요청
  useEffect(() => {
    const fetchSajuData = async () => {
      try {
        const response = await fetch(
          "https://9su.site/api/sinsals?birthDate=2002-12-12"
        );

        if (!response.ok) {
          throw new Error(`서버 응답 오류: ${response.status}`);
        }

        const data = await response.json();

        setApiData(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSajuData();
  }, []);

  const handleItemClick = (salKey) => {
    if (!readItems.includes(salKey)) {
      setReadItems((prev) => [...prev, salKey]);
    }
  };

  if (isLoading) {
    return (
      <Background>
        <TextBox style={{ width: "80%", fontSize: "16px" }}>로딩 중...</TextBox>
      </Background>
    );
  }

  // 에러 처리
  if (!apiData) {
    return (
      <Background>
        <TextBox style={{ width: "80%" }}>
          풀이에 실패했습니다. 다시 시도해주세요.
        </TextBox>
      </Background>
    );
  }

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
            <TextBox>
              총 {apiData.totalCount}개의 살이 나왔구나. <br />
              클릭해서 결과를 확인해보렴.
            </TextBox>
          </ProfileRow>

          {/* 하단 사주 결과 리스트 영역 */}
          <ScrollableListBox>
            <TextBox
              style={{
                backgroundColor: "#DCB98E",
                width: "100%",
                padding: "12px 15px",
                fontSize: "3vw",
                marginBottom: "8px",
                textAlign: "center",
              }}
            >
              {formattedDate}
            </TextBox>

            {/* API 데이터 매핑 영역 */}
            {[...apiData.sinSals]
              .sort((a, b) => {
                if (a.type === "lucky" && b.type === "unlucky") return -1;
                if (a.type === "unlucky" && b.type === "lucky") return 1;
                return 0; // 같으면 순서 유지
              })
              .map((sal, index) => (
                <ListItem
                  key={sal.key}
                  $type={sal.type}
                  $isRead={readItems.includes(sal.key)}
                  onClick={() => handleItemClick(sal.key)}
                >
                  <div
                    style={{ display: "flex", alignItems: "center", flex: 1 }}
                  >
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
