import { useEffect } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro1 from "./pages/intro1";
import Intro2 from "./pages/intro2";
import Intro3 from "./pages/intro3";
import Loading from "./pages/Loading";
import ResultReady from "./pages/ResultReady";
import Birth from "./pages/Birth";
import ResultPage from "./pages/ResultPage";
import Aboutsal from "./pages/Aboutsal";
import EnhanceSal from "./pages/EnhanceSal";
import KiaSal from "./pages/KiaSal";
import Nobirth from "./pages/Nobirth";
import Test from "./pages/Test"; // 나중에 삭제
import Communication from "./pages/Communication";
import Ending from "./pages/Ending";

function App() {
  // 화면 핀치 줌 방지
  useEffect(() => {
    // 터치 이벤트에서 멀티터치(두 손가락) 줌 방지
    const handleTouchMove = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    // 마우스 휠로 인한 확대 방지
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>{/* 아래에 다른 페이지들 추가.. */}</Route>
        <Route path="/" element={<Intro1 />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/intro3" element={<Intro3 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/result-ready" element={<ResultReady />} />
        <Route path="/birth" element={<Birth />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/enhance-sal" element={<EnhanceSal />} />
        <Route path="/kia-sal" element={<KiaSal />} />
        <Route path="/about-sal" element={<Aboutsal />} />
        <Route path="/nobirth" element={<Nobirth />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
