module.exports = {
  extends: ['@etchteam', 'plugin:storybook/recommended'],
  rules: {
    '@next/next/no-html-link-for-pages': 0,
    '@next/next/no-img-element': 0,
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
  },
};
