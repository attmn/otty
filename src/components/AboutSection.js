import React, { Fragment } from "react";

import * as styles from "./AboutSection.module.sass";

import blob1 from "../img/blob1.svg";
import blob2 from "../img/blob2.svg";
import blob3 from "../img/blob3.svg";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.headingContainer}>
          <h2>
            Whitens, removes stains from coloured, white and black fabrics.
            Cleans any surface, item or piece of clothing
          </h2>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blob1}>
            <div className={styles.blobCircle} />
            <h3>
              Safe for everything<span>(almost)</span>
            </h3>
            <p>
              В процессе действия распадается на воду, активный кислород и соду.
              Никакого хлора и других вредных химикатов. Otty подходит для
              детских вещей и полностью безопасен для аллергиков.
            </p>
          </div>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blob2}>
            <div className={styles.blobCircle} />
            <h3>All-purpose cleaner</h3>
            <p>
              Эффективно удаляет любые пятна и загрязнения с белых, цветных и
              черных тканей. Не выбивает цвет и не портит ткань. Эффективно
              удаляет загрязнения с кафеля, стекла, камня, пластика, резины,
              эмалированных поверхностей, фаянса, стеклокерамики, обивки мягкой
              мебели и ковров. Удаляет бактерии и вирусы.
            </p>
          </div>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blob3}>
            <div className={styles.blobCircle} />
            <h3>Eco-friendly</h3>
            <p>
              В основе действия Otty лежит выделение активного кислорода. После
              использования его можно вылить в раковину, не боясь загрязнения
              воды вредными химикатами. Упаковка сделана из переработанного
              пластика и после используется заново.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
