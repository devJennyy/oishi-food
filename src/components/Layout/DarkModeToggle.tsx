import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={handleToggle}
        className="bg-secondary text-white p-2 rounded-full xl:text-lg"
      >
        {darkMode ? "" : ""}
      </button>
    </div>
  );
};

export default DarkModeToggle;
