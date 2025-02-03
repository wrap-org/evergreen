import React from 'react';

import Icon from 'components/react/content/Icon/Icon';
import TextButton from 'components/react/controls/TextButton/TextButton';

export interface HeaderProps {
  readonly children?: React.ReactNode;
  readonly onClose: (event: Event) => void;
}

const ModalHeader = ({ onClose, children }: HeaderProps) => (
  <evg-grid align-items="center">
    <evg-grid-item shrink grow>
      {children}
    </evg-grid-item>
    <evg-grid-item>
      <TextButton aria-label="Close dialog" onClick={onClose}>
        <Icon icon="close" size="xl" />
      </TextButton>
    </evg-grid-item>
  </evg-grid>
);

export default ModalHeader;
