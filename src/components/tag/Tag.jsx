import React from "react";
import styles from "./Tag.module.css";

function Tag({ tagName }) {
  return <div className={styles.tag__container}>{tagName}</div>;
}

export default Tag;
