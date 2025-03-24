import React from 'react';

export interface HeaderProps {
  readonly children?: React.ReactNode;
  readonly onClose: () => void;
}

const ModalHeader = ({ onClose, children }: HeaderProps) => (
  <evg-grid align-items="center">
    <evg-grid-item shrink grow>
      {children}
    </evg-grid-item>
    <evg-grid-item>
      <evg-button variant="text">
        <button
          type="button"
          onClick={() => onClose()}
          aria-label="Close dialog"
        >
          <evg-icon icon="close" class="evg-text-size-body-xl" />{' '}
        </button>
      </evg-button>
    </evg-grid-item>
  </evg-grid>
);

export default ModalHeader;
