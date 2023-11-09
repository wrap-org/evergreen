import classnames from 'classnames';
import React from 'react';

import { StreamType } from '../../../types/stream.type';

import styles from './StreamDot.module.scss';

interface StreamDotProps {
  stream?: StreamType;
}

export default function StreamDot({ stream }: Readonly<StreamDotProps>) {
  const classes = classnames(styles['stream-dot'], {
    [styles[`stream-dot--${stream}`]]: stream,
  });

  return <div className={classes} />;
}
