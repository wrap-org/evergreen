import { Meta } from '@storybook/react';
import React from 'react';

import Wrap from './Wrap';

import Card from 'components/canvas/Card/Card';

export default {
  title: 'Components/Composition/Wrap',
  component: Wrap,
} as Meta;

export function Default() {
  const sizes = ['sm', 'md', 'lg', 'xl'];

  return (
    <>
      {sizes.map((size) => (
        <Wrap size={size} className="m-spacing-bottom-md" key={size}>
          <Card border>
            <Card.Body>
              <div className="m-text-align-center">
                Limit width of the content
              </div>
            </Card.Body>
          </Card>
        </Wrap>
      ))}
    </>
  );
}

Default.storyName = 'Wrap';
