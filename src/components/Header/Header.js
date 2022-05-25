import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../UI/Logo/Logo";
import Navigation from "./Navigation/Navigation";
import Hamburger from "../UI/Hamburger/Hamburger";

function Header() {
  const [navigationDisplay, setNavigationDisplay] = useState(true);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 650) setNavigationDisplay(true);
    else {
      setNavigationDisplay(false);
    }
  });

  window.addEventListener("load", function () {
    if (window.innerWidth <= 650) {
      setNavigationDisplay(false);
    }
  });

  const toggleNav = () => {
    setNavigationDisplay((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div>
        <Logo />
        <Navigation displayState={navigationDisplay} />
        <Hamburger navOn={navigationDisplay} toggleNav={toggleNav} />
      </div>
    </header>
  );
}

export default Header;
