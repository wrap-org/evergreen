import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface AlertAttributes {
  variant?:
    | 'positive'
    | 'positive-light'
    | 'negative'
    | 'negative-light'
    | 'neutral'
    | 'neutral-light';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-alert': AlertAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-alert': JSXCustomElement<AlertAttributes>;
    }
  }
}
