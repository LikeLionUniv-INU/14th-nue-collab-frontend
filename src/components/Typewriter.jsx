import React from "react";
import styled, { keyframes } from "styled-components";

// 글자가 서서히 나타나는 애니메이션
const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CharSpan = styled.span`
  opacity: 0;
  animation: ${appear} 0.01s forwards;
  animation-delay: ${(props) => props.$delay}s;
  white-space: pre-wrap; /* 띄어쓰기 간격 보존 */
`;

export default function Typewriter({ children, speed = 0.04 }) {
  let globalIndex = 0;

  const renderNode = (node) => {
    if (typeof node === "string" || typeof node === "number") {
      const text = String(node);
      return text.split("").map((char) => {
        const delay = globalIndex * speed;
        globalIndex++;
        return (
          <CharSpan key={globalIndex} $delay={delay}>
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

  return <>{React.Children.map(children, renderNode)}</>;
}
