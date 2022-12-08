import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { Sizes } from '../../../types/font.type';
import { Colors } from '../../../types/colors.type';

import styles from './Icon.module.scss';

interface IconProps {
  icon: string;
  color?: Colors;
  title?: string;
  size?: Sizes | 'giant';
  /**
   * Whether to use https://icons.mono.company/ or a custom icon from the ./svg
   */
  type?: 'mono' | 'custom';
  /**
   * Align this icon to the text baseline (default true)
   */
  baseline?: boolean;
}

// Has to be a PureComponent so we get the shallow prop comparison
// and runs shouldComponentUpdate otherwise the icon flashes when state changes
function Icon({
  icon,
  color,
  title,
  size,
  type = 'mono',
  baseline = true,
}: IconProps) {
  const [IconSVG, setIcon] = useState(null);
  useEffect(() => {
    const fetchIcon = async () => {
      const dynamicIcon = type === 'custom'
        ? await import(`!!@svgr/webpack!./svg/${icon}.svg`)
        : await import(`!!@svgr/webpack!mono-icons/svg/${icon}.svg`);
      setIcon(dynamicIcon.default);
    };

    fetchIcon();
  }, [icon, type]);

  return (
    <span
      className={classNames(styles.icon, {
        [styles[`icon--${color}`]]: color,
        [styles[`icon--${size}`]]: size,
        [styles['icon--baseline']]: baseline,
      })}
      title={title}
      aria-hidden={!title}
    >
      {IconSVG}
    </span>
  );
}

export default Icon;
