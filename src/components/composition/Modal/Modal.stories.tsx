import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Card from 'components/canvas/Card/Card';
import Button from 'components/controls/Button/Button';
import Icon from 'components/content/Icon/Icon';

import Modal, { useModalRef } from './Modal';
import Grid from '../Grid/Grid';

export default {
  title: 'Composition/Modal',
  component: Modal,
  subcomponents: {
    ModalInner: Modal.Inner,
  },
} as Meta;

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
        <Card border>
          <Card.Body>
            <Modal.Inner>
              <Grid>
                <Grid.Item shrink grow>
                  <h3>Modal</h3>
                </Grid.Item>
                <Grid.Item>
                  <Button
                    aria-label="Close dialog"
                    onClick={() => modalRef.current?.hide()}
                    icon
                  >
                    <Icon icon="close" />
                  </Button>
                </Grid.Item>
              </Grid>
              <p>Content goes here</p>
            </Modal.Inner>
          </Card.Body>
          <Card.Body>
            <Modal.Inner>
              <Grid justify="flex-end">
                <Grid.Item xs={12} md={6}>
                  <Button
                    type="secondary"
                    onClick={() => modalRef.current?.hide()}
                    block
                  >
                    Cancel
                  </Button>
                </Grid.Item>
              </Grid>
            </Modal.Inner>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
};

Default.storyName = 'Modal';
