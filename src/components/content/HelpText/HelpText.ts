import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface HelpTextAttributes {
  type?: 'neutral' | 'positive' | 'negative';
}

@customElement('evg-help-text')
export class HelpText extends LitElement {
  static readonly properties = {
    type: {
      type: String,
      reflect: true,
    },
  };

  type = 'neutral';

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-help-text': HelpTextAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-help-text': JSXCustomElement<HelpTextAttributes>;
    }
  }
}
