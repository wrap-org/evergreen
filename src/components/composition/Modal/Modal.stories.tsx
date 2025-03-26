import { Meta, StoryFn } from '@storybook/react';
import React, { useRef } from 'react';

import '../../canvas/Card/Card';

const description = `
The Dialog component provides an unopinionated area for any content
to be placed on top of the main app content.

Other than the backdrop and box shadow, it does not provide any styles. Recommended
to be used with a wrap and a box.
`;

export default {
  title: 'Components/Composition/Modal',
  parameters: {
    layout: 'fullscreen',
    docs: {
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
        <dialog ref={dialogRef}>
          <evg-wrapper size="xs" gutter="none">
            <evg-box padding="md" radius="md">
              <evg-grid>
                <evg-grid-item grow>
                  <h3>Modal title</h3>
                </evg-grid-item>
                <evg-grid-item>
                  <form method="dialog">
                    <evg-button width="square" variant="text">
                      <button>
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
