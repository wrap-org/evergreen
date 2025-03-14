import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface MenuItemContentAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-menu-item-content': MenuItemContentAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-menu-item-content': JSXCustomElement<MenuItemContentAttributes>;
    }
  }
}
