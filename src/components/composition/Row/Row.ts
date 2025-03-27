import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface RowAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-row': RowAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-row': JSXCustomElement<RowAttributes>;
    }
  }
}
