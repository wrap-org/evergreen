import rawTokens from '@wrap.ngo/tokens/dist/index.css?raw';
import cx from 'classnames';
import React from 'react';

import styles from './Tokens.module.scss';

function getTokens() {
  // Only get tokens inside :root for now
  // The other tokens are media query or desktop modes so
  // we could add a toggle later
  // TODO Add a way to demo dark mode or media query tokens
  const rootRegex = /:root\s*{([^}]*)}/g;
  const root = rawTokens.match(rootRegex);
  return root?.join('\n');
}

function tokenLink(key: string) {
  const collectionRegex = /--([a-z]+)-/;
  const collection = key.match(collectionRegex)?.[1];

  if (!collection) {
    return '#';
  }

  return `/?path=/docs/foundations-tokens-${collection}--docs`;
}

const allTokens = getTokens();

export default function Tokens({
  collection,
}: {
  readonly collection: string;
}) {
  const regex = new RegExp(`--evg-${collection}[a-z0-9-^:]*: [^;]+;`, 'gs');
  const tokensArray = allTokens?.match(regex);
  const tokens = tokensArray?.map((token) => {
    const [key, value] = token.replace(';', '').split(': ');
    return {
      key: key,
      value: value,
    };
  });

  return (
    <table className={styles.tokens}>
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
          const supportedCollections = [
            '--evg-color',
            '--evg-font-family',
            '--evg-font-line-height',
            '--evg-font-size',
            '--evg-font-weight',
            '--evg-radius',
            '--evg-shadow',
            '--evg-spacing',
            '--evg-state',
          ];

          const supportedCollectionValue = supportedCollections.find((type) =>
            token.value.includes(type),
          );
          const supportedCollection = supportedCollections.find((type) =>
            token.key.includes(type),
          );

          function getPreviewType(value, collection, supported) {
            if (supported) {
              return supported.replace('--evg-', '');
            }

            if (value.includes('#')) {
              return 'color';
            }

            if (value.includes('px')) {
              return 'spacing';
            }

            return collection;
          }

          const previewType = getPreviewType(
            token.value,
            collection,
            supportedCollection || supportedCollectionValue,
          );

          const hasText = [
            'font-family',
            'font-size',
            'line-height',
            'font-weight',
          ].includes(previewType);

          return (
            <tr key={token.key}>
              <td>{token.key}</td>
              <td>
                {token.value.includes('var(--') ? (
                  <a href={tokenLink(token.value)}>{token.value}</a>
                ) : (
                  token.value
                )}
              </td>
              <td
                className={cx([
                  styles['tokens__preview-cell'],
                  styles[`tokens__preview-cell--${previewType}`],
                ])}
                style={
                  { '--token-preview': token.value } as React.CSSProperties
                }
              >
                <div
                  className={cx([
                    styles['tokens__preview'],
                    styles[`tokens__preview--${previewType}`],
                  ])}
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
