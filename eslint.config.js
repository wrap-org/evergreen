import etchConfig from '@etchteam/eslint-config';
import globals from 'globals';

export default [
  {
    // ESLint 8 ignored dotfiles by default. ESLint 9 does not.
    ignores: ['**/.*', 'src/index.tsx', 'dist', 'storybook-static'],
  },
  ...etchConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'always',
        },
      ],
      '@typescript-eslint/no-namespace': [
        'error',
        {
          allowDeclarations: true,
        },
      ],
      'no-irregular-whitespace': [
        'error',
        {
          skipJSXText: true,
        },
      ],
    },
  },
];
