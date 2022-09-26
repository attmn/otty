import React from "react";

import * as styles from "./AboutSection.module.sass";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sectionContainer}>
        <h2>
          Whitens, removes stains from coloured, white and black fabrics. Cleans
          any surface, item or piece of clothing
        </h2>
        <div className={styles.blobContainer}>
          <div className={styles.blob1}>
            <div className={styles.blobCircle} />
            <h3>
              Safe for everything<span>(almost)</span>
            </h3>
            <p>
              In the process it decomposes into water, active oxygen and soda.
              No chlorine or other harmful chemicals. Otty is suitable for
              children's clothing and completely safe for people with allergies
            </p>
          </div>
          <div className={styles.smBlobContainer}>
            <div className={styles.blobSm2}>
              Cleans tableware from grease, soot & food
            </div>
            <div className={styles.blobSm1}>
              Gets rid of <br /> smells
            </div>
          </div>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.smBlobContainer}>
            <div className={styles.blobSm3}>Gets rid of yellowing</div>
            <div className={styles.blobSm5}>Removes food & drink stains</div>
            <div className={styles.blobSm4}>Removes oil stains</div>
          </div>
          <div className={styles.blob2}>
            <div className={styles.blobCircle} />
            <h3>All-purpose cleaner</h3>
            <p>
              Effectively removes any stains and dirt from white, coloured and
              black fabrics. Does not remove colour and doesn't ruin the fabric.
              Effectively removes dirt from tiles, glass, stone, plastic,
              rubber, enameled surfaces, earthenware, glass-ceramics, upholstery
              and carpets. Kills bacteria and viruses.
            </p>
          </div>
        </div>
        <div className={styles.blobContainer}>
          <div className={styles.blob3}>
            <div className={styles.blobCircle} />
            <h3>Eco-friendly</h3>
            <p>
              Otty works by releasing active oxygen. After use, it can be poured
              down the sink drain without fear of polluting the water with
              harmful chemicals. Our packaging is made from recycled plastic and
              is widely recycled.
            </p>
          </div>
          <div className={styles.smBlobContainer}>
            <div className={styles.blobSm6}>Cleans furniture & carpets</div>
            <div className={styles.blobSm7}>Cleans surfaces</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
