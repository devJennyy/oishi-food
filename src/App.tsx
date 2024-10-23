import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Router>
      <div className="w-full mx-auto bg-gradient-to-b from-secondary/5 to-transparent overflow-x-hidden overflow-y-scroll no-scrollbar relative">
      <div className="absolute bg-[#FDC55E]/20 w-[50rem] h-[50rem] rounded-full dark:blur-[20rem] blur-[5rem] top-[-15rem] 3xl:right-[3rem] lg:right-[-22rem] md:right-[-30rem] md:flex hidden"></div>
        <div className="max-w-[1440px] mx-auto w-full">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/homepage" replace />} />
          <Route path="/homepage" element={<MainPage />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
