import classNames from "classnames";
import React from "react";

import styles from "./TextAlign.module.scss";

export default function TextAlign({
  align,
  children,
}: {
  align?: "left" | "right" | "center";
  children: React.ReactNode;
}) {
  return (
    <div
      className={classNames(styles["text-align"], {
        [styles[`text-align--${align}`]]: align,
      })}
    >
      {children}
    </div>
  );
}

TextAlign.defaultProps = {
  align: "left",
};
