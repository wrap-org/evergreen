import { LitElement, css, html } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';
import { safeCustomElement } from '@/lib/safe-custom-element';

import globe from './globe.svg?raw';

export interface SupergraphicAttributes {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

@safeCustomElement('evg-supergraphic')
export class Supergraphic extends LitElement {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  static readonly properties = {
    position: { type: String },
  };

  // Handles shadow dom svgs
  static styles = css`
    svg {
      aspect-ratio: 930 / 800;
      display: block;
      width: 100%;
      height: auto;
    }

    path {
      fill: currentColor;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div part="content">
        <slot></slot>
      </div>
      <div part="svg">${unsafeSVG(globe)}</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-supergraphic': SupergraphicAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-supergraphic': JSXCustomElement<SupergraphicAttributes>;
    }
  }
}
