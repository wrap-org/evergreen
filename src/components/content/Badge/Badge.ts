import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface BadgeAttributes {
  type?:
    | 'light'
    | 'dark'
    | 'info'
    | 'attention'
    | 'positive'
    | 'negative'
    | 'neutral';
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
