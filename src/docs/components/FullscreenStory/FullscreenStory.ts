import { JSXCustomElement } from '../../../types/jsx-custom-element.type';

export interface DocsFullscreenStoryAttributes {}

declare global {
  interface HTMLElementTagNameMap {
    'docs-fullscreen-story': DocsFullscreenStoryAttributes;
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'docs-fullscreen-story': JSXCustomElement<DocsFullscreenStoryAttributes>;
    }
  }
}
