import React from "react";
import { useEffect, useState } from "react";
import LocationsCard from "./LocationCard";
import styles from "./LocationBlock.module.css";

function LocationsBlock() {
  const [locations, setLocations] = useState([]);

  const findLocations = async () => {
    const response = await fetch("http://localhost:3000/housing.json");
    const data = await response.json();
    setLocations(data);
  };

  useEffect(() => {
    findLocations();
  }, []);

  return (
    <section className={styles.locations__container}>
      {locations.map((location) => {
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
