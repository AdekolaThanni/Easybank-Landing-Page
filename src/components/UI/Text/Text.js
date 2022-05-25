import React from "react";
import styles from "./Text.module.css";

function Text(props) {
  return <span className={styles.text}>{props.children}</span>;
}

export default Text;
