import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface FormGroupAttributes {
  orientation?: 'horizontal' | 'vertical';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-form-group': FormGroupAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-form-group': JSXCustomElement<FormGroupAttributes>;
    }
  }
}
