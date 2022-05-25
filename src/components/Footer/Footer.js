import React from "react";
import styles from "./Footer.module.css";
import Logo from "../UI/Logo/Logo";
import Socials from "../UI/Socials/Socials";
import Links from "../UI/Links/Links";
import Button from "../UI/Button/Button";
import Text from "../UI/Text/Text";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <Logo position="footer" />
        <Socials />
        <Links position="footer" />
        <Button>Request Invite</Button>
        <Text>&copy; Easybank. All Rights Reserved</Text>
      </div>
    </footer>
  );
}

export default Footer;
