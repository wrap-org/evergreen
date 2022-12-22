import classNames from "classnames";
import React from "react";

import styles from "./TextButton.module.scss";

import Icon from "components/content/Icon/Icon";
import { Weights } from "src/types/font.type";

interface TextButtonProps {
  children: React.ReactNode;
  icon?: string;
  iconRight?: boolean;
  size?: "sm";
  decorate?: boolean;
  weight?: Weights;
  [x: string]: any;
}

export default function TextButton({
  icon,
  iconRight,
  children,
  size,
  decorate,
  weight,
  ...props
}: TextButtonProps) {
  return (
    <button
      type="button"
      className={classNames(styles["text-button"], {
        [styles["text-button--size-sm"]]: size === "sm",
        [styles["text-button--decorate"]]: decorate,
        [styles[`text-button--weight-${weight}`]]: weight,
      })}
      {...props}
    >
      {!!(icon && !iconRight) && (
        <span
          className={classNames(
            styles["text-button__icon"],
            styles["text-button__icon--left"]
          )}
        >
          <Icon icon={icon} />
        </span>
      )}
      {children}
      {!!(icon && iconRight) && (
        <span
          className={classNames(
            styles["text-button__icon"],
            styles["text-button__icon--right"]
          )}
        >
          <Icon icon={icon} />
        </span>
      )}
    </button>
  );
}
