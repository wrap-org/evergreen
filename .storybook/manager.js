import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';


addons.setConfig({
  panelPosition: 'bottom',
  theme: create({
    base: 'light',
    backgroundHoverable: '#fff',

    colorPrimary: '#05224b',
    colorSecondary: '#2d9cdb',

    // UI
    appBg: '#fff',
    appContentBg: '#fff',
    appBorderColor: '#eceff2',
    appBorderRadius: 3,

    // Typography
    fontBase: 'Open Sans, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#4d6b87',
    textInverseColor: 'rgba(255,255,255,0.8)',

    // Toolbar default and active colors
    barTextColor: '#fff',
    barSelectedColor: '#fff',
    barBg: '#05224b',

    // Form colors
    inputBg: '#fff',
    inputBorder: '#eceff2',
    inputTextColor: '#4d6b87',
    inputBorderRadius: 3,

    brandTitle: 'Mobius',
    brandUrl: 'https://wrap.org.uk/',
    brandImage: '/logo-horizontal.png',
  }),
});
