import React from "react";

import * as styles from "./HowToUseSection.module.sass";

import icon1 from "../img/howto/icon1.svg";
import icon2 from "../img/howto/icon2.svg";
import icon3 from "../img/howto/icon3.svg";

const HowToUseSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <div className={styles.headingContainer}>
          <h2>Where and how to use Otty</h2>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blob1}>
            <img src={icon1} alt="" aria-hidden />
            <h3>Whitening and stain removal</h3>
            <p>
              Подходит для цветных, темных и белых тканей. Растворите от 0,5 до
              2 ст.л. средства в расчете на один литр горячей воды в зависимости
              от степени загрязнения. Замочите в растворе на 15-60 минут. При
              сильном загрязнении увеличьте время, максимум до 6 часов (for
              whites only). Not suitable for wool, leather, or silk items.
            </p>
          </div>
          <div className={styles.blob2}>
            <img src={icon1} alt="" aria-hidden />
            <h3>Removing tougher stains</h3>
            <p>
              Для удаления трудновыводимых загрязнений обильно смочите пятно
              горячей водой, равномерно нанесите средство, оставьте действовать
              на 1 час. Затем прополоскайте и высушите. Not suitable for wool,
              leather, or silk items.
            </p>
          </div>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blobContainer2}>
            <div className={styles.blob3}>
              <img src={icon2} alt="" aria-hidden />
              <h3>Boost your washing machine</h3>
              <p>
                Многократно усиливает эффект стирального порошка. Просто
                добавьте Otty в отсек к вашему основному порошку. Подходит для
                белых, черных и цветных тканей.
              </p>
            </div>
            <div className={styles.blob4}>
              <img src={icon3} alt="" aria-hidden />
              <h3>Cleaning surfaces</h3>
              <p>
                Смешайте с небольшим количеством горячей воды до образования
                пасты. Нанесите получившуюся пасту на пятно и оставьте на 15-30
                минут. Смойте чистой водой и дайте высохнуть. А после просто
                сотрите грязь тряпкой.
              </p>
            </div>
          </div>
          <div className={styles.blob5}>
            <img src={icon2} alt="" aria-hidden />
            <h3>Cleaning kitchen and tableware</h3>
            <p>
              Эффективно удаляет даже самый плотный слой жира, налет накипи,
              въевшиеся пятна от чая и кофе. Кастрюли, сковородки, столовые
              приборы, посуда. Otty эффективно очищает любые кухонные предметы.
              Для устранения загрязнения налейте горячую воду до нужного уровня
              очистки, оставьте на 5-10 минут. Тщательно промойте водой.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseSection;
