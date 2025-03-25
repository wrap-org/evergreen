import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { HtmlBoolean } from '@/types/html-boolean.type';

export interface MenuItemAttributes {
  active?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-menu-item': MenuItemAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-menu-item': JSXCustomElement<MenuItemAttributes>;
    }
  }
}
