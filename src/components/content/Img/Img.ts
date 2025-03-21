import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { HtmlBoolean } from '../../../types/html-boolean.type';
import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { Radius, Spacing } from '../../../types/tokens.type';

export interface ImgAttributes {
  block?: HtmlBoolean;
  responsive?: HtmlBoolean;
  aspectRatio?: string;
  radius?: Radius;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  padding?: Spacing;
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
    padding: {
      type: String,
      reflect: true,
    },
  };

  ariaHidden = 'true';
  aspectRatio = 'auto';
  objectFit = 'fill';
  objectPosition = '50% 50%';

  render() {
    const { aspectRatio, objectFit, objectPosition } = this;

    return html`
      <style>
        :host {
          --evg-img-aspect-ratio: ${aspectRatio};
          --evg-img-object-fit: ${objectFit};
          --evg-img-object-position: ${objectPosition};
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
