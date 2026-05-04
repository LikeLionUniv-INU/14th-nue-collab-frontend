import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 전체 영역
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: var(--bg);
`;

// 메인 콘텐츠 영역 (헤더, 푸터 제외)
const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-md);
`;

export default function Layout() {
  return (
    <AppWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </AppWrapper>
  );
}
