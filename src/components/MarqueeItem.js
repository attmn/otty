import React from "react";
import * as styles from "./Marquee.module.sass";

const MarqueeItem = ({ children, icon }) => {
  return (
    <div className={styles.marqueeItem}>
      <img src={icon} alt="" aria-hidden loading="lazy" />
      <span>{children}</span>
    </div>
  );
};

export default MarqueeItem;
