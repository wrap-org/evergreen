import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface CardContentAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-card-content': CardContentAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-card-content': JSXCustomElement<CardContentAttributes>;
    }
  }
}
