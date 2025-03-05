import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface MetaAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-meta': MetaAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-meta': JSXCustomElement<MetaAttributes>;
    }
  }
}
