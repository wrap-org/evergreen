import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface LinkAttributes {
  variant?: 'underline' | 'no-underline';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-link': LinkAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-link': JSXCustomElement<LinkAttributes>;
    }
  }
}
