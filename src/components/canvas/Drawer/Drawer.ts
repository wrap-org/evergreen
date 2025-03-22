import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface DrawerAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-drawer': DrawerAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-drawer': JSXCustomElement<DrawerAttributes>;
    }
  }
}
