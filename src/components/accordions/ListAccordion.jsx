import React, { useState } from "react";
import collapseArrow from "../../assets/VectorCollapseArrow.svg";
import styles from "./Accordion.module.css";
import AccordionListItem from "./AccordionListItem";

function ListAccordion({ header, list }) {
  const [open, setOpen] = useState(false);

  return (
    <article className={styles.accordion__container}>
      <div
        className={styles.accordion__container__block}
        onClick={() => setOpen(!open)}
      >
        <h2 className={styles.accordion__header}>{header}</h2>
        <img
          src={collapseArrow}
          alt="collapse toggle"
          className={!open ? styles.accordion__icon : styles.accordion__open}
        />
      </div>
      <div className={styles.accordion__column}>
        {list?.map((item, index) => (
          <AccordionListItem key={index} itemName={item} openState={open} />
        ))}
      </div>
    </article>
  );
}

export default ListAccordion;
