import { Meta } from '@storybook/react';
import React, { PropsWithChildren } from 'react';

import Button from './Button';

import Icon from 'components/react/content/Icon/Icon';

export default {
  title: 'React/Components/Controls/Button',
  component: Button,
} as Meta;

export function Types() {
  return (
    <>
      <Button>Button</Button>
      <Button type="primary">Button</Button>{' '}
      <Button type="secondary">Button</Button>{' '}
      <Button type="positive">Button</Button>{' '}
      <Button type="negative">Button</Button>{' '}
      <Button type="primary" icon>
        <Icon icon="edit" title="Moderate" />
      </Button>
    </>
  );
}

export function DarkMode() {
  return (
    <evg-section class="evg-theme-dark" padding="md">
      <Button>Button</Button>
      <Button type="primary">Button</Button>{' '}
      <Button type="secondary">Button</Button>{' '}
      <Button type="positive">Button</Button>{' '}
      <Button type="negative">Button</Button>{' '}
      <Button type="primary" icon>
        <Icon icon="edit" title="Moderate" />
      </Button>
    </evg-section>
  );
}

export function Disabled() {
  return (
    <>
      <Button disabled>Button</Button>{' '}
      <Button type="primary" disabled>
        Button
      </Button>{' '}
      <Button type="secondary" disabled>
        Button
      </Button>{' '}
      <Button type="positive" disabled>
        Button
      </Button>{' '}
      <Button type="negative" disabled>
        Button
      </Button>{' '}
      <Button type="primary" icon disabled>
        <Icon icon="edit" title="Moderate" />
      </Button>
    </>
  );
}

export function Sizes() {
  return (
    <>
      <Button size="small">Button</Button> <Button>Button</Button>
    </>
  );
}

export function Block() {
  return (
    <>
      <Button block>Button Block</Button>
      <br />
      <Button block="mobile">Button Block Mobile</Button>
    </>
  );
}

function LinkExample({
  children,
  ...props
}: PropsWithChildren<{ [key: string]: unknown }>) {
  return (
    <a {...props} aria-label="Not just any link, a LinkExample link">
      {children}
    </a>
  );
}

/**
 * Use the `as` prop to control which component the Button renders as.
 */
export function AsComponent() {
  return (
    <Button as={LinkExample} href="#" block>
      Link button
    </Button>
  );
}
