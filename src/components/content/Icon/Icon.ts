import { LitElement, html, nothing, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

import {
  icons,
  IconName,
  FunctionalIconName,
  DistinctiveIconName,
  functionalIcons,
  distinctiveIcons,
} from './icons';

export interface IconAttributes {
  variant?: 'default' | 'circle';
  label?: string;
  icon?: IconName | FunctionalIconName | DistinctiveIconName;
  set?: 'default' | 'functional' | 'distinctive';
}

@customElement('evg-icon')
export class Icon extends LitElement {
  variant?: 'default' | 'circle';
  label?: string;
  icon?: IconName | FunctionalIconName | DistinctiveIconName;
  set?: 'default' | 'functional' | 'distinctive';

  static readonly properties = {
    variant: { type: String },
    label: { type: String },
    icon: { type: String },
    set: { type: String },
  };

  // Handles shadow dom svgs when using the icon prop.
  // We also style the light dom SVG inside the
  // SCSS. Make sure to update both.
  static styles = css`
    svg {
      aspect-ratio: 1 / 1;
      display: block;
      fill: currentColor;
      flex: 0 0 var(--evg-icon-size);
      height: var(--evg-icon-size);
      min-width: var(--evg-icon-size);
      position: relative;
      width: var(--evg-icon-size);
      z-index: 1;
    }

    path {
      fill: currentColor;
    }

    :host([variant='circle']) {
      svg {
        transform: scale(0.75);
      }
    }
  `;

  constructor() {
    super();
  }

  private get iconSet() {
    if (this.set === 'functional') {
      return functionalIcons;
    }
    if (this.set === 'distinctive') {
      return distinctiveIcons;
    }
    return icons;
  }

  render() {
    const { label, icon } = this;

    const svg = icon ? this.iconSet[icon] : '';

    return html`
      <div
        part="icon"
        aria-hidden="${!label}"
        aria-label="${label || nothing}"
        role="img"
      >
        <slot>${unsafeSVG(svg)}</slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-icon': IconAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-icon': JSXCustomElement<IconAttributes>;
    }
  }
}
