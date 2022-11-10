import React from "react";
import styles from "./Footer.module.css";
import logo from "./whiteLogo.svg";

function FooterBlock() {
  return (
    <footer className={styles.footer__container}>
      <img src={logo} alt="Logo du site internet Kasa blanc" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default FooterBlock;
