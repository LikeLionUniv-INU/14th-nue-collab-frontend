import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: var(--bg);
`;

const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md) 0;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <HomePage />
      </Main>
      <Footer />
    </AppWrapper>
  );
}

export default App;
