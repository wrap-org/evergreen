module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
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
