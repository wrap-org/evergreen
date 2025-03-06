import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

import { HtmlBoolean } from 'src/types/html-boolean.type';

export interface HelpTextAttributes {
  type?: 'neutral' | 'positive' | 'negative';
  inline?: HtmlBoolean;
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
