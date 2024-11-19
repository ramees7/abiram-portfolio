// context/ThemeContext.js
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [textColor, setTextColor] = useState("#808080");
  const [theme, setTheme] = useState("light"); // Default to light theme

  // Load theme and color from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("selectedTheme") || "light";
    const savedColor = localStorage.getItem("selectedColor") || "#808080";

    setTheme(savedTheme);
    setTextColor(savedColor);
  }, []);

  // Update theme in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("selectedTheme", newTheme);
  };

  // Update text color in localStorage
  const updateTextColor = (color) => {
    setTextColor(color);
    localStorage.setItem("selectedColor", color);
  };

  return (
    <ThemeContext.Provider value={{ theme, textColor, toggleTheme, updateTextColor }}>
      <div className={theme === "dark" ? "bg-black text-white" : "bg-white text-black"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
