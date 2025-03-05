import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Spacing } from '../../../types/tokens.type';

export interface BoxSectionAttributes {
  padding?: Spacing | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-box-section': BoxSectionAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-box-section': JSXCustomElement<BoxSectionAttributes>;
    }
  }
}
