import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export type ButtonSize = 'sm' | 'md';

export type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'negative'
  | 'text';

export type ButtonWidth = 'full-width' | 'full-width-mobile' | 'square';

export interface ButtonAttributes {
  size?: ButtonSize;
  variant?: ButtonVariant;
  width?: ButtonWidth;
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
