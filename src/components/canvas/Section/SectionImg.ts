import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface SectionImgAttributes {
  text?: 'light' | 'dark';
  layout?: 'nested' | 'default';
}

@customElement('evg-section-img')
export class App extends LitElement {
  static readonly properties = {
    treatment: { type: String, reflect: true, default: 'dark' },
  };

  render() {
    return html`
      <div part="image">
        <slot name="image"></slot>
      </div>
      <div part="content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-section-img': SectionImgAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-section-img': JSXCustomElement<SectionImgAttributes>;
    }
  }
}
