import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface LabelAttributes {
  variant?: 'secondary';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-label': LabelAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-label': JSXCustomElement<LabelAttributes>;
    }
  }
}
