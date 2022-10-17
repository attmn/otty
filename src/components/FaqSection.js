import React, { useState } from "react";
import classNames from "classnames";

import * as styles from "./FaqSection.module.sass";

const FaqSection = () => {
  return (
    <div className={styles.container} id="faq">
      <div className={styles.sectionContainer}>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className={styles.list}>
          <Accordion question="How safe is Otty?">
            Our stain remover is 100% safe. In the process it decomposes into
            water, active oxygen and soda. No chlorine or other harmful
            chemicals. Otty is suitable for children's clothing and completely
            safe for people with allergies
          </Accordion>
          <Accordion question="Which type of stains can Otty remove?">
            Otty's is designed to eliminate organic-based stains. Otty
            effortlessly removes any food or drink, scale, dirt, soot, and fat.
            However, inorganic stains like rust, paint, cosmetics, adhesives,
            and technical fluids are more difficult to remove
          </Accordion>
          <Accordion question="How do I clean clothes with Otty?">
            Otty is suitable for both hand and machine wash, as well as soaking
            your clothes. It can safely remove stains from any colour and whiten
            the whites, without damaging your coloured and dark clothes. You can
            find detailed instructions on our website and our packaging
          </Accordion>
          <Accordion question="How do I clean kitchenware with Otty?">
            To remove stains, fill the item with hot water up to the desired
            level of cleaning or place the item inside a container of hot water.
            Add 1/2 to 2 scoop of Otty per 1L. Leave for 15-30mins. Wash and
            rinse thoroughly before using
          </Accordion>
          <Accordion question="How do I clean surfaces with Otty?">
            Mix with a small amount of water until you get a paste. Apply paste
            to stain and leave for 15-30min. Rinse with clean water and dry
          </Accordion>
          <Accordion question="Can Otty get rid of old stubborn stains?">
            Yes, even old tough stains can be removed with Otty. You just need
            to mix Otty into a paste (See instructions) and apply it to the
            existing stain to do this. Place the fabric in the washing machine
            after applying the paste to the stain. Active oxygen will enhance
            the power of the washing powder and completely remove the old stain
          </Accordion>
          <Accordion question="Which fabrics shouldn't be used with Otty?">
            Otty shouldn't be used with delicate fabrics such as silk, wool,
            down feather and membrane fabrics. See our packaging for full safety
            information
          </Accordion>
          <Accordion question="Which materials/surfaces shouldn't be used with Otty?">
            Due to the process of oxygen evolution, you should avoid using Otty
            on copper, aluminium and finished or coated surfaces such as painted
            surfaces, metals, polished wood. These surfaces will oxidise and
            deteriorate when in contact with Otty or their coating will be
            damaged. Do not soak fabrics with metal fasteners or flame-resistant
            finishes. See our packaging for full safety information
          </Accordion>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <button
        className={classNames(styles.question, {
          [`${styles.active}`]: isOpen === true,
        })}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {question}
        <Chevron />
      </button>
      <div
        className={classNames(styles.answer, {
          [`${styles.active}`]: isOpen === true,
        })}
      >
        <p>{children}</p>
      </div>
    </div>
  );
};

const Chevron = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_380_421)">
        <path d="M1.4866 6.48659C0.665572 7.30762 0.665571 8.63876 1.4866 9.45979L10.5132 18.4864C11.3343 19.3075 12.6657 19.3075 13.4868 18.4864L22.5134 9.45978C23.3344 8.63876 23.3344 7.30762 22.5134 6.48659V6.48659C21.6924 5.66557 20.3612 5.66557 19.5402 6.48659L13.4868 12.54C12.6657 13.3611 11.3343 13.3611 10.5132 12.54L4.45979 6.48659C3.63876 5.66557 2.30762 5.66557 1.4866 6.48659V6.48659Z" />
      </g>
      <defs>
        <clipPath id="clip0_380_421">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(24) rotate(90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FaqSection;
