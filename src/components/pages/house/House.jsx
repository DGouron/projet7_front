import React from "react";
import Slider from "../../slider/Slider";
import HousingData from "../../../data/housing.json";
import styles from "./House.module.css";
import SimpleAccordion from "../../accordions/SimpleAccordion";
import ListAccordion from "../../accordions/ListAccordion";
import Rating from "../../rating/Rating";
import Tag from "../../tag/Tag";

function House() {
  const retrievedIdFromUrl = window.location.pathname.split("/")[2];

  let house = {};
  if (retrievedIdFromUrl !== undefined) {
    house = HousingData.find((house) => house.id === retrievedIdFromUrl);
  }
  return (
    <main>
      <Slider pictures={house?.pictures} />
      <section className={styles.house__container}>
        <h1>{house?.title}</h1>
        <h2>{house?.location}</h2>
        <div className={styles.house__wrapper}>
          <article className={styles.house__tagrow}>
            {house?.tags.map((tag) => (
              <Tag key={tag} tagName={tag} className={styles.house__tag} />
            ))}
          </article>
          <div className={styles.house__rating}>
            <Rating ratingLevel={house?.rating} />
          </div>
        </div>
        <div className={styles.house__row}>
          <SimpleAccordion
            header={"Description"}
            description={house?.description}
          />
          <ListAccordion header={"Equipements"} list={house?.equipments} />
        </div>
      </section>
    </main>
  );
}

export default House;
