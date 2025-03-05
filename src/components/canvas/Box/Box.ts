import { HtmlBoolean } from '../../..//types/html-boolean.type';
import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Spacing } from '../../../types/tokens.type';

export interface BoxAttributes {
  border?: HtmlBoolean;
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
