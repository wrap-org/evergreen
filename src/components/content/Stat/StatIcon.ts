import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface StatIconAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-stat-icon': StatIconAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-stat-icon': JSXCustomElement<StatIconAttributes>;
    }
  }
}
