import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { pulse } from '@/lib/pulse';
import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface LoadingImgAttributes {
  width?: string;
  height?: string;
}

@customElement('evg-loading-img')
export class LoadingImg extends LitElement {
  static readonly properties = {
    width: {
      type: String,
      reflect: true,
    },
    height: {
      type: String,
      reflect: true,
    },
  };

  static readonly styles = [
    pulse,
    css`
      :host {
        aspect-ratio: var(--evg-loading-img-width) /
          var(--evg-loading-img-height);
        height: calc(var(--evg-loading-img-height) * 1px);
        width: calc(var(--evg-loading-img-width) * 1px);
      }
    `,
  ];

  width = '0';
  height = '0';

  render() {
    return html`
      <style>
        :host {
          --evg-loading-img-width: ${this.width};
          --evg-loading-img-height: ${this.height};
        }
      </style>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-loading-img': LoadingImgAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-loading-img': JSXCustomElement<LoadingImgAttributes>;
    }
  }
}
