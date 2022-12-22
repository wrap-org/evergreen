import classNames from "classnames";
import React from "react";

import styles from "./HelpText.module.scss";

export default function HelpText({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: "neutral" | "positive" | "negative";
}) {
  return (
    <div
      className={classNames(styles["help-text"], {
        [styles[`help-text--${type}`]]: type,
      })}
    >
      {children}
    </div>
  );
}

HelpText.defaultProps = {
  type: "neutral",
};
