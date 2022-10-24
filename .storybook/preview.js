import '../src/styles/main.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  backgrounds: {
    default: 'medium',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'medium',
        value: '#eceff2',
      },
      {
        name: 'dark',
        value: '#05224b',
      },
    ],
  },
}
