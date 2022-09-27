import React from "react";
import * as styles from "./Button.module.sass";
import classNames from "classnames";

const Button = ({
  children,
  ofType = "primary",
  ofSize,
  isDisabled,
  ...props
}) => {
  const {
    button,
    primary,
    primaryOutline,
    secondary,
    tertiary,
    whiteOutline,
    large,
  } = styles;
  const { className, ...otherProps } = props;

  return (
    <button
      className={classNames(button, {
        [`${primary}`]: ofType === "primary",
        [`${primaryOutline}`]: ofType === "primaryOutline",
        [`${secondary}`]: ofType === "secondary",
        [`${tertiary}`]: ofType === "tertiary",
        [`${whiteOutline}`]: ofType === "whiteOutline",
        [`${large}`]: ofSize === "large",
      })}
      {...otherProps}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
