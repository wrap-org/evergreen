module.exports = {
  extends: ['@etchteam'],
  rules: {
    '@next/next/no-html-link-for-pages': 0,
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
      },
    ],
  },
};
