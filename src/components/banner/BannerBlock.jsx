import React from "react";
import styles from "./Banner.module.css";

function BannerBlock({
  backgroundUrl = "./banner_home.webp",
  bShowTitle = true,
}) {
  return (
    <section
      className={styles.banner__container}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {bShowTitle ? <h2>Chez vous, partout et ailleurs</h2> : null}
      <div className={styles.banner__filter}></div>
    </section>
  );
}

export default BannerBlock;
