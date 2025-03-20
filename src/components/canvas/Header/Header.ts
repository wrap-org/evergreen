import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { HtmlBoolean } from '@/types/html-boolean.type';

export interface HeaderAttributes {
  compact?: HtmlBoolean;
  raised?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header': HeaderAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header': JSXCustomElement<HeaderAttributes>;
    }
  }
}
