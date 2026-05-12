import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SpriteImage = styled.img`
  width: 150px;
  transition: all 0.1s steps(1);
`;

// 프레임 전환 간격 현 0.4초, 무한 반복
const GranpaAnimation = ({ rep_sec = 400 }) => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev === 1 ? 2 : 1));
    }, Number(rep_sec));

    return () => clearInterval(timer);
  }, [rep_sec]);

  return (
    <SpriteImage
      src={frame === 1 ? "/할아버지_1.png" : "/할아버지_2.png"}
      alt="할아버지 애니메이션"
    />
  );
};

export default GranpaAnimation;
