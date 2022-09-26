import React from "react";
import * as styles from "./Button.module.sass";
import classNames from "classnames";

const Button = ({ children, ofType = "primary", ofSize, ...props }) => {
  const { button, primary, primaryOutline, secondary, tertiary, large } =
    styles;
  const { className, ...otherProps } = props;

  return (
    <button
      className={classNames(className, button, {
        [`${primary}`]: ofType === "primary",
        [`${primaryOutline}`]: ofType === "primaryOutline",
        [`${secondary}`]: ofType === "secondary",
        [`${tertiary}`]: ofType === "tertiary",
        [`${large}`]: ofSize === "large",
      })}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
