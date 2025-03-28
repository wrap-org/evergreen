import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface RowAttributes {
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-row': RowAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-row': JSXCustomElement<RowAttributes>;
    }
  }
}
