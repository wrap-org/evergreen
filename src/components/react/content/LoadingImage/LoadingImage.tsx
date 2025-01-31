import cx from 'classnames';
import React from 'react';

import styles from './LoadingImage.module.scss';

export default function LoadingImage({
  width,
  height,
  shape,
}: {
  readonly width?: number;
  readonly height?: number;
  readonly shape?: '' | 'circle' | 'rounded';
}) {
  const cssVariables = (
    width && height
      ? {
          '--loading-image-width': `${width}px`,
          '--loading-image-height': `${height}px`,
        }
      : undefined
  ) as React.CSSProperties | undefined;

  return (
    <div
      className={cx(styles['loading-image'], {
        [styles[`loading-image--${shape}`]]: !!shape,
      })}
      style={cssVariables}
    />
  );
}
