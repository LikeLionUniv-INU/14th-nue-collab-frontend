import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PopupModal from "../components/PopupModal";
import Result_PopupModal from "../components/Result_PopupModal";
import CheckResultBtn from "../components/CheckResultBtn";

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
  height: 78%;
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
  height: 8vh;
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
  word-break: keep-all;
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

// --------------------- 버튼 스타일 -----------------------------
const ButtonArea = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 20px);
  z-index: 10;
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
  height: 70vh;
  min-height: 0;
  overflow-y: auto;
  padding: 10px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding-bottom: 70px;

  /* 스크롤바 숨기기 (모바일 환경 깔끔하게) */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default function ResultPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [readItems, setReadItems] = useState(() => {
    const stored = sessionStorage.getItem("readItems");
    return stored ? JSON.parse(stored) : [];
  });
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnhanceSalCompleted, setIsEnhanceSalCompleted] = useState(false);
  const [isKiaSalCompleted, setIsKiaSalCompleted] = useState(false);
  const [enhancedSals, setEnhancedSals] = useState([]);
  const [weakenedSals, setWeakenedSals] = useState([]);
  const navigate = useNavigate();

  // 최초 1회 방문인지 확인
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenTips");

    // 기록 없으면 팝업 띄우고 상태 저장
    if (!hasSeen) {
      setIsModalOpen(true);
      sessionStorage.setItem("hasSeenTips", "true");
    }

    // 강화/무력화 완료 상태 확인
    const enhanceCompleted = sessionStorage.getItem("enhanceSalCompleted");
    const kiaCompleted = sessionStorage.getItem("kiaSalCompleted");
    setIsEnhanceSalCompleted(enhanceCompleted === "true");
    setIsKiaSalCompleted(kiaCompleted === "true");
  }, []);

  // 백엔드에 데이터 요청
  useEffect(() => {
    const fetchSajuData = async () => {
      try {
        // sessionStorage에서 저장된 생년월일 가져오기
        const userBirthDate = sessionStorage.getItem("userBirthDate");

        if (!userBirthDate) {
          alert("생년월일 정보가 없습니다. 다시 입력해주세요.");
          setIsLoading(false);
          navigate("/birth");
          return;
        }

        // 이미 세션에 데이터가 있다면 API 재호출 방지 (로딩 깜빡임 제거)
        const cachedApiData = sessionStorage.getItem("apiData");
        if (cachedApiData) {
          setApiData(JSON.parse(cachedApiData));
          setIsLoading(false);
          return;
        }

        const response = await fetch(
          `https://9su.site/api/sinsals?birthDate=${userBirthDate}`
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

  // apiData 로드 후 lucky/unlucky 개수에 따라 완료 상태 자동 설정
  useEffect(() => {
    if (apiData) {
      const luckyItems = apiData.sinSals.filter((sal) => sal.type === "lucky");
      const unluckyItems = apiData.sinSals.filter(
        (sal) => sal.type === "unlucky"
      );

      // lucky가 없으면 강화 완료로 처리
      if (luckyItems.length === 0) {
        setIsEnhanceSalCompleted(true);
      }

      // unlucky가 없으면 무력화 완료로 처리
      if (unluckyItems.length === 0) {
        setIsKiaSalCompleted(true);
      }

      // 강화/무력화 완료 상태 확인해서 데이터 로드
      const enhanceCompleted = sessionStorage.getItem("enhanceSalCompleted");
      const kiaCompleted = sessionStorage.getItem("kiaSalCompleted");
      // 강화 완료되었으면 lucky 살들을 enhancedSals로 설정
      if (enhanceCompleted === "true") {
        setEnhancedSals(luckyItems);
      }

      // 무력화 완료되었으면 unlucky 살들을 weakenedSals로 설정
      if (kiaCompleted === "true") {
        setWeakenedSals(unluckyItems);
      }
    }
  }, [apiData]);

  const handleItemClick = (sal) => {
    const updated = !readItems.includes(sal.key)
      ? [...readItems, sal.key]
      : readItems;
    setReadItems(updated);
    sessionStorage.setItem("readItems", JSON.stringify(updated));

    // 선택된 살 정보를 sessionStorage에 저장하고 Aboutsal 페이지로 이동
    sessionStorage.setItem("selectedSal", JSON.stringify(sal));
    sessionStorage.setItem("apiData", JSON.stringify(apiData));
    navigate("/about-sal");
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

  const dateParts = apiData.birthDate.split("-");
  const formattedDate = `생년월일 ${dateParts[0]}년 ${dateParts[1]}월 ${dateParts[2]}일 (양력)`;

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
              살을 무력화시킬 수 있습니다!
            </>
          }
          enhancedSals={enhancedSals}
          weakenedSals={weakenedSals}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {isResultModalOpen && (
        <Result_PopupModal
          enhancedSals={enhancedSals}
          weakenedSals={weakenedSals}
          onClose={() => setIsResultModalOpen(false)}
        />
      )}

      <ScrollArea>
        <ScrollImage src="/두루마리.png" />
        <Content>
          {/* 상단 프로필 영역 */}
          <ProfileRow>
            <ImageBox>
              <img src="어깨_할아버지.png" />{" "}
            </ImageBox>
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
                padding: "8px 15px",
                fontSize: "3vw",
                marginBottom: "8px",
                justifyContent: "center",
                flex: "none",
                height: "auto",
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
                  onClick={() => handleItemClick(sal)}
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
                <ActionButton
                  color="red"
                  onClick={() => navigate("/enhance-sal")}
                >
                  살<br />
                  강화
                </ActionButton>
                <ActionButton color="blue" onClick={() => navigate("/kia-sal")}>
                  살<br />
                  무력화
                </ActionButton>
              </LeftButtonGroup>

              {!isEnhanceSalCompleted || !isKiaSalCompleted ? (
                <TipsButton onClick={() => setIsModalOpen(true)}>
                  TIPS
                </TipsButton>
              ) : (
                <CheckResultBtn onClick={() => setIsResultModalOpen(true)} />
              )}
            </ButtonArea>
          </ScrollableListBox>
        </Content>
      </ScrollArea>
    </Background>
  );
}
