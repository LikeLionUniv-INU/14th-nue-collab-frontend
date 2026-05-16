import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
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

const StartButton = styled.button`
  font-size: 20px;
  width: 220px;
  height: 47px;
  background-color: #eedbc6;
  border: none;
  padding: 10px;
  border-radius: 8.75px;
  margin-top: 10vh; // 위치에 따라 변경
  font-weight: bold;
`;

const Selectstyle = styled.select`
  font-size: 12px;
  width: 90%;
  height: 35px;
  background-color: #eedbc6;
  border: none;
  padding: 10px;
  border-radius: 8.75px;
  margin-top: 6vh; // 위치에 따라 변경
  text-align: left;
  margin: 7px 7px 7px 0;
`;

const BackButton = styled.button`
  position: absolute;
  top: -10%;
  left: 0;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;
`;

const Select = ({ name, lgh, num, value, onChange }) => {
  const length = Number(lgh);
  const start = Number(num);

  return (
    <Selectstyle
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{name}</option>
      {Array.from({ length }, (_, i) => i + start).map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Selectstyle>
  );
};

const StBtn = ({ OnClick, name }) => {
  return <StartButton onClick={OnClick}>{name}</StartButton>;
};

/* 
// 시작하기 버튼

`;
*/

/*
// 말풍선 (위쪽 꼬리)
const SpeechBubble = styled.div`
  position: relative;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 15px;
  margin-top: 5vh; // 말풍선 위치에 따라 변경
  width: 90%;
  box-sizing: border-box;
  font-size: 14px;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;

    // 이 수치 바꿔서 꼬리 위치 조정
    left: 15%;

    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent #eedbc6 transparent;
  }
`;
*/

/*
// 말풍선 (아래쪽 꼬리)
const SpeechBubble = styled.div`
  position: relative;
  background-color: #eedbc6;
  border-radius: 10px;
  padding: 15px;
  margin-top: 5vh; // 말풍선 위치에 따라 변경
  width: 90%;
  box-sizing: border-box;
  font-size: 14px;


  &::after {
    content: "";
    position: absolute;
    top: 100%;

    // 이 수치 바꿔서 꼬리 위치 조정
    left: 50%;

    border-width: 12px;
    border-style: solid;
    border-color: #eedbc6 transparent transparent transparent;
  }
`;
*/

// -----------------------------------------------------------

export default function Birth() {
  const navigate = useNavigate();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const handleSubmit = async () => {
    if (!year || !month || !day) {
      navigate("/nobirth");
      return;
    }

    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    try {
      const response = await axios.get("https://9su.site/api/sinsals", {
        params: {
          birthDate: formattedDate,
        },
      });

      if (response.status === 200) {
        // 이전 분석 데이터 초기화 후 생년월일을 sessionStorage에 저장
        sessionStorage.clear();
        sessionStorage.setItem("userBirthDate", formattedDate);
        // ResultPage에서 중복 호출하지 않도록 받아온 결과값 바로 캐싱
        sessionStorage.setItem("apiData", JSON.stringify(response.data));
        navigate("/loading");
      }
    } catch (error) {
      const code = error.response?.data?.code;

      if (code === "SINSAL_001") {
        navigate("/nobirth");
      } else if (code === "SINSAL_002") {
        alert("생년월일이 올바르지 않습니다. 다시 입력해주세요.");
      } else if (code === "SINSAL_500") {
        alert("서버 오류입니다. 잠시 후 다시 시도해주세요.");
      } else {
        // 백엔드 서버가 닫혀있거나 인터넷이 끊겼을 때의 기본 방어
        alert("서버와 통신할 수 없습니다. 잠시 후 다시 시도해주세요.");
      }
    }
  };

  return (
    <Background>
      <ScrollArea>
        <ScrollImage src="/두루마리.png" />

        <Content>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginRight: "12vw",
              marginTop: "10%",
            }}
          >
            <BackButton onClick={() => navigate("/Communication")}>
              ← 뒤로가기
            </BackButton>

            <p
              style={{
                fontSize: "20px",
                marginBottom: "20%",
              }}
            >
              생년월일 입력 [양력]
            </p>
          </div>

          <Select
            name="생년"
            lgh={51}
            num={1970}
            value={year}
            onChange={setYear}
          />
          <Select
            name="생월"
            lgh={12}
            num={1}
            value={month}
            onChange={setMonth}
          />
          <Select name="생일" lgh={31} num={1} value={day} onChange={setDay} />

          <StBtn OnClick={handleSubmit} name="분석하기" />
        </Content>
      </ScrollArea>
    </Background>
  );
}
