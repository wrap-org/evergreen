import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface DividerAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-divider': DividerAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-divider': JSXCustomElement<DividerAttributes>;
    }
  }
}
