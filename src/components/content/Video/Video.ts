import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface VideoAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-video': VideoAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-video': JSXCustomElement<VideoAttributes>;
    }
  }
}
