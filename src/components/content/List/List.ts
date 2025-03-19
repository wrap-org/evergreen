import { JSXCustomElement } from '@/types/jsx-custom-element.type';
import { Spacing } from '@/types/tokens.type';

export interface ListAttributes {
  variant?: 'unstyled' | 'icon';
  spacing?: Spacing | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-list': ListAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-list': JSXCustomElement<ListAttributes>;
    }
  }
}
