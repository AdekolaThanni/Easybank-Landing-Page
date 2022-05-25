import React from "react";
import styles from "./Heading.module.css";

function Heading(props) {
  if (props.size === "one")
    return <h1 className={styles.heading}>{props.children}</h1>;

  if (props.size === "two")
    return <h2 className={styles.heading}>{props.children}</h2>;
  if (props.size === "three")
    return <h3 className={styles.heading}>{props.children}</h3>;
}

export default Heading;
