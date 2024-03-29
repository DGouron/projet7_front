import React from "react";
import aboutData from "../../../data/about.json";
import SimpleAccordion from "../../accordions/SimpleAccordion";
import BannerBlock from "../../banner/BannerBlock";
import styles from "./About.module.css";

function About() {
  return (
    <main>
      <BannerBlock bShowTitle={false} backgroundUrl={`./banner_about.webp`} />
      <section className={styles.about__container}>
        {aboutData.map((about) => (
          <SimpleAccordion
            header={about.header}
            description={about.description}
            key={about.header}
          />
        ))}
      </section>
    </main>
  );
}

export default About;
