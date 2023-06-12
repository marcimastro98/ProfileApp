import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className={isMobile ? "MenuContainer mobile" : "MenuContainer"}>
        {isMobile && (
          <div
            className={menuOpen ? "HamburgerMenu open" : "HamburgerMenu"}
            onClick={handleMenuClick}
          >
            <div className="HamburgerIcon HamburgerIconOpen"></div>
            <div className="HamburgerIcon HamburgerIconOpen"></div>
            <div className="HamburgerIcon HamburgerIconOpen"></div>
          </div>
        )}
        {isMobile && (
          <div className={menuOpen ? "Sidebar open" : "Sidebar"}>
            <ul>
              <li>Home</li>
              <li>Drone</li>
              <li>Coding</li>
              <li>About Me</li>
            </ul>
          </div>
        )}
      </div>
      {!isMobile && (
        <ul className="DesktopMenu">
          <li>Home</li>
          <li>Drone</li>
          <li>Coding</li>
          <li>About Me</li>
        </ul>
      )}
      <div className="Home">
        <Home />
      </div>
    </div>
  );
}

export default App;
