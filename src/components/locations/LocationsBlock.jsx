import React from "react";
import LocationsCard from "./LocationCard";
import styles from "./LocationBlock.module.css";
import locationData from "../../data/housing.json";

function LocationsBlock() {
  return (
    <section className={styles.locations__container}>
      {locationData.map((location) => {
        return (
          <LocationsCard
            key={location.name + location.id}
            locationData={location}
          />
        );
      })}
    </section>
  );
}

export default LocationsBlock;
