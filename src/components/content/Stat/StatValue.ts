import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface StatValueAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-stat-value': StatValueAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-stat-value': JSXCustomElement<StatValueAttributes>;
    }
  }
}
