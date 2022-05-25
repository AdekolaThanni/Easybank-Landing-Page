import React from "react";
import Text from "../Text/Text";
import styles from "./Links.module.css";

function Links(props) {
  if (props.position === "header") {
    return (
      <div className={styles.header}>
        <button className={styles.button}>
          <Text>Home</Text>
        </button>
        <button className={styles.button}>
          <Text>About</Text>
        </button>
        <button className={styles.button}>
          <Text>Contact</Text>
        </button>
        <button className={styles.button}>
          <Text>Blog</Text>
        </button>
        <button className={styles.button}>
          <Text>Career</Text>
        </button>
      </div>
    );
  }

  if (props.position === "header") {
    return (
      <div className={styles.header}>
        <button className={styles.button}>
          <Text>Home</Text>
        </button>
        <button className={styles.button}>
          <Text>About</Text>
        </button>
        <button className={styles.button}>
          <Text>Contact</Text>
        </button>
        <button className={styles.button}>
          <Text>Blog</Text>
        </button>
        <button className={styles.button}>
          <Text>Career</Text>
        </button>
      </div>
    );
  }

  return (
    <div className={styles.footer}>
      <div>
        <button className={styles.button}>
          <Text>Home</Text>
        </button>
        <button className={styles.button}>
          <Text>Contact</Text>
        </button>
        <button className={styles.button}>
          <Text>Blog</Text>
        </button>
      </div>
      <div>
        <button className={styles.button}>
          <Text>Career</Text>
        </button>
        <button className={styles.button}>
          <Text>Support</Text>
        </button>
        <button className={styles.button}>
          <Text>Privacy Policy</Text>
        </button>
      </div>
    </div>
  );
}

export default Links;
