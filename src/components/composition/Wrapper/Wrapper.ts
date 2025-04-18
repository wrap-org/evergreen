import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Sizes } from '../../../types/size.type';
import { Spacing } from '../../../types/tokens.type';

export interface WrapperAttributes {
  size?: Sizes | 'auto';
  gutter?: Spacing | 'none';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-wrapper': WrapperAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-wrapper': JSXCustomElement<WrapperAttributes>;
    }
  }
}
