import React from "react";
import styles from "./Intro.module.css";
import Text from "../UI/Text/Text";
import Button from "../UI/Button/Button";
import Heading from "../UI/Heading/Heading";
import mockup from "../../images/image-mockups.png";

function Intro() {
  return (
    <section className={styles.section}>
      <aside>
        <Heading size="one">Next generation digital banking</Heading>
        <Text>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Text>
        <Button>Request Invite</Button>
      </aside>
      <img src={mockup} alt="Mock ups" />
    </section>
  );
}

export default Intro;
