import React from "react";

import * as styles from "./CompareSection.module.sass";

import logo from "../img/logo.svg";
import Media from "react-media";

const CompareSection = () => {
  return (
    <div className={styles.container} id="compare">
      <div className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h2>Completely safe for your home and our planet</h2>
          <p>
            Our company believes in ecology, sustainable consumption and
            reaching net zero carbon emissions. <br />
            We are proud to say that Otty was created with these principles in
            mind
          </p>
        </div>
        <div className={styles.table}>
          <div className={styles.title}>
            <h4>Majority of alternatives</h4>
            <Media query="(max-width: 1023px)">
              {(matches) => matches && <span>VS</span>}
            </Media>
            <img src={logo} alt="Otty" />
          </div>
          <div className={styles.row}>
            <div className={styles.altCell}>
              Contain chlorine and other harsh chemicals
            </div>
            <div className={styles.cell}>
              Otty contains NO chlorine, GMOs and harsh chemicals. Perfectly
              safe for the environment
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.altCell}>
              During the process, they pollute water and nature. Require complex
              processing at disposal
            </div>
            <div className={styles.cell}>
              During the process, Otty breaks down into water, active oxygen and
              soda ash. Can be safely poured down the drain
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.altCell}>
              To produce the ingredients for these products, heavy industry is
              required which has a high environmental impact
            </div>
            <div className={styles.cell}>
              Otty is made entirely of natural sodium components
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.altCell}>
              Contain fragrances, perfumes, enzymes, parabens and/or colouring.
              Not always safe for allergy sufferers or children
            </div>
            <div className={styles.cell}>
              Otty contains 0% fragrance, perfumes, enzymes, parabens &
              colouring. This means it's hypoallergenic and safe for children's
              clothing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
