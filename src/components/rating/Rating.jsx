import React from "react";
import FullStar from "../../assets/VectorStarFull.svg";
import EmptyStar from "../../assets/VectorStarEmpty.svg";
import styles from "./Rating.module.css";

function Rating({ ratingLevel }) {
  const maxRating = 5;
  const rating = Array.from({ length: maxRating }, (_, index) => {
    if (index < ratingLevel) {
      return <img key={index} src={FullStar} alt="full star" />;
    } else {
      return <img key={index} src={EmptyStar} alt="empty star" />;
    }
  });
  return <aside className={styles.rating__container}>{rating}</aside>;
}

export default Rating;
