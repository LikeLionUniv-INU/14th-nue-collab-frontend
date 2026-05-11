import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro1 from "./pages/Intro1";
import Intro2 from "./pages/Intro2";
import ResultPage from "./pages/ResultPage";
import Aboutsal from "./pages/Aboutsal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>{/* 아래에 다른 페이지들 추가.. */}</Route>
        <Route path="/" element={<Intro1 />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about-sal" element={<Aboutsal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
