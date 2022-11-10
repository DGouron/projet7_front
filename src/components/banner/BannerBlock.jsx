import React from "react";
import styles from "./Banner.module.css";

function BannerBlock() {
  return (
    <section className={styles.banner__container}>
      <h2>Chez vous, partout et ailleurs</h2>
      <div className={styles.banner__filter}></div>
    </section>
  );
}

export default BannerBlock;
