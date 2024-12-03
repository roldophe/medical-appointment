import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggler: React.FC = () => {
  // State to track the current theme
  const [isDark, setIsDark] = useState<boolean>(false);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // Persist the theme in local storage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    // Update the theme in local storage and body class
    if (isDark) {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <label className="block w-9 h-9 overflow-hidden relative mx-auto lg:m-0 rounded-full focus-visible:tw-accessibility-static">
      <input
        type="checkbox"
        className="absolute top-0 left-0 z-[2] w-full h-full opacity-0 cursor-pointer"
        checked={isDark}
        onChange={toggleTheme}
      />
      <span className="block relative w-9 h-9 bg-white dark:bg-muted-800 rounded-full border border-muted-300 dark:border-muted-700">
        {/* Sun Icon */}
        <FontAwesomeIcon
          icon={faSun}
          className={`block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none transform ${
            !isDark ? "opacity-100 translate-x-[-50%] translate-y-[-50%]" : "opacity-0 translate-x-[-50%] translate-y-[-150%]"
          }`}
        />
        {/* Moon Icon */}
        <FontAwesomeIcon
          icon={faMoon}
          className={`block absolute top-1/2 left-1/2 w-5 h-5 text-yellow-400 transition-all duration-300 pointer-events-none transform ${
            isDark ? "opacity-100 translate-x-[-50%] translate-y-[-50%]" : "opacity-0 translate-x-[-45%] translate-y-[-150%]"
          }`}
        />
      </span>
    </label>
  );
};

export default ThemeToggler;
