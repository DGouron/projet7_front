import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import collapseArrow from "../../assets/VectorCollapseArrow.svg";
import styles from "./Accordion.module.css";

function SimpleAccordion({ header, description }) {
  const [open, setOpen] = useState(false);
  const descriptionBlockRef = useRef(null);

  useEffect(() => {
    descriptionBlockRef.current.style.setProperty(
      "--accordion__size__percent",
      open ? "100" : "0"
    );
    descriptionBlockRef.current.style.setProperty(
      "padding-top",
      open ? "18px" : "0px"
    );
  }, [open]);

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
      <p
        className={styles.accordion__container__description}
        style={open ? { "--height": "100%" } : { "--height": "0%" }}
        ref={descriptionBlockRef}
      >
        {description}
      </p>
    </article>
  );
}

export default SimpleAccordion;
