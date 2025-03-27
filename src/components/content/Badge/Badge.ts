import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface BadgeAttributes {
  variant?:
    | 'forest'
    | 'forest-light'
    | 'earth'
    | 'sand'
    | 'sky'
    | 'sky-light'
    | 'lime'
    | 'lime-light'
    | 'rose'
    | 'rose-light'
    | 'orange'
    | 'lemon'
    | 'violet'
    | 'lilac'
    | 'coal';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-badge': BadgeAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-badge': JSXCustomElement<BadgeAttributes>;
    }
  }
}
