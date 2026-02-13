import { findByShadowRole } from 'shadow-dom-testing-library';
import { expect } from 'storybook/test';

type Step = (name: string, callback: () => Promise<void>) => Promise<void>;

interface A11yModalArgs {
  canvasElement: HTMLElement;
  step: Step;
}

// Based on https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
// Adapted from @etchteam/storybook-addon-a11y-interaction-tests a11yModal.
//
// The escape key test has been removed because native <dialog> modals use the
// browser's Close Watcher API, which only responds to trusted keyboard events.
// Storybook play functions use userEvent.keyboard which dispatches synthetic
// (untrusted) events, so the escape key cannot close a native <dialog> in this
// context. Escape-to-close should be tested at the Playwright level instead.
// See https://github.com/etchteam/storybook-addon-a11y-interaction-tests/issues/18
export async function a11yModal({ canvasElement, step }: A11yModalArgs) {
  const dialog = await findByShadowRole(canvasElement, 'dialog');

  await step(
    'The element that serves as the dialog container has a role of dialog.',
    async () => {
      await expect(dialog).toBeInTheDocument();
    },
  );

  await step(
    'All elements required to operate the dialog are descendants of the element that has role dialog.',
    async () => {
      const closeButton = await findByShadowRole(dialog, 'button', {
        name: /close|cancel|✕|×/i,
      });
      await expect(closeButton).toBeInTheDocument();
    },
  );

  await step(
    'The dialog container element has aria-modal set to true.',
    async () => {
      await expect(dialog).toHaveAttribute('aria-modal', 'true');
    },
  );

  await step('The dialog has an accessible label', async () => {
    const ariaLabel = dialog.getAttribute('aria-label');
    const ariaLabelledBy = dialog.getAttribute('aria-labelledby');
    const labelElement =
      ariaLabelledBy && document.getElementById(ariaLabelledBy);
    await expect(Boolean(ariaLabel || labelElement?.textContent)).toBe(true);
  });

  await step(
    'If dialog has aria-describedby, it references existing content',
    async () => {
      const describedBy = dialog.getAttribute('aria-describedby');

      if (describedBy) {
        const descriptionElement = document.getElementById(describedBy);
        await expect(descriptionElement).toBeInTheDocument();
      }
    },
  );
}
