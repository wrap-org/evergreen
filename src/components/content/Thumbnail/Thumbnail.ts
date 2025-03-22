import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface ThumbnailAttributes {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-thumbnail': ThumbnailAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-thumbnail': JSXCustomElement<ThumbnailAttributes>;
    }
  }
}
