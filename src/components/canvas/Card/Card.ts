import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Radius, Spacing } from '../../../types/tokens.type';

export interface CardAttributes {
  radius?: Radius;
  padding?: Spacing | 'none';
  layout?:
    | 'image-top'
    | 'image-left'
    | 'image-right'
    | 'image-bottom'
    | 'thumb';
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
