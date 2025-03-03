import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Radius } from '../../../types/radius.type';

export interface CardAttributes {
  radius: Radius;
}

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
