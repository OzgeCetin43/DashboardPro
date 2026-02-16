import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import { useTheme } from "../hooks/useTheme.hook";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-bg-tertiary border border-border-color hover:bg-bg-tertiary/80 rounded-full cursor-pointer text-text-secondary hover:text-text-primary"
    >
      {theme === "light" ? (
        <FaMoon className="w-4 h-4" />
      ) : (
        <FaSun className="w-4 h-4 text-status-warning" />
      )}
    </button>
  );
};

export default ThemeToggle;
