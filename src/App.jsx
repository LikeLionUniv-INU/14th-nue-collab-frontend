import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro1 from "./pages/intro1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro1 />} />
        <Route element={<Layout />}>{/* 아래에 다른 페이지들 추가.. */}</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
