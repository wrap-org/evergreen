import React from 'react';
import classNames from 'classnames';

import styles from './Skin.module.scss';

export const skins = [
  'light',
  'medium',
  'dark',
];

export const emphasisSkins = [
  'neutral',
  'positive',
  'negative',
  'attention',
];

export default function Skin({
  skin,
  children,
}: {
  skin: string;
  children: React.ReactNode,
}) {
  return (
    <div
      className={classNames(styles.skin, {
        [styles[`skin--${skin}`]]: skin,
      })}
    >
      {children}
    </div>
  );
}
