import { LitElement, html, nothing, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

import {
  icons,
  IconName,
  FunctionalIconName,
  DistinctiveIconName,
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

  // Static cache shared across all Icon instances
  private static _functionalIcons?: Record<string, string>;
  private static _distinctiveIcons?: Record<string, string>;
  private static _functionalPromise?: Promise<Record<string, string>>;
  private static _distinctivePromise?: Promise<Record<string, string>>;

  constructor() {
    super();
  }

  private get iconSet(): Record<string, string> {
    if (this.set === 'functional') {
      return Icon._functionalIcons ?? {};
    }
    if (this.set === 'distinctive') {
      return Icon._distinctiveIcons ?? {};
    }
    return icons;
  }

  private async loadIconSet() {
    if (this.set === 'functional' && !Icon._functionalIcons) {
      if (!Icon._functionalPromise) {
        Icon._functionalPromise = import('./functional-icons').then(
          (m) => m.functionalIcons,
        );
      }
      Icon._functionalIcons = await Icon._functionalPromise;
      this.requestUpdate();
    } else if (this.set === 'distinctive' && !Icon._distinctiveIcons) {
      if (!Icon._distinctivePromise) {
        Icon._distinctivePromise = import('./distinctive-icons').then(
          (m) => m.distinctiveIcons,
        );
      }
      Icon._distinctiveIcons = await Icon._distinctivePromise;
      this.requestUpdate();
    }
  }

  updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (
      (changedProperties.has('set') || changedProperties.has('icon')) &&
      (this.set === 'functional' || this.set === 'distinctive')
    ) {
      this.loadIconSet();
    }
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
