import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface ModalAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-modal': ModalAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-modal': JSXCustomElement<ModalAttributes>;
    }
  }
}
