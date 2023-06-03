"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("themeMod") || "dark");

  const toggle = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("themeMod", "light");
    }
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("themeMod", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme  ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
