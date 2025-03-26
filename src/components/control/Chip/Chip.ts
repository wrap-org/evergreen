import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
export interface ChipAttributes {
  variant?: 'light' | 'dark';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-chip': ChipAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-chip': JSXCustomElement<ChipAttributes>;
    }
  }
}
