import cssVariablesTheme from '@etchteam/storybook-addon-css-variables-theme'

import base from '!!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!../src/styles/themes/default/main.scss'
import tbor from '!!style-loader?injectType=lazyStyleTag!css-loader!sass-loader!../src/styles/themes/business-of-recycling/main.scss'

import './styles.scss'

export const parameters = {
  viewMode: 'docs',
  cssVariables: {
    files: {
      'Default': base,
      'Business of recycling': tbor,
    },
    defaultTheme: 'Default',
  }
}

export const decorators = [
  cssVariablesTheme,
]
