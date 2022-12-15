import React, { useState } from "react";
import collapseArrow from "../../assets/VectorCollapseArrow.svg";
import styles from "./Accordion.module.css";

function ListAccordion({ header, list }) {
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
      {open && (
        <div className={styles.accordion__column}>
          {list?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      )}
    </article>
  );
}

export default ListAccordion;
