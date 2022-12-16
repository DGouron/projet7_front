import React from "react";
import Slider from "../../slider/Slider";
import HousingData from "../../../data/housing.json";
import styles from "./House.module.css";
import SimpleAccordion from "../../accordions/SimpleAccordion";
import ListAccordion from "../../accordions/ListAccordion";
import Rating from "../../rating/Rating";
import Tag from "../../tag/Tag";
import HostView from "../../host/HostView";
import { Navigate, useParams } from "react-router";

function House() {
  const { id } = useParams();
  let house = {};
  if (id !== undefined) {
    house = HousingData.find((house) => house.id === id);
    if (house === false || house === undefined) {
      return <Navigate to="/404" />;
    }
  }
  return (
    <main>
      <Slider pictures={house?.pictures} />

      <section className={styles.house__container}>
        <div className={styles.house__wrapper}>
          <div className={styles.house__leftpannel}>
            <h1 className={styles.house__title}>{house?.title}</h1>
            <h2 className={styles.house__location}>{house?.location}</h2>
            <article className={styles.house__tagrow}>
              {house?.tags.map((tag) => (
                <Tag key={tag} tagName={tag} className={styles.house__tag} />
              ))}
            </article>
          </div>
          <div className={styles.house__rightpannel}>
            <HostView
              hostName={house?.host.name}
              hostPicture={house?.host.picture}
            />
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
