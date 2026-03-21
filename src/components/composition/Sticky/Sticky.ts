import { html, LitElement } from 'lit';

import { safeCustomElement } from '@/lib/safe-custom-element';
import { HtmlBoolean } from '@/types/html-boolean.type';
import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface StickyAttributes {
  largeScreenOnly?: HtmlBoolean;
  top?: string;
}

@safeCustomElement('evg-sticky')
export class Sticky extends LitElement {
  static readonly properties = {
    top: {
      type: String,
      reflect: true,
    },
    largeScreenOnly: {
      type: String,
      reflect: true,
      attribute: 'large-screen-only',
    },
  };

  largeScreenOnly = 'false';
  top = '0';

  render() {
    return html`
      <style>
        :host {
          --evg-sticky-top: ${this.top}px;
        }
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-sticky': StickyAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-sticky': JSXCustomElement<StickyAttributes>;
    }
  }
}
