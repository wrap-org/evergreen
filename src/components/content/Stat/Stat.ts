import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface StatAttributes {}

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
