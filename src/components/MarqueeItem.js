import React from "react";
import * as styles from "./Marquee.module.sass";

const MarqueeItem = ({ children, icon }) => {
  return (
    <div className={styles.marqueeItem}>
      <img src={icon} />
      <span>{children}</span>
    </div>
  );
};

export default MarqueeItem;
