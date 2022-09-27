import React from "react";

const Wave = (props) => {
  if (props.top) {
    return (
      <svg
        viewBox="0 0 1920 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="topWave"
      >
        <path
          d="M0 15.6424C37 20.5001 71 72.0001 272.466 40.127C526.203 -0.0157471 617.458 5.2236 780.643 28.1453C943.828 51.0669 1169.25 15.1216 1383.89 1.05605C1538.27 -9.06076 1642.14 57.3183 1920 38.5641V195.89H0V15.6424Z"
          fill="#59C3AC"
        />
        <defs>
          <clipPath id="clip0_324_566">
            <rect width="1920" height="9" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        viewBox="0 0 1920 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="botWave"
      >
        <path
          d="M0 180.248C57.5 169.5 74 144 272.466 155.763C528.909 170.963 617.458 190.667 780.643 167.745C943.828 144.823 1169.25 180.769 1383.89 194.834C1538.27 204.951 1642.14 138.572 1920 157.326V0H0V180.248Z"
          fill="#59C3AC"
        />
        <defs>
          <clipPath id="clip0_324_566">
            <rect width="1920" height="9" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
};

export default Wave;
