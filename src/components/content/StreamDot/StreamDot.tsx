import classnames from 'classnames';
import React from 'react';

import styles from './StreamDot.module.scss';

import { StreamType } from 'src/types/stream.type';

interface StreamDotProps {
  stream?: StreamType;
}

export default function StreamDot({ stream }: StreamDotProps) {
  const classes = classnames(styles['stream-dot'], {
    [styles[`stream-dot--${stream}`]]: stream,
  });

  return <div className={classes} />;
}

StreamDot.defaultProps = {
  stream: '',
};
