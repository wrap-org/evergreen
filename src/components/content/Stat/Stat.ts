import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface StatAttributes {
  layout?: 'stack' | 'row';
  align?: 'left' | 'center';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-stat': StatAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-stat': JSXCustomElement<StatAttributes>;
    }
  }
}
