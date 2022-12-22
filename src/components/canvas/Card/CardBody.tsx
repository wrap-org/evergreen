import classNames from "classnames";
import React from "react";

import styles from "./Card.module.scss";

interface CardBodyProps {
  children: React.ReactNode;
  padded?: boolean;
  border?: boolean;
  hidden?: boolean;
}

export default function CardBody({
  children,
  padded,
  border,
  hidden,
}: CardBodyProps) {
  return (
    <div
      className={classNames(styles.card__body, {
        [styles["card__body--padded"]]: padded,
        [styles["card__body--border"]]: border,
        [styles["card__body--hidden"]]: hidden,
      })}
    >
      {children}
    </div>
  );
}

CardBody.defaultProps = {
  padded: true,
  border: false,
  hidden: false,
};
