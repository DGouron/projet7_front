import React from "react";
import NavItem from "./NavItem";
import styles from "./Nav.module.css";

function NavBar() {
  return (
    <nav className={styles.nav__container}>
      <NavItem url="/" title="Accueil" />
      <NavItem url="/about" title="A propos" />
    </nav>
  );
}

export default NavBar;
