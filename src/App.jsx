import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./styles/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> develop
import Intro1 from "./pages/Intro1";
import Intro2 from "./pages/Intro2";
import Intro3 from "./pages/Intro3";
import Loading from "./pages/Loading";
<<<<<<< HEAD
=======
=======
import Intro1 from "./pages/intro1";
import Intro2 from "./pages/intro2";
>>>>>>> 274526c207304eefaafcbd1c712d4f923e3d26c2
import Birth from "./pages/Birth";
import ResultPage from "./pages/ResultPage";
import Aboutsal from "./pages/Aboutsal";
>>>>>>> develop

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>{/* 아래에 다른 페이지들 추가.. */}</Route>
        <Route path="/" element={<Intro1 />} />
        <Route path="/intro2" element={<Intro2 />} />
        <Route path="/intro3" element={<Intro3 />} />
        <Route path="/loading" element={<Loading />} />
<<<<<<< HEAD
        <Route element={<Layout />}>{/* 아래에 다른 페이지들 추가.. */}</Route>
=======
        <Route path="/birth" element={<Birth />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/about-sal" element={<Aboutsal />} />
>>>>>>> develop
      </Routes>
    </BrowserRouter>
  );
}

export default App;