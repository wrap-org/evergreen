import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { HtmlBoolean } from '../../../types/html-boolean.type';
import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Radius } from '../../../types/tokens.type';

export interface ImgAttributes {
  block?: HtmlBoolean;
  responsive?: HtmlBoolean;
  aspectRatio?: string;
  radius?: Radius;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
}

@customElement('evg-img')
export class Img extends LitElement {
  static readonly properties = {
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
