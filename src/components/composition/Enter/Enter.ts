import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

import { HtmlBoolean } from 'src/types/html-boolean.type';

export interface EnterAttributes {
  type?: 'fade' | 'fade-in-down' | 'fade-in-up' | 'boing';
  delay?: string | number;
  enterOnScroll?: HtmlBoolean;
  /**
   * Applies display grid so that children fill the height and width of the component
   */
  fill?: HtmlBoolean;
}

@customElement('evg-enter')
export class Enter extends LitElement {
  private observer?: IntersectionObserver;
  static readonly properties = {
    type: {
      type: String,
      reflect: true,
    },
    delay: {
      type: String,
      reflect: true,
    },
    enterOnScroll: {
      type: Boolean,
      reflect: true,
      attribute: 'enter-on-scroll',
    },
    fill: {
      type: String,
      reflect: true,
    },
    _inView: { state: true },
  };

  type = 'fade';
  enterOnScroll = false;
  delay = '0.5';
  fill = false;
  _inView = false;

  connectedCallback(): void {
    super.connectedCallback();
    if (this.enterOnScroll) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this._inView = true;
              console.log('in view', this._inView);
              this.observer?.unobserve(this);
            }
          });
        },
        { threshold: 0 },
      );
      this.observer.observe(this);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.observer?.disconnect();
  }

  render() {
    const type = this._inView || !this.enterOnScroll ? this.type : '';

    return html`
      <style>
        :host {
          --evg-transition-enter-delay: ${this.delay}s;
          --evg-transition-enter-animation: ${type};
        }
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-enter': EnterAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-enter': JSXCustomElement<EnterAttributes>;
    }
  }
}
