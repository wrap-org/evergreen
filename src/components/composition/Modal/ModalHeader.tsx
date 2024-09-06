import React from 'react';

import Grid from 'components/composition/Grid/Grid';
import Icon from 'components/content/Icon/Icon';
import Button from 'components/controls/Button/Button';

export interface HeaderProps {
  readonly children?: React.ReactNode;
  readonly onClose: (event: Event) => void;
}

const ModalHeader = ({ onClose, children }: HeaderProps) => (
  <Grid>
    <Grid.Item shrink grow>
      {children}
    </Grid.Item>
    <Grid.Item>
      <Button aria-label="Close dialog" onClick={onClose} icon>
        <Icon icon="close" />
      </Button>
    </Grid.Item>
  </Grid>
);

export default ModalHeader;
