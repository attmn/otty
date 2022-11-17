import React from "react";
import * as styles from "./ScrollUp.module.sass";

const ScrollUp = () => {
  return (
    <button
      className={styles.container}
      onClick={() => window.scrollTo(0, 0)}
      aria-hidden
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        tabIndex="-1"
      >
        <circle cx="32" cy="32" r="30" strokeWidth="4" />
        <path
          d="M31.6521 43.9423V19.3625M20.8984 30.1162L31.6521 19.3625L42.4057 30.1162"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default ScrollUp;
