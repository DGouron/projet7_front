import React from "react";
import Slider from "../../slider/Slider";
import HousingData from "../../../data/housing.json";
import styles from "./House.module.css";
import SimpleAccordion from "../../accordions/SimpleAccordion";

function House() {
  const retrievedIdFromUrl = window.location.pathname.split("/")[2];

  let house = {};
  if (retrievedIdFromUrl !== undefined) {
    house = HousingData.find((house) => house.id === retrievedIdFromUrl);
  }
  return (
    <main>
      <Slider pictures={house?.pictures} />
      <article className={styles.house__container}>
        <h1>{house?.title}</h1>
        <h2>{house?.location}</h2>
        <SimpleAccordion
          header={"Description"}
          description={house?.description}
        />
      </article>
    </main>
  );
}

export default House;
