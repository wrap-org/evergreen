import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface DocsPlaceholderAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'docs-placeholder': DocsPlaceholderAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'docs-placeholder': JSXCustomElement<DocsPlaceholderAttributes>;
    }
  }
}
