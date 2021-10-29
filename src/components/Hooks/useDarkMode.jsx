import axios from "axios";
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") setMode("dark");
    if (theme === "dark") setMode("light");
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");

    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    !localTheme
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
