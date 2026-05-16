import React, { useState } from "react";
import styled from "styled-components";
// 폴더 구조에 따라 경로를 확인해 주세요 (예: ./Title_Animation 혹은 ../components/Title_Animation)
import Title_Animation from "../components/Title_Animation";
import Scroll from "../components/Scroll.jsx";

const TestContainer = styled.div`
  background-color: #222; /* 배경을 어둡게 해서 잘 보이게 함 */
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const InfoText = styled.p`
  color: white;
  font-family: sans-serif;
  text-align: center;
`;

export default function Test() {
  const [testKey, setTestKey] = useState(0);

  return (
    <TestContainer>
      <InfoText>
        화면에 아무것도 안 보인다면 컴포넌트 임포트 경로를 확인하세요! <br />
        현재 버튼을 누르면 애니메이션이 재실행됩니다.
      </InfoText>

      <button
        onClick={() => setTestKey((prev) => prev + 1)}
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        애니메이션 다시 재생
      </button>

      {/* key값을 바꿔주면 리액트가 컴포넌트를 아예 새로 그리기 때문에 애니메이션이 다시 나옵니다 */}
      <Scroll />
      <Title_Animation key={testKey} />
    </TestContainer>
  );
}
