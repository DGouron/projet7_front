import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function NavItem({ url, title }) {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let unactiveStyle = {
    textDecoration: "none",
  };

  return (
    <NavLink
      to={url}
      className={styles.nav__item}
      style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
      end={true}
    >
      {title}
    </NavLink>
  );
}

export default NavItem;
