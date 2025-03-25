import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface BreadcrumbAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-breadcrumb': BreadcrumbAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-breadcrumb': JSXCustomElement<BreadcrumbAttributes>;
    }
  }
}
