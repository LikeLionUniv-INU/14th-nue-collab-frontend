import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageExample from "./pages/PageExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/intro" element={<IntroPage />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<PageExample />} />
          {/* 아래에 다른 페이지들 추가.. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
