import React from "react";
import styled, { keyframes } from "styled-components";

// 이미지 확대 코드기능
const ScaleUp = keyframes`
  0% {
    transform: scale(0.01); 
    opacity: 0; //투명도 0에서 시작
  }
    0.1% {
    transform: scale(0.01);
    opacity: 0;
 }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// 애니메이션을 적용할 컨테이너
const AnimatedWrapper = styled.div`
  display: inline-block;
  transform: scale(0.01);
  opacity: 0;
  will-change: transform, opacity;
  /* 애니메이션 설정: n초 동안, n프레임으로, n초 기다리다가 애니메이션 이전에는 0%의 스타일을, 이후에는 100%의 스타일을 유지 */
  animation: ${ScaleUp} 0.7s steps(15) 1.4s both;
`;

export default function Title_Animation() {
  return (
    <AnimatedWrapper>
      {" "}
      <img src="/대형로고_세로.png" style={{ width: "70px" }} />
    </AnimatedWrapper>
  );
}
