import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface RadioCheckboxAttributes {
  state?: 'valid' | 'invalid';
}

@customElement('evg-radio-checkbox')
export class RadioCheckbox extends LitElement {
  static readonly properties = {
    state: { type: String, reflect: true },
  };

  render() {
    return html`
      <div part="indicator">
        <svg fill="none" viewBox="0 0 24 24" height="24" width="24" part="icon">
          <path
            d="M20.6644 5.2526C21.0772 5.61952 21.1143 6.25159 20.7474 6.66437L10.0808 18.6644C9.89099 18.8779 9.61898 19 9.33334 19C9.04771 19 8.7757 18.8779 8.58593 18.6644L3.2526 12.6644C2.88568 12.2516 2.92286 11.6195 3.33565 11.2526C3.74843 10.8857 4.3805 10.9229 4.74742 11.3356L9.33334 16.4948L19.2526 5.33565C19.6195 4.92286 20.2516 4.88568 20.6644 5.2526Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div part="content">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'evg-radio-checkbox': RadioCheckboxAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'evg-radio-checkbox': JSXCustomElement<RadioCheckboxAttributes>;
    }
  }
}
