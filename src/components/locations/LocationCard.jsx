import React from "react";
import { Link } from "react-router-dom";
import styles from "./LocationCard.module.css";

function LocationsCard({ locationData }) {
  return (
    <Link
      to={`/locations/house/${locationData.id}`}
      className={styles.location__card}
    >
      <article>
        <img src={locationData.cover} alt={locationData.title} />
        <h3 className={styles.location__card__title}>{locationData.title}</h3>
      </article>
    </Link>
  );
}

export default LocationsCard;
