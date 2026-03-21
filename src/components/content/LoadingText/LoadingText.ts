import { LitElement, html } from 'lit';

import { pulse } from '@/lib/pulse';
import { safeCustomElement } from '@/lib/safe-custom-element';
import { HtmlBoolean } from '@/types/html-boolean.type';
import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface LoadingTextAttributes {
  ariaHidden?: HtmlBoolean;
}

@safeCustomElement('evg-loading-text')
export class LoadingText extends LitElement {
  static readonly properties = {
    ariaHidden: {
      type: String,
      reflect: true,
      attribute: 'aria-hidden',
    },
  };

  static readonly styles = [pulse];

  ariaHidden = 'true';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-loading-text': LoadingTextAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-loading-text': JSXCustomElement<LoadingTextAttributes>;
    }
  }
}
