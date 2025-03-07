import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface MenuItemAttributes {}

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
