import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface StatContentAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-stat-content': StatContentAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-stat-content': JSXCustomElement<StatContentAttributes>;
    }
  }
}
