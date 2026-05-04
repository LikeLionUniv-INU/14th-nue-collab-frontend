// 공통 푸터
import styled from "styled-components";

const FooterWrapper = styled.footer`
  flex-shrink: 0;
  padding: var(--spacing-md);
  border-top: 1px solid var(--border);
  background-color: var(--bg-secondary);
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2026 LikeLion INU. All rights reserved.</p>
    </FooterWrapper>
  );
}
