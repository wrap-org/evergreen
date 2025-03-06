import { Meta } from '@storybook/react';
import React from 'react';

import Modal, { useModalRef } from './Modal';

import Button from 'components/react/controls/Button/Button';

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
      <Button type="primary" onClick={() => modalRef.current?.show()}>
        Open the modal
      </Button>

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
                  <Button
                    type="secondary"
                    onClick={() => modalRef.current?.hide()}
                    block
                  >
                    Cancel
                  </Button>
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
