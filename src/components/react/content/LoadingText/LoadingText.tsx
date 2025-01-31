import React, { useEffect, useState } from 'react';

import styles from './LoadingText.module.scss';

export default function LoadingText({
  as,
  chars = 20,
}: {
  readonly as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  readonly chars?: number;
}) {
  const [characters, setCharacters] = useState('');
  const Tag = as ?? ('span' as keyof JSX.IntrinsicElements);

  useEffect(() => {
    const legalChars = '    abcdefghijklmnopqrstuvwxyz';

    const result = Array.from(Array(chars))
      .map(() =>
        legalChars.charAt(Math.floor(Math.random() * legalChars.length)),
      )
      .join('');

    setCharacters(result);
  }, [chars]);

  return (
    <Tag className={styles['loading-text']}>
      <span className={styles['loading-text__text']}>{characters}</span>
    </Tag>
  );
}
