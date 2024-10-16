import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="w-full mx-auto bg-gradient-to-b from-secondary/5 to-transparent overflow-x-hidden overflow-y-scroll no-scrollbar">
      <div className="absolute top-[-50rem] right-[-50rem] hidden 3xl:flex">
        <img src="/images/ellipse.svg" className="w-full bg-cover" />
      </div>
        <div className="max-w-[1440px] mx-auto w-full">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Navigate to="/hero" replace />} />
          <Route path="/hero" element={<Hero />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
