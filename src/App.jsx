import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro1 from "./pages/intro1";
import Intro2 from "./pages/intro2";
import Birth from "./pages/Birth";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>{/* 아래에 다른 페이지들 추가.. */}</Route>
        <Route path="/" element={<Intro1 />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/birth" element={<Birth />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;