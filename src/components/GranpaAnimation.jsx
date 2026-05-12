import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SpriteImage = styled.img`
  width: 150px;
  transition: all 0.1s steps(1);
`;

// 프레임 전환 간격
const GranpaAnimation = ({ rep_sec = 275 }) => {
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev === 1 ? 2 : 1));
    }, Number(rep_sec));

    return () => clearInterval(timer);
  }, [rep_sec]);

  return (
    <SpriteImage
      src={frame === 1 ? "/임시할아버지_1.png" : "/임시할아버지_2.png"}
      alt="할아버지 애니메이션"
    />
  );
};

export default GranpaAnimation;
