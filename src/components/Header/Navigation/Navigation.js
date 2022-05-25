import React from "react";
import styles from "./Navigation.module.css";
import Links from "../../UI/Links/Links";
import Button from "../../UI/Button/Button";

function Navigation(props) {
  return (
    <nav
      className={`${styles.nav} ${props.displayState ? "" : styles.display}`}
    >
      <Links position="header" />
      <Button>Request Invite</Button>
    </nav>
  );
}

export default Navigation;
