import React from "react";

import * as styles from "./HowToUseSection.module.sass";

import icon1 from "../img/howto/icon1.svg";
import icon2 from "../img/howto/icon2.svg";
import icon3 from "../img/howto/icon3.svg";
import Circle from "./elements/Circle";
import Medusa from "./elements/Medusa";
import Fish from "./elements/Fish";
import Seaweed from "./elements/Seaweed";

const HowToUseSection = () => {
  return (
    <div className={styles.container} id="how-to-use">
      <div className={styles.elementContainer}>
        <Circle number="2" />
        <Circle number="3" />
        <Circle number="1" />
        <Circle number="4" />
        <Circle number="2" />
        <Medusa number="1" />
        <Medusa number="2" />
        <Fish number="group2" />
        <Fish number="group1" />
        <Fish number="group1" />
        <Fish number="group3" />
        <Seaweed number="1" />
        <Seaweed number="1" />
        <Seaweed number="1" />
        <Seaweed number="2" />
        <Seaweed number="1" />
        <Seaweed number="2" />
        <Seaweed number="1" />
        <Fish number="group2" />
        <Seaweed number="2" />
        <Fish number="group4" />
        <Circle number="2" />
        <Circle number="1" />
        <Circle number="2" />
      </div>
      <div className={styles.sectionContainer}>
        <h2>Where and how to use Otty</h2>
        <div className={styles.blobContainer}>
          <div className={styles.blob1}>
            <img src={icon1} alt="" aria-hidden loading="lazy" />
            <h3>Whitening and stain removal</h3>
            <p>
              Dissolve 1/4 to 1 scoop (depending on stain) of Otty per 1L of hot
              water and soak for 15-60min. Suitable for white, black and
              coloured fabrics. Not suitable for wool, leather, or silk items.{" "}
              <br />
              <b>For Whites:</b> up to 6h <br />
              <b>For Colours:</b> up to 1h
            </p>
          </div>
          <div className={styles.blob2}>
            <img src={icon1} alt="" aria-hidden loading="lazy" />
            <h3>Removing tougher stains</h3>
            <p>
              To remove tougher stains mix equal amounts of Otty and hot water.
              Apply equally to stain and leave for up to 1h (less if coloured).
              Then rinse or wash, and dry. Not suitable for wool, leather, or
              silk items
            </p>
          </div>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blobContainer2}>
            <div className={styles.blob3}>
              <img src={icon2} alt="" aria-hidden loading="lazy" />
              <h3>
                Hand & machine wash <br />
                <span>(30°с - 90°с)</span>
              </h3>
              <p>
                Add 1/2 to 1 scoop of Otty (depending on stains) with your
                washing powder. If using capsules/tablets, just add Otty to the
                ‘main wash’ compartment. Suitable for white, black and coloured
                fabrics
              </p>
            </div>
            <div className={styles.blob4}>
              <img src={icon3} alt="" aria-hidden loading="lazy" />
              <h3>Cleaning surfaces</h3>
              <p>
                Mix with a small amount of water until you get a paste. Apply
                paste to stain and leave for 15-30min. Rinse with clean water
                and dry. After that, wipe with a dry clean cloth
              </p>
            </div>
          </div>
          <div className={styles.blob5}>
            <img src={icon1} alt="" aria-hidden loading="lazy" />
            <h3>Cleaning kitchen and tableware</h3>
            <p>
              Effectively removes even the thickest layer of fat, scale buildup
              or tea/coffee stain. Pots, pans, cutlery, crockery. Otty
              effectively cleans any kitchenware. Fill the item with hot water
              up to the desired level of cleaning or place the item inside a
              container of hot water. Add 1/2 to 2 scoops of Otty per 1L. Leave
              for 15-30mins. Wash and rinse thoroughly before using
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseSection;
