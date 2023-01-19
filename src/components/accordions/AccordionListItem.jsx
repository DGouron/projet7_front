import React, { useRef, useEffect } from "react";
import styles from "./Accordion.module.css";

function AccordionListItem({ itemName, openState }) {
  const itemRef = useRef(null);

  useEffect(() => {
    itemRef.current.style.setProperty(
      "--accordion__size__percent",
      openState ? "100" : "0"
    );
  }, [openState]);

  return (
    <p ref={itemRef} className={styles.accordion__container__item}>
      {itemName}
    </p>
  );
}

export default AccordionListItem;
