import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface SkipLinkAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-skip-link': SkipLinkAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-skip-link': JSXCustomElement<SkipLinkAttributes>;
    }
  }
}
