import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import "../../css/toggle.css";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`root cursor-pointer ${darkMode ? "dark" : "light"}`}>
      <div className="mode mx-5" onClick={handleToggle}>
        <svg
          className="custom-sun"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            className="center"
            d="M12,7a5,5,0,1,0,5,5,5,5,0,0,0-5-5Z"
          />
          <path
            className="left"
            d="M2,13H4a1,1,0,0,0,0-2H2a1,1,0,0,0,0,2Z"
          />
          <path
            className="right"
            d="M20,13h2a1,1,0,0,0,0-2H20a1,1,0,0,0,0,2Z"
          />
          <path
            className="top"
            d="M11,2V4a1,1,0,0,0,2,0V2a1,1,0,0,0-2,0Z"
          />
          <path
            className="bottom"
            d="M11,20v2a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0Z"
          />
          <path
            className="top-left"
            d="M6,4.58A1,1,0,0,0,4.58,6L5.64,7.05A1,1,0,0,0,7.05,5.64Z"
          />
          <path
            className="bottom-right"
            d="M18.36,17A1,1,0,0,0,17,18.36L18,19.42A1,1,0,1,0,19.42,18Z"
          />
          <path
            className="top-right"
            d="M19.42,6A1,1,0,1,0,18,4.58L17,5.64a1,1,0,0,0,1.41,1.41Z"
          />
          <path
            className="bottom-left"
            d="M7.05,18.36A1,1,0,0,0,5.64,17L4.58,18A1,1,0,1,0,6,19.42Z"
          />
        </svg>
        <svg
          className="custom-moon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            className="center"
            d="M11,3.05A9,9,0,1,0,21,13a1,1,0,0,0-1.54-.95,5.4,5.4,0,0,1-7.47-7.44A1,1,0,0,0,11,3.05Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DarkModeToggle;
