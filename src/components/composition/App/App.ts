import { LitElement, html } from 'lit';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { safeCustomElement } from '@/lib/safe-custom-element';

export interface AppAttributes {
  header?: 'sticky';
}

@safeCustomElement('evg-app')
export class App extends LitElement {
  static readonly properties = {
    header: { type: String, reflect: true },
  };

  render() {
    return html`
      <div part="header">
        <slot name="header"></slot>
      </div>
      <div part="main">
        <slot></slot>
      </div>
      <div part="footer">
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-app': AppAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-app': JSXCustomElement<AppAttributes>;
    }
  }
}
