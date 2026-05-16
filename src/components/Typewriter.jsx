import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// 글자가 서서히 나타나는 애니메이션
const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CharSpan = styled.span`
  opacity: ${(props) => (props.$skip ? 1 : 0)};
  animation: ${(props) => (props.$skip ? "none" : appear)} 0.01s forwards;
  animation-delay: ${(props) => (props.$skip ? "0s" : `${props.$delay}s`)};
  white-space: pre-wrap; /* 띄어쓰기 간격 보존 */
`;

export default function Typewriter({
  children,
  speed = 0.04,
  skip = false,
  onComplete,
}) {
  let globalIndex = 0;

  const renderNode = (node) => {
    if (typeof node === "string" || typeof node === "number") {
      const text = String(node);
      return text.split("").map((char) => {
        const delay = globalIndex * speed;
        globalIndex++;
        return (
          <CharSpan key={globalIndex} $delay={delay} $skip={skip}>
            {char}
          </CharSpan>
        );
      });
    }

    if (React.isValidElement(node)) {
      const childNodes = React.Children.map(node.props.children, renderNode);
      return React.cloneElement(node, { key: globalIndex++ }, childNodes);
    }

    if (Array.isArray(node)) {
      return React.Children.map(node, renderNode);
    }

    return node;
  };

  const content = React.Children.map(children, renderNode);

  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (skip) {
      if (savedCallback.current) savedCallback.current();
      return;
    }

    const timeout = setTimeout(
      () => {
        if (savedCallback.current) savedCallback.current();
      },
      globalIndex * speed * 1000
    );

    return () => clearTimeout(timeout);
  }, [globalIndex, speed, skip]);

  return <>{content}</>;
}
