import React from 'react';

import Grid from 'components/react/composition/Grid/Grid';
import Icon from 'components/react/content/Icon/Icon';
import TextButton from 'components/react/controls/TextButton/TextButton';

export interface HeaderProps {
  readonly children?: React.ReactNode;
  readonly onClose: (event: Event) => void;
}

const ModalHeader = ({ onClose, children }: HeaderProps) => (
  <Grid align="center">
    <Grid.Item shrink grow>
      {children}
    </Grid.Item>
    <Grid.Item>
      <TextButton aria-label="Close dialog" onClick={onClose}>
        <Icon icon="close" size="xl" />
      </TextButton>
    </Grid.Item>
  </Grid>
);

export default ModalHeader;
