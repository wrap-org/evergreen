import { Meta, StoryFn } from '@storybook/react-vite';
import React, { useRef, useEffect } from 'react';

import { a11yModal } from '@/lib/a11y-tests/a11y-modal';

import '../../canvas/Card/Card';

const description = `
An overlay dialogue demanding user attention before returning to the main interface.
The modal component provides a flexible overlay content area that can have any content
dropped in, whilst handling accessibility features such as focus management and
keyboard navigation.

Other than the backdrop and box shadow, it does not provide any styles. Recommended
to be used with a wrap and a box.
`;

export default {
  parameters: {
    layout: 'fullscreen',
    docs: {
      subtitle:
        'An overlay dialogue demanding user attention before returning.',
      figma:
        'https://www.figma.com/design/FTracH5vU8pdOK0jLKWnSU/%F0%9F%8C%B2-Evergreen?node-id=6288-7138&t=g3niGv3HxLa5NL0O-0',
      story: {
        inline: false,
        height: '22rem',
      },
      description: {
        component: description,
      },
    },
  },
} satisfies Meta;

export const Modal: StoryFn = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = document.querySelector(
      'evg-modal dialog',
    ) as HTMLDialogElement;
    modal.showModal();
  }, []);
  return (
    <>
      <evg-button>
        <button
          type="button"
          id="toggle"
          onClick={() => {
            if (dialogRef.current) {
              dialogRef.current.showModal();
            }
          }}
        >
          Open dialog
        </button>
      </evg-button>
      <evg-modal>
        <dialog aria-modal="true" aria-labelledby="modal-title" ref={dialogRef}>
          <evg-wrapper size="xs" gutter="none">
            <evg-box padding="md" radius="md">
              <evg-grid>
                <evg-grid-item grow>
                  <h3 id="modal-title">Modal title</h3>
                </evg-grid-item>
                <evg-grid-item>
                  <form method="dialog">
                    <evg-button width="square" variant="ghost">
                      <button type="button" aria-label="Close">
                        <evg-icon icon="close" />
                      </button>
                    </evg-button>
                  </form>
                </evg-grid-item>
              </evg-grid>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </evg-box>
          </evg-wrapper>
        </dialog>
      </evg-modal>
    </>
  );
};

Modal.play = async ({ canvasElement, step }) => {
  await a11yModal({ canvasElement, step });
};
