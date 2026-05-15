import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PopupModal from "../components/PopupModal";
import CheckSalBox from "../components/CheckSalBox";

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

export default function KiaSal() {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const [readItems, setReadItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // localStorage에서 데이터 로드
  useEffect(() => {
    try {
      const savedApiData = localStorage.getItem("apiData");
      const savedReadItems = localStorage.getItem("readItems");

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

  // 파란색(unlucky) 살들만 필터링
  const unluckyItems =
    apiData?.sinSals?.filter((sal) => sal.type === "unlucky") || [];

  // 모든 unlucky 살을 읽었는지 확인
  const allUnluckyRead =
    unluckyItems.length > 0 &&
    unluckyItems.every((sal) => readItems.includes(sal.key));

  const handleWeakenClick = () => {
    if (allUnluckyRead) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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

  if (!apiData || unluckyItems.length === 0) {
    return (
      <Background>
        <Container>
          <Title>모든 살의 내용을 먼저 확인해주세요.</Title>
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
        <PopupModal
          title="살 무력화 완료"
          content="나쁜 살이 청연으로 이어져 무력화되었습니다!"
          onClose={handleCloseModal}
        />
      )}

      <Container>
        <ScrollableListBox>
          {unluckyItems.map((sal) => (
            <CheckSalBox
              key={sal.key}
              name={`${sal.name} (${sal.hanja})`}
              color="blue"
            />
          ))}
        </ScrollableListBox>

        <ButtonGroup>
          <ActionButton onClick={() => navigate("/result")}>
            돌아가기
          </ActionButton>
          <ActionButton onClick={handleWeakenClick} disabled={!allUnluckyRead}>
            살 무력화
          </ActionButton>
        </ButtonGroup>

        {!allUnluckyRead && (
          <WarningText>
            모든 살의 내용을 먼저 확인해주세요.
            <br />(
            {
              readItems.filter((item) =>
                unluckyItems.some((sal) => sal.key === item)
              ).length
            }
            / {unluckyItems.length} 확인)
          </WarningText>
        )}
      </Container>
    </Background>
  );
}
