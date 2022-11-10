import React from "react";
import styles from "./Header.module.css";
import Logo from "../../logo/Logo";
import NavBar from "../../nav/NavBar";

function HeaderBlock() {
  return (
    <header className={styles.headder__container}>
      <Logo />
      <NavBar />
    </header>
  );
}

export default HeaderBlock;
