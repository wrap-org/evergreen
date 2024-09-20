import classNames from 'classnames';
import React from 'react';

export const skins = ['light', 'dark'];

export const emphasisSkins = [
  'info',
  'attention',
  'positive',
  'negative',
  'neutral',
];

// This component uses non-module CSS
// so that we can define skins at the
// brand/theme level.
export default function Skin({
  skin,
  children,
}: {
  readonly skin: string;
  readonly children?: React.ReactNode;
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
