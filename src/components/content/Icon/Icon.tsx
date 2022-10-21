import React from 'react';
import classNames from 'classnames';
import loadable from '@loadable/component';

import styles from './Icon.module.scss';

interface IconProps {
  icon: string;
  color?: string;
  title?: string;
}

const IconSVG = loadable(
  ({ icon }) => import(`!!@svgr/webpack?{ dimensions: false, svgProps: { viewBox: '0 0 24 24' }}!mono-icons/svg/${icon}.svg`),
  {
    cacheKey: (props) => props.icon,
  },
);

// Has to be a PureComponent so we get the shallow prop comparison
// and runs shouldComponentUpdate otherwise the icon flashes when state changes
class Icon extends React.PureComponent<IconProps> {
  render() {
    const {
      icon,
      color,
      title,
    } = this.props;

    return (
      <span
        className={classNames(styles.icon, {
          [styles[`icon--${color}`]]: color,
        })}
        title={title}
        aria-hidden={!title}
      >
        <IconSVG icon={icon} />
      </span>
    );
  }
}

export default Icon;
