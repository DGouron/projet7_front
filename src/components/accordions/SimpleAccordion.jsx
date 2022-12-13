import React, { useState } from "react";
import collapseArrow from "../../assets/VectorCollapseArrow.svg";
import styles from "./Accordion.module.css";

function SimpleAccordion({ header, description }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={styles.accordion__container}>
      <div onClick={() => setOpen(!open)}>
        <h2 className={styles.accordion__header}>{header}</h2>
        <img
          src={collapseArrow}
          alt="collapse toggle"
          className={!open ? styles.accordion__icon : styles.accordion__open}
        />
      </div>
      {open && <p>{description}</p>}
    </article>
  );
}

export default SimpleAccordion;
