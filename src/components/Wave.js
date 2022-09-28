import React from "react";

const Wave = (props) => {
  switch (props.type) {
    case "top":
      return (
        <svg
          className="topWave"
          viewBox="0 0 1920 137"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 15.6423C37 20.5 71 72 272.466 40.1269C526.203 -0.0158615 617.458 5.22348 780.643 28.1451C943.828 51.0668 1169.25 15.1215 1383.89 1.05592C1538.27 -9.06089 1642.14 57.3182 1920 38.564V136.5H0V15.6423Z"
            fill="#59C3AC"
          />
        </svg>
      );
    default:
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
