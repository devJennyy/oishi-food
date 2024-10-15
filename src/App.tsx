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
      <div className="w-full bg-[url('/images/hero-bg.svg')]">
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
