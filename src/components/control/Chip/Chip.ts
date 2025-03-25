import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { HtmlBoolean } from '@/types/html-boolean.type';

export interface ChipAttributes {
  variant?: 'light' | 'dark';
  selected?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-chip': ChipAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-chip': JSXCustomElement<ChipAttributes>;
    }
  }
}
