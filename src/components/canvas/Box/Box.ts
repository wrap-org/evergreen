import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Spacing } from '../../../types/spacing.type';

export interface BoxAttributes {
  border?: string | boolean;
  padding?: Spacing | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-box': BoxAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-box': JSXCustomElement<BoxAttributes>;
    }
  }
}
