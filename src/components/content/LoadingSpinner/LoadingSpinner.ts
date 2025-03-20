import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface LoadingSpinnerAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-loading-spinner': LoadingSpinnerAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-loading-spinner': JSXCustomElement<LoadingSpinnerAttributes>;
    }
  }
}
