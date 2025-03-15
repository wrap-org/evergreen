import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { HtmlBoolean } from '@/types/html-boolean.type';

export interface MenuBarAttributes {
  compact?: HtmlBoolean;
  raised?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-menu-bar': MenuBarAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-menu-bar': JSXCustomElement<MenuBarAttributes>;
    }
  }
}
