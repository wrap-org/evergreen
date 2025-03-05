import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Spacing } from '../../../types/tokens.type';

export interface SectionAttributes {
  padding?: Spacing | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-section': SectionAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-section': JSXCustomElement<SectionAttributes>;
    }
  }
}
