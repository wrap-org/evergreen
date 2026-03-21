import { customElement } from 'lit/decorators.js';

export function safeCustomElement(tagName: string) {
  return (classOrTarget: CustomElementConstructor, context?: unknown): void => {
    if (customElements.get(tagName)) {
      console.warn(
        `[Evergreen] "${tagName}" is already registered. ` +
          `You may have multiple versions of @wrap.ngo/evergreen loaded, ` +
          `which can cause unexpected behaviour.`,
      );
      return;
    }
    customElement(tagName)(classOrTarget as any, context as any);
  };
}
