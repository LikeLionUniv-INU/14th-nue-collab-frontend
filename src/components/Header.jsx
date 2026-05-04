// 공통 헤더
import styled from "styled-components";

const HeaderWrapper = styled.header`
  flex-shrink: 0;
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
  background-color: var(--bg);

  h1 {
    margin: 0;
    font-size: 24px;
    color: var(--text-primary);
  }
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>헤더 영역</h1>
    </HeaderWrapper>
  );
}
