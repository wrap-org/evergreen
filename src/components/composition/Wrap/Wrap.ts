import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Sizes } from '../../../types/size.type';
import { Spacing } from '../../../types/spacing.type';

export interface WrapAttributes {
  size?: Sizes | 'auto';
  gutter?: Spacing | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-wrap': WrapAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-wrap': JSXCustomElement<WrapAttributes>;
    }
  }
}
