import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface ImgAttributes {
  block?: string | boolean;
  responsive?: string | boolean;
  aspectRatio?: string;
  radius?: string | boolean;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

@customElement('evg-img')
export class Img extends LitElement {
  static properties = {
    ariaHidden: {
      type: String,
      reflect: true,
      attribute: 'aria-hidden',
    },
    block: {
      type: String,
      reflect: true,
    },
    responsive: {
      type: String,
      reflect: true,
    },
    aspectRatio: {
      type: String,
      reflect: true,
      attribute: 'aspect-ratio',
    },
    radius: {
      type: String,
      reflect: true,
    },
    objectFit: {
      type: String,
      reflect: true,
      attribute: 'object-fit',
    },
    objectPosition: {
      type: String,
      reflect: true,
      attribute: 'object-position',
    },
  };

  ariaHidden = 'true';
  aspectRatio = 'auto';
  objectFit = 'fill';
  objectPosition = '50% 50%';

  render() {
    return html`
      <style>
        :host {
          --evg-img-aspect-ratio: ${this.aspectRatio};
          --evg-img-object-fit: ${this.objectFit};
          --evg-img-object-position: ${this.objectPosition};
        }
      </style>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-img': ImgAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-img': JSXCustomElement<ImgAttributes>;
    }
  }
}
