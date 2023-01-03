import classNames from 'classnames';
import React, { useState, useEffect } from 'react';

import { Colors } from '../../../types/colors.type';
import { Sizes } from '../../../types/font.type';

import styles from './Icon.module.scss';

interface IconProps {
  icon: string;
  color?: Colors;
  title?: string;
  size?: Sizes | 'giant';
  /**
   * Whether to use https://icons.mono.company/ or a custom icon from the ./custom-icons
   */
  type?: 'mono' | 'custom';
  /**
   * Align this icon to the text baseline (default true)
   */
  baseline?: boolean;
}

const defaultIcon = {
  default() {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      />
    );
  },
};

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
  const [iconImport, setIcon] = useState(defaultIcon);
  useEffect(() => {
    const fetchIcon = async () => {
      const dynamicIcon =
        type === 'custom'
          ? await import(
              `!!@svgr/webpack?{ svgo: false }!./custom-icons/${icon}.svg`
            )
          : await import(
              `!!@svgr/webpack?{ svgo: false }!mono-icons/svg/${icon}.svg`
            );
      setIcon(dynamicIcon);
    };

    fetchIcon();
  }, [icon, type]);

  const IconSVG = iconImport ? iconImport.default : null;

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
      {IconSVG && <IconSVG />}
    </span>
  );
}

export default Icon;
