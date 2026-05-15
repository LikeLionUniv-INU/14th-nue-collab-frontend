import React from "react";
import styled, { keyframes } from "styled-components";

// 전체 0.7초 중 약 0.4초(60%)까지는 숨어있다가 나머지 0.3초 동안 쫘르륵 커지는 로직
const CustomScaleUp = keyframes`
  0% { 
    transform: scale(0.01); 
    opacity: 0; 
  }
  60% { 
    /* 0.7초의 60%인 약 0.42초까지 이 상태를 유지 (버티기) */
    transform: scale(0.01); 
    opacity: 0; 
  }
  100% { 
    /* 남은 0.28초 동안 급격히 커짐 */
    transform: scale(1); 
    opacity: 1; 
  }
`;

const AnimatedWrapper = styled.div`
  display: inline-block;
  will-change: transform, opacity;

  /* 0.7초 동안 실행하되, 우리가 설정한 내부 시차(60%)를 적용 */
  animation: ${CustomScaleUp} 0.7s steps(20) forwards;
`;

export default function Title_Animation({ children }) {
  return <AnimatedWrapper>{children}</AnimatedWrapper>;
}
