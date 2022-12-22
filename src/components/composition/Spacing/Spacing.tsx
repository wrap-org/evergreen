import classNames from "classnames";
import React from "react";

import styles from "./Spacing.module.scss";

interface SpacingProps {
  children?: React.ReactNode;
  negative?: boolean;
  top?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid";
  left?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid";
  bottom?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid";
  right?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid";
}

export default function Spacing({
  children,
  negative,
  top,
  left,
  bottom,
  right,
}: SpacingProps) {
  const cx = classNames(styles.spacing, {
    [styles[`spacing--top-${top}`]]: top,
    [styles[`spacing--left-${left}`]]: left,
    [styles[`spacing--bottom-${bottom}`]]: bottom,
    [styles[`spacing--right-${right}`]]: right,
    [styles["spacing--negative"]]: negative,
  });
  return <div className={cx}>{children}</div>;
}

Spacing.defaultProps = {
  children: null,
  top: undefined,
  left: undefined,
  right: undefined,
  bottom: undefined,
  negative: false,
};
