export { Home } from './Home';

export default {
  title: 'Home',
  parameters: {
    layout: 'fullscreen',
    a11y: {
      /* Prevent a11y tests displaying on homepage */
      config: {
        rules: [
          {
            id: 'color-contrast',
            selector: '.evg-text-size-heading-lg',
            enabled: false,
            reason:
              'Text over image with sufficient contrast verified manually',
          },
        ],
      },
    },
  },
  tags: ['!autodocs'],
};
