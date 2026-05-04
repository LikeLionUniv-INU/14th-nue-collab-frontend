import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);

  h2 {
    font-size: 20px;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }
`;

export default function HomePage() {
  return (
    <Container>
      <h2>Welcome</h2>
      <p>Edit src/pages/HomePage.jsx and save to test HMR.</p>
    </Container>
  );
}
