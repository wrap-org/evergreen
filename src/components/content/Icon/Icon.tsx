// import React, { lazy } from 'react';
import React from 'react';
import classNames from 'classnames';

import styles from './Icon.module.scss';

interface IconProps {
  // icon: string;
  color?: string;
  title?: string;
}

// Has to be a PureComponent so we get the shallow prop comparison
// and runs shouldComponentUpdate otherwise the icon flashes when state changes
class Icon extends React.PureComponent<IconProps> {
  render() {
    const {
      // icon,
      color,
      title,
    } = this.props;

    // const IconSVG =
    // lazy(() =>
    // import(
    //  `!!@svgr/webpack?{
    // dimensions: false, svgProps: { viewBox: '0 0 24 24' }
    // }!mono-icons/svg/${icon}.svg`)
    // );

    return (
      <span
        className={classNames(styles.icon, {
          [styles[`icon--${color}`]]: color,
        })}
        title={title}
        aria-hidden={!title}
      >
        {/* <IconSVG /> */}
      </span>
    );
  }
}

export default Icon;
