import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface InputAttributes {
  state?: 'valid' | 'invalid';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-input': InputAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-input': JSXCustomElement<InputAttributes>;
    }
  }
}
