import React, { useState } from "react";
import styles from "./Slider.module.css";
import arrow from "../../assets/VectorArrow.svg";

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex < 0 ? pictures.length - 1 : newIndex);
  };

  const next = () => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex >= pictures.length ? 0 : newIndex);
  };

  return (
    <section className={styles.slider__container}>
      <div className={styles.slide__wrapper}>
        <img
          src={pictures[currentIndex]}
          alt={pictures}
          className={styles.slider__slide}
        />
        {pictures.length > 1 ? (
          <>
            <span className={styles.slider__counter}>
              {currentIndex + 1}/{pictures.length}
            </span>
            <img
              src={arrow}
              alt="arrow"
              onClick={previous}
              className={styles.slider__previousarrow}
            />
            <img
              src={arrow}
              alt="arrow"
              onClick={next}
              className={styles.slider__nextarrow}
            />
          </>
        ) : null}
      </div>
    </section>
  );
}

export default Slider;
