module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
    tsconfigRootDir: './',
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['scripts/**/*.js', 'src/**/*.stories.tsx'],
      rules: {
        'import/no-extraneous-dependencies': [
          'error', {
            devDependencies: true,
          },
        ],
      },
    },
    {
      files: ['scripts/**/*.js'],
      rules: {
        'global-require': 0,
      },
    },
  ],
};
