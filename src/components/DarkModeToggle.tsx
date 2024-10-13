import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center items-center pt-10">
      <button
        onClick={handleToggle}
        className="bg-secondary text-white px-4 py-2 rounded-md"
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
