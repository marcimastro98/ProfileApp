import React, { useState, useEffect, useRef } from "react";
import Home from "./Components/Home/Home";
import "./App.css";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const childRef = useRef();
  const MenuItems = () => (
    <ul>
      <li onClick={() => childRef.current.scrollToSection("drone")}>
        <p>Drone</p>
      </li>
      <li onClick={() => childRef.current.scrollToSection("coding")}>
        <p>Coding</p>
      </li>
      <li onClick={() => childRef.current.scrollToSection("contact")}>
        <p>Contact</p>
      </li>
    </ul>
  );

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
        <div className={isMobile && menuOpen ? "Sidebar open" : "Sidebar"}>
          <MenuItems />
        </div>
      </div>
      {!isMobile && (
        <div className="DesktopMenu">
          <MenuItems />
        </div>
      )}
      <div className="Home">
        <Home ref={childRef} />
      </div>
    </div>
  );
}

export default App;
