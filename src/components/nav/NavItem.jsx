import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

function NavItem({ url, title }) {
  return (
    <Link to={url} className={styles.nav__item}>
      {title}
    </Link>
  );
}

export default NavItem;
