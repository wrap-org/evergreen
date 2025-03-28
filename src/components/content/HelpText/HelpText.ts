import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

import { HtmlBoolean } from 'src/types/html-boolean.type';

export interface HelpTextAttributes {
  variant?: 'neutral' | 'positive' | 'negative';
  inline?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-help-text': HelpTextAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-help-text': JSXCustomElement<HelpTextAttributes>;
    }
  }
}
