import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";
import Media from "react-media";
import { Link } from "gatsby";

import * as styles from "./Hero.module.sass";
import * as marqueeStyles from "./Marquee.module.sass";
import Button from "./Button";
import MarqueeItem from "./MarqueeItem";

import mockup from "../img/mockupFront.png";
import icon1 from "../img/icons/allergy.svg";
import icon2 from "../img/icons/plant.svg";
import icon3 from "../img/icons/child.svg";
import icon4 from "../img/icons/chemical.svg";
import icon5 from "../img/icons/clothes.svg";
import Circle from "./elements/Circle";
import Medusa from "./elements/Medusa";
import Fish from "./elements/Fish";
import Seaweed from "./elements/Seaweed";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.elementContainer}>
        <Circle number="2" />
        <Circle number="2" />
        <Circle number="4" />
        <Medusa number="1" />
        <Medusa number="2" />
        <Fish number="group2" />
        <Fish number="group4" />
        <Seaweed number="1" />
        <Seaweed number="2" />
        <Seaweed number="2" />
        <Seaweed number="1" />
        <Fish number="group1" />
      </div>
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
        <div className={styles.imgContainer}>
          <img src={mockup} alt="" aria-hidden className={styles.heroImg} />
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
            {!matches.large ? (
              <div className={marqueeStyles.marqueeContainer}>
                <MarqueeItem icon={icon1}>Hypoallergenic</MarqueeItem>
                <MarqueeItem icon={icon2}>Eco-friendly</MarqueeItem>
                <MarqueeItem icon={icon4}>Chlorine & GMO free</MarqueeItem>
                <MarqueeItem icon={icon3}>Child safe</MarqueeItem>
                <MarqueeItem icon={icon5}>Colours & darks safe</MarqueeItem>
              </div>
            ) : (
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
