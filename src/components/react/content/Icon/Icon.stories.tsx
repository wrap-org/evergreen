import { Meta } from '@storybook/react';
import React from 'react';

import Icon from './Icon';

import Card from 'components/react/canvas/Card/Card';

export default {
  title: 'React/Components/Content/Icon',
  component: Icon,
} as Meta;

function importAll(r) {
  return r.keys().map((i) => i.replace('./', '').replace('.svg', ''));
}

const icons = importAll(
  require.context(
    '../../../../../node_modules/mono-icons/svg/',
    true,
    /\.svg$/,
  ),
);
const customIconNames = importAll(
  require.context('./custom-icons/', true, /\.svg$/),
);

const Template = ({
  iconNames,
  type,
}: {
  readonly iconNames: string[];
  readonly type?: 'mono' | 'custom';
}) => (
  <evg-grid wrap="wrap">
    {iconNames.map((icon) => (
      <evg-grid-item
        small-mobile="6"
        large-mobile="3"
        small-tablet="2"
        fill
        key={icon}
      >
        <Card border>
          <Card.Body>
            <div className="evg-text-align-center">
              <span className="evg-text-size-xl">
                <Icon icon={icon} type={type} />
              </span>
              <br />
              <span className="evg-text-size-sm">{icon}</span>
            </div>
          </Card.Body>
        </Card>
      </evg-grid-item>
    ))}
  </evg-grid>
);

export const Default = () => <Template iconNames={icons} />;
Default.storyName = 'Icon';

export const Custom = () => (
  <Template iconNames={customIconNames} type="custom" />
);
