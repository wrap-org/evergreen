import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface CardImgAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-card-img': CardImgAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-card-img': JSXCustomElement<CardImgAttributes>;
    }
  }
}
