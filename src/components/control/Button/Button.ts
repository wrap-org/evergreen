import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface ButtonAttributes {
  size?: 'sm' | 'md';
  variant?: 'default' | 'primary' | 'secondary' | 'negative' | 'text';
  width?: 'full-width' | 'full-width-mobile' | 'square';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-button': ButtonAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-button': JSXCustomElement<ButtonAttributes>;
    }
  }
}
