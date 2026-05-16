import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PopupModal from "../components/PopupModal";
import CheckSalBox from "../components/CheckSalBox";
import confetti from "canvas-confetti";

// ---------------------스타일-----------------------------
const Background = styled.div`
  background-color: #b6b6b6;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 480px;
  gap: 10px;
`;

const Title = styled.h1`
  color: #341d02;
  font-size: 1.5rem;
  margin: 0;
  text-align: center;
  word-break: keep-all;
`;

const ScrollableListBox = styled.div`
  background-color: #b6b6b6;
  width: 100%;
  max-height: 60vh;
  overflow-y: auto;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  justify-content: center;
`;

const ActionButton = styled.button`
  background-color: #dcb98e;
  border: none;
  border-radius: 10px;
  padding: 12px 30px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  font-family: inherit;
  color: #341d02;

  &:hover {
    background-color: #c9a876;
  }

  &:disabled {
    background-color: #999;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const WarningText = styled.div`
  color: #ff0000;
  font-size: 0.9rem;
  text-align: center;
  margin-top: 10px;
`;

export default function EnhanceSal() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [readItems, setReadItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // sessionStorage에서 데이터 로드
  useEffect(() => {
    try {
      const savedApiData = sessionStorage.getItem("apiData");
      const savedReadItems = sessionStorage.getItem("readItems");

      if (savedApiData) {
        setApiData(JSON.parse(savedApiData));
      }
      if (savedReadItems) {
        setReadItems(JSON.parse(savedReadItems));
      }
    } catch (error) {
      console.error(
        "데이터를 불러오는데 실패했습니다. 다시 시도해주세요",
        error
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 빨간색(lucky) 살들만 필터링
  const luckyItems =
    apiData?.sinSals?.filter((sal) => sal.type === "lucky") || [];

  // 모든 lucky 살을 읽었는지 확인
  const allLuckyRead =
    luckyItems.length > 0 &&
    luckyItems.every((sal) => readItems.includes(sal.key));

  const handleEnhanceClick = () => {
    if (allLuckyRead) {
      setIsModalOpen(true);

      const confettiConfig = {
        particleCount: 100, 
        spread: 80, 
        startVelocity: 60, 
        gravity: 2,
        ticks: 120, 
        zIndex: 1000,
        colors: ["#ff0000", "#ff6b6b", "#ffc0cb", "#dcb98e", "#ffffff"], 
      };

      // 화면 왼쪽에서 중앙을 향해 발사
      confetti({
        ...confettiConfig,
        angle: 60,
        origin: { x: 0, y: 0.6 },
      });
      // 화면 오른쪽에서 중앙을 향해 발사
      confetti({
        ...confettiConfig,
        angle: 120,
        origin: { x: 1, y: 0.6 },
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // 강화된 살들의 목록 저장
    sessionStorage.setItem("enhancedSals", JSON.stringify(luckyItems));
    // 강화 완료 상태 저장
    sessionStorage.setItem("enhanceSalCompleted", "true");
    // 모달 닫은 후 결과페이지로 이동
    navigate("/result");
  };

  if (isLoading) {
    return (
      <Background>
        <Container>
          <Title>로딩 중...</Title>
        </Container>
      </Background>
    );
  }

  if (!apiData) {
    return (
      <Background>
        <Container>
          <Title>모든 살을 먼저 확인해주세요!</Title>
          <ActionButton onClick={() => navigate("/result")}>
            뒤로가기
          </ActionButton>
        </Container>
      </Background>
    );
  }

  if (luckyItems.length === 0) {
    return (
      <Background>
        <Container>
          <Title>강화할 수 있는 홍연이 없습니다.</Title>
          <ActionButton onClick={() => navigate("/result")}>
            뒤로가기
          </ActionButton>
        </Container>
      </Background>
    );
  }

  return (
    <Background>
      {isModalOpen && (
        <>
          <PopupModal
            title="살 강화 완료"
            content="좋은 살이 홍연으로 이어져 더욱 강해졌습니다!"
            onClose={handleCloseModal}
          />
        </>
      )}

      <Container>
        <ScrollableListBox>
          {luckyItems.map((sal) => (
            <CheckSalBox
              key={sal.key}
              name={`${sal.name} (${sal.hanja})`}
              color="red"
            />
          ))}
        </ScrollableListBox>

        <ButtonGroup>
          <ActionButton onClick={() => navigate("/result")}>
            돌아가기
          </ActionButton>
          <ActionButton onClick={handleEnhanceClick} disabled={!allLuckyRead}>
            살 강화
          </ActionButton>
        </ButtonGroup>

        {!allLuckyRead && (
          <WarningText>
            모든 살의 내용을 먼저 확인해주세요.
            <br />(
            {
              readItems.filter((item) =>
                luckyItems.some((sal) => sal.key === item)
              ).length
            }
            / {luckyItems.length} 확인)
          </WarningText>
        )}
      </Container>
    </Background>
  );
}
