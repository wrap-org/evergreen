import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface AlertAttributes {
  type?: 'info' | 'attention' | 'positive' | 'negative' | 'neutral';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-alert': AlertAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-alert': JSXCustomElement<AlertAttributes>;
    }
  }
}
