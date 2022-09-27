import React, { useState } from "react";
import classNames from "classnames";

import * as styles from "./FaqSection.module.sass";

const FaqSection = () => {
  return (
    <div className={styles.container} id="compare">
      <div className={styles.sectionContainer}>
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className={styles.list}>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
          <Accordion question="Question">Answer</Accordion>
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
