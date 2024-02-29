import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`theme-${theme}`}>
      <nav></nav>

      <div onClick={toggleTheme}>
        {theme === "light" ? <ModeNightIcon /> : <LightModeIcon />}
      </div>
          
    </header>
  );
};

export default Header;
