import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface CardAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-card': CardAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-card': JSXCustomElement<CardAttributes>;
    }
  }
}
