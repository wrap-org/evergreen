import { Meta } from '@storybook/react';
import React from 'react';

import Modal, { useModalRef } from './Modal';

export default {
  title: 'React/Components/Composition/Modal',
  component: Modal,
  subcomponents: {
    ModalInner: Modal.Inner,
    ModalHeader: Modal.Header,
  },
} satisfies Meta;

export const Default = () => {
  const modalRef = useModalRef();

  return (
    <>
      <evg-button variant="primary">
        <button onClick={() => modalRef.current?.show()}>Open the modal</button>
      </evg-button>

      <Modal
        id="story-modal"
        title="Modal title"
        size="lg"
        ref={modalRef}
        onModalMounted={(modalInstance) => modalInstance.current?.show()}
      >
        <evg-box border>
          <evg-box-section>
            <Modal.Inner>
              <Modal.Header onClose={() => modalRef.current?.hide()}>
                <h3>Modal</h3>
              </Modal.Header>

              <p>Content goes here</p>
            </Modal.Inner>
          </evg-box-section>
          <evg-box-section>
            <Modal.Inner>
              <evg-grid justify-content="flex-end">
                <evg-grid-item
                  small-mobile="12"
                  large-mobile="4"
                  small-tablet="3"
                >
                  <evg-button variant="secondary" width="full-width">
                    <button onClick={() => modalRef.current?.hide()}>
                      Cancel
                    </button>
                  </evg-button>
                </evg-grid-item>
              </evg-grid>
            </Modal.Inner>
          </evg-box-section>
        </evg-box>
      </Modal>
    </>
  );
};

Default.storyName = 'Modal';
