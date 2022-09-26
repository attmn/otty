import React from "react";

import * as styles from "./VideoSection.module.sass";
import Button from "./Button";

const VideoSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <h2>See Otty in action</h2>
        <div className={styles.videoContainer}>
          <div className={styles.videoGroup}>
            <div className={styles.video} />
            <div className={styles.video} />
          </div>
          <div className={styles.videoGroup}>
            <div className={styles.video} />
            <div className={styles.video} />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button ofType="primary" ofSize="large">
            See more on TikTok
          </Button>
          <Button ofType="primaryOutline" ofSize="large">
            See more on Instagram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
