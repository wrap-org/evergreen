import React from 'react';

import ContainerSvg from '../ContainerSvg/ContainerSvg';

import styles from './Container.module.scss';

import {
  Container as ContainerType,
  getColourName,
  Colour,
  Name,
} from 'lib/container';

export default function Container({
  name,
  displayName,
  bodyColour,
  lidColour,
  frequency,
  cost,
}: Readonly<ContainerType & { name: Name; frequency?: string }>) {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <ContainerSvg
          name={name}
          bodyColour={getColourName(bodyColour) as Colour}
          lidColour={getColourName(lidColour)}
        />
      </div>
      <div className={styles.container__content}>
        <h4 className={styles.container__title}>{displayName}</h4>
        {frequency && <p>{frequency}</p>}
        {cost && <p>{cost}</p>}
      </div>
    </div>
  );
}
