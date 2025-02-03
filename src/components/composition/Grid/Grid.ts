import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface GridAttributes {
  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  inline?: 'true' | 'false' | boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline';
  gap?: 'xs' | 'sm' | 'lg' | 'xl';
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-grid': GridAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-grid': JSXCustomElement<GridAttributes>;
    }
  }
}
