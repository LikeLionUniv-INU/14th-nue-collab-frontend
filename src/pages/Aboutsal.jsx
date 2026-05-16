import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PopupModal from "../components/PopupModal";
import ResultPage from "./ResultPage";

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
    width: 80%;
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

// 스크롤 전용 리스트 박스 (흰부분, 내용 길어지면 스크롤 가능)
const ScrollableListBox = styled.div`
  background-color: #eedbc6;
  width: 100%;
  height: 60vh;
  overflow-y: auto;
  padding: 10px 10px;
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

// 개별 살 상세 컨테이너 (이미지의 내용 부분)
const SalDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 10px;
  text-align: left; /* 전체 왼쪽 정렬 */
  word-break: keep-all;
  overflow-wrap: break-word;
  line-height: 1.5;
`;

// 제목 및 안내 문구
const SalHeader = styled.div`
  width: 100%;
  box-sizing: border-box;

  .sal {
    color: ${(props) => (props.type === "lucky" ? "#f22c2c" : "#2000f6")};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.4;
  }
`;

const Section = styled.div`
  width: 100%;
`;

const SectionTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
`;

const SectionContent = styled.div`
  font-size: 12px;
  color: #000000;
  margin-bottom: 3px;
  padding-left: 5px;
`;

// 하단 확인 버튼
const ConfirmButton = styled.button`
  background-color: #dcb98e;
  border: none;
  padding: 8px 50px;
  border-radius: 10px;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:active {
    background-color: #cbad83;
  }
`;

export default function Aboutsal() {
  const navigate = useNavigate();
  const [selectedSal, setSelectedSal] = useState(null);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    // sessionStorage에서 선택된 살과 전체 데이터 읽어오기
    const storedSal = sessionStorage.getItem("selectedSal");
    const storedApiData = sessionStorage.getItem("apiData");

    if (storedSal && storedApiData) {
      setSelectedSal(JSON.parse(storedSal));
      setApiData(JSON.parse(storedApiData));
    } else {
      // 비정상적인 접근 처리
      alert("잘못된 접근입니다.");
      navigate("/birth");
    }
  }, [navigate]);

  // 데이터가 로드될 때까지 로딩 표시
  if (!selectedSal || !apiData) {
    return (
      <Background>
        <TextBox style={{ width: "80%", fontSize: "16px" }}>로딩 중...</TextBox>
      </Background>
    );
  }

  const dateParts = apiData.birthDate.split("-");
  const formattedDate = `생년월일 ${dateParts[0]}년 ${dateParts[1]}월 ${dateParts[2]}일 (양력)`;

  return (
    <Background>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />
        <Content>
          {/* 상단 프로필 영역 */}
          <ProfileRow>
            <ImageBox>
              <img src="어깨_할아버지.png" />{" "}
            </ImageBox>
            <TextBox>
              {selectedSal.quote || "살에 대한 정보를 확인해보세요"}
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
                justifyContent: "center",
              }}
            >
              {formattedDate}
            </TextBox>

            {/* 선택된 살 상세 정보만 표시 */}
            <SalDetailContainer>
              {/* 제목 부분 */}
              <SalHeader type={selectedSal.type}>
                <span className="sal">
                  {selectedSal.name} ({selectedSal.hanja})
                </span>
                <p>
                  당신은{" "}
                  <span className="sal">
                    {selectedSal.name} ({selectedSal.hanja})
                  </span>
                  이 있습니다.
                </p>
              </SalHeader>
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#dcb98e",
                }}
              />
              {/* 설명 섹션 */}
              <Section>
                <SectionTitle>설명</SectionTitle>
                <SectionContent>• {selectedSal.description}</SectionContent>
              </Section>
              {/* 효과 섹션 */}
              <Section>
                <SectionTitle>효과</SectionTitle>
                {selectedSal.effects &&
                  selectedSal.effects.map((eff, i) => (
                    <SectionContent key={i}>• {eff}</SectionContent>
                  ))}
              </Section>
              {/* 조언 섹션 */}
              <Section>
                <SectionTitle>조언</SectionTitle>
                {selectedSal.advice &&
                  selectedSal.advice.map((adv, i) => (
                    <SectionContent key={i}>• {adv}</SectionContent>
                  ))}
              </Section>
            </SalDetailContainer>

            <ConfirmButton onClick={() => navigate("/result")}>
              확인
            </ConfirmButton>
          </ScrollableListBox>
        </Content>
      </ScrollArea>
    </Background>
  );
}
