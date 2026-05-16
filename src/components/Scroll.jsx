import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const openScrollAnimation = keyframes`
0% { content: url('animation/두루마리_펼치기1.png'); }
  14% { content: url('animation/두루마리_펼치기2.png'); }
  28% { content: url('animation/두루마리_펼치기3.png'); }
  42% { content: url('animation/두루마리_펼치기4.png'); }
  57% { content: url('animation/두루마리_펼치기5.png'); }
  71% { content: url('animation/두루마리_펼치기6.png'); }
  85% { content: url('animation/두루마리_펼치기7.png'); } 
  100% { content: url('animation/두루마리_펼치기7.png'); }
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

const TempScrollArea = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedScrollImage = styled.img`
  width: 90%;
  height: auto;
  aspect-ratio: 378 / 717;

  object-fit: contain;
  object-position: top;

  animation: ${openScrollAnimation} 1.4s steps(1) forwards;
`;

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageUrls = [
    "animation/두루마리_펼치기1.png",
    "animation/두루마리_펼치기2.png",
    "animation/두루마리_펼치기3.png",
    "animation/두루마리_펼치기4.png",
    "animation/두루마리_펼치기5.png",
    "animation/두루마리_펼치기6.png",
    "animation/두루마리_펼치기7.png",
  ];

  useEffect(() => {
    const preloadImages = async () => {
      const promises = imageUrls.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("이미지 프리로딩 실패", error);
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  if (!isVisible) return null;
  if (!imagesLoaded) return null;

  return (
    <Temp_Background>
      <TempScrollArea>
        <AnimatedScrollImage
          src="animation/두루마리_펼치기1.png"
          alt="두루마리 애니메이션"
        />
      </TempScrollArea>
    </Temp_Background>
  );
};

export default Scroll;
