import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";

import * as styles from "./Hero.module.sass";
import * as marqueeStyles from "./Marquee.module.sass";
import Button from "./Button";
import MarqueeItem from "./MarqueeItem";

import icon1 from "../img/icons/allergy.svg";
import icon2 from "../img/icons/plant.svg";
import icon3 from "../img/icons/child.svg";
import icon4 from "../img/icons/chemical.svg";
import icon5 from "../img/icons/clothes.svg";
import Media from "react-media";
import { Link } from "gatsby";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <div className={styles.headingContainer}>
          <h1>All-purpose oxygen cleaner Otty</h1>
          <span>
            A safe and effective solution for those who care about their
            family’s well-being
          </span>
          <Link to="/#buy">
            <Button ofType="secondary" ofSize="large">
              Buy now
            </Button>
          </Link>
        </div>
      </div>
      <Media
        q
        queries={{
          small: "(max-width: 600px)",
          large: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.small && (
              <div className={marqueeStyles.marqueeContainer}>
                <MarqueeItem icon={icon1}>Hypoallergenic</MarqueeItem>
                <MarqueeItem icon={icon2}>Eco-friendly</MarqueeItem>
                <MarqueeItem icon={icon3}>Child safe</MarqueeItem>
                <MarqueeItem icon={icon4}>Chlorine & GMO free</MarqueeItem>
                <MarqueeItem icon={icon5}>Colours & darks safe</MarqueeItem>
              </div>
            )}
            {matches.large && (
              <Marquee
                className={marqueeStyles.marqueeContainer}
                gradient={false}
              >
                <MarqueeItem icon={icon1}>Hypoallergenic</MarqueeItem>
                <MarqueeItem icon={icon2}>Eco-friendly</MarqueeItem>
                <MarqueeItem icon={icon3}>Child safe</MarqueeItem>
                <MarqueeItem icon={icon4}>Chlorine & GMO free</MarqueeItem>
                <MarqueeItem icon={icon5}>Colours & darks safe</MarqueeItem>
                <MarqueeItem icon={icon1}>Hypoallergenic</MarqueeItem>
                <MarqueeItem icon={icon2}>Eco-friendly</MarqueeItem>
                <MarqueeItem icon={icon3}>Child safe</MarqueeItem>
                <MarqueeItem icon={icon4}>Chlorine & GMO free</MarqueeItem>
                <MarqueeItem icon={icon5}>Colours & darks safe</MarqueeItem>
              </Marquee>
            )}
          </Fragment>
        )}
      </Media>
    </div>
  );
};

export default Hero;
