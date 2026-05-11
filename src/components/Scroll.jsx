import React, { useState, useEffect } from "react"; // 이 줄을 추가하세요!
import styled, { keyframes } from "styled-components";

// 애니메이션 20%마다 프레임 교체
const openScrollAnimation = keyframes`
  0% { content: url('/두루마리_펼치기1.png'); }
  20% { content: url('/두루마리_펼치기2.png'); }
  40% { content: url('/두루마리_펼치기3.png'); }
  60% { content: url('/두루마리_펼치기4.png'); }
  80% { content: url('/두루마리_펼치기5.png'); }
  100% { content: url('/두루마리_펼치기6.png'); }
`;

const Temp_Background = styled.div`
  background-color: #341d02;
  width: 100vw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9000;
  position: fixed;
  top: 0;
  left: 0;
`;

// 기존 영역을 유지하되 내부 배치를 위해 flex 조정
const TempScrollArea = styled.div`
  position: relative;
  width: 95%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 2. 애니메이션이 적용된 이미지 컴포넌트
const AnimatedScrollImage = styled.img`
  width: 100%;
  height: auto;

  /* 0.6초 동안, 프레임이 딱딱 끊기도록(steps), 마지막 프레임 유지 */
  animation: ${openScrollAnimation} 0.6s steps(1) forwards;
`;

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    //0.6초 보다 약간 길게 설정 현 0.8초
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null; // 컴포넌트 비시각화

  return (
    <Temp_Background>
      <TempScrollArea>
        <AnimatedScrollImage
          src="/두루마리_펼치기1.png"
          alt="(이거뜨면 오류)두루마리 애니메이션"
        />
      </TempScrollArea>
    </Temp_Background>
  );
};

export default Scroll;
