import classNames from 'classnames';
import React from 'react';

export const skins = ['light', 'dark'];

export const emphasisSkins = [
  'info',
  'neutral',
  'positive',
  'negative',
  'attention',
];

// This component uses non-module CSS
// so that we can define skins at the
// brand/theme level.
export default function Skin({
  skin,
  children,
}: {
  skin: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={classNames('skin', {
        [`skin--${skin}`]: skin,
      })}
    >
      {children}
    </div>
  );
}
