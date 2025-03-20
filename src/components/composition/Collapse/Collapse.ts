import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { JSXCustomElement } from '@/types/jsx-custom-element.type';

export interface CollapseAttributes {
  open?: boolean;
}

@customElement('evg-collapse')
export class Collapse extends LitElement {
  @property({ reflect: true, type: Boolean }) open?: boolean;

  static readonly styles = [
    css`
      @keyframes evg-collapse-overflow {
        0%,
        99% {
          overflow: hidden;
        }
        100% {
          overflow: visible;
        }
      }
      :host {
        content-visibility: hidden;
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition:
          grid-template-rows var(--evg-transition),
          content-visibility var(--evg-transition),
          overflow var(--evg-transition);
        transition-behavior: allow-discrete;
      }

      .evg-collapse__content {
        overflow: hidden;
      }

      :host([open]:not([open='false'])) {
        animation: evg-collapse-overflow var(--evg-transition) forwards;
        content-visibility: visible;
        grid-template-rows: 1fr;
      }

      :host([open]:not([open='false'])) .evg-collapse__content {
        animation: evg-collapse-overflow var(--evg-transition) forwards;
      }
    `,
  ];

  render() {
    return html`
      <div class="evg-collapse__content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-collapse': CollapseAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-collapse': JSXCustomElement<CollapseAttributes>;
    }
  }
}
