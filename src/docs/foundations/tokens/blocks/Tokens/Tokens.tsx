import React from 'react';

import styles from './Tokens.module.scss';

// eslint-disable-next-line import/no-unresolved
import allTokens from '!!raw-loader!@etchteam/mobius-tokens/dist/index.css';

export default function Tokens({
  collection,
}: {
  readonly collection: string;
}) {
  const regex = new RegExp(`--mobius-${collection}[a-z0-9-^:]*: [^;]+;`, 'gs');
  const tokensArray = allTokens.match(regex);
  console.log(tokensArray);
  const tokens = tokensArray?.map((token) => {
    const [key, value] = token.replace(';', '').split(': ');
    return {
      key: key,
      value: value,
    };
  });

  const hasText = ['font-size', 'font-weight', 'font-family'].includes(
    collection,
  );

  return (
    <table className={`${styles.tokens} sb-unstyled`}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th>Preview</th>
        </tr>
      </thead>
      <tbody>
        {tokens?.map((token) => {
          // Check if the token.value includes one of our collections:
          //  color, radius, spacing, shadow
          const supportedCollection = [
            '--mobius-color',
            '--mobius-radius',
            '--mobius-spacing',
            '--mobius-shadow',
          ].find((type) => token.value.includes(type));

          const previewType = supportedCollection
            ? supportedCollection.replace('--mobius-', '')
            : collection;

          return (
            <tr key={token.key}>
              <td>
                <code>{token.key}</code>
              </td>
              <td>{token.value}</td>
              <td>
                <div
                  className={`${styles.tokens__preview} ${styles[`tokens__preview--${previewType}`]}`}
                  style={
                    { '--token-preview': token.value } as React.CSSProperties
                  }
                >
                  {hasText ? 'Lorem ipsum' : ''}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
