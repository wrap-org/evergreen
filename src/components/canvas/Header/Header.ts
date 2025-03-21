import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { HtmlBoolean } from '@/types/html-boolean.type';

export interface HeaderAttributes {
  compact?: HtmlBoolean;
  raised?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header': HeaderAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header': JSXCustomElement<HeaderAttributes>;
    }
  }
}

export interface HeaderLogoAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header-logo': HeaderLogoAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header-logo': JSXCustomElement<HeaderLogoAttributes>;
    }
  }
}

export interface HeaderPrimaryNavAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header-primary-nav': HeaderPrimaryNavAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header-primary-nav': JSXCustomElement<HeaderPrimaryNavAttributes>;
    }
  }
}

export interface HeaderSecondaryNavAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header-secondary-nav': HeaderSecondaryNavAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header-secondary-nav': JSXCustomElement<HeaderSecondaryNavAttributes>;
    }
  }
}

export interface HeaderMegaMenuAttributes {
  open?: HtmlBoolean;
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header-mega-menu': HeaderMegaMenuAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header-mega-menu': JSXCustomElement<HeaderMegaMenuAttributes>;
    }
  }
}

export interface HeaderMobileNavAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'evg-header-mobile-nav': HeaderMobileNavAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-header-mobile-nav': JSXCustomElement<HeaderMobileNavAttributes>;
    }
  }
}
