import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import Enter from './Enter';

export default {
  title: 'React/Components/Composition/Enter',
  component: Enter,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // a11y plugin has a problem with the fade
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
  },
} as ComponentMeta<typeof Enter>;

const Template: ComponentStory<typeof Enter> = (args) => {
  const { delay } = args;
  const delayValue = delay ? parseInt(delay, 10) : 1;

  return (
    <evg-grid wrap="wrap">
      {[0, 1, 2].map((item) => (
        <evg-grid-item key={item} small-mobile="12" small-tablet="4">
          <Enter {...args} delay={`${delayValue * item * 0.2}s`}>
            <evg-box>
              <evg-box-section>
                <h2>Card title</h2>
              </evg-box-section>
              <evg-box-section>
                <p className="evg-spacing-bottom-md">
                  Aliquam egestas mi quam, a tincidunt lectus faucibus euismod.
                  Pellentesque et metus nunc. Fusce ante arcu, mattis pretium
                  semper ac, pretium vitae velit. Donec vitae eros et arcu
                  accumsan auctor at id ipsum. Aliquam finibus, mi ac tincidunt
                  blandit, purus elit ornare dui, nec dignissim mi ante sit amet
                  mauris. Nulla eget dui in mauris tempus tincidunt a eget enim.
                </p>
                <evg-button width="full-width-mobile">
                  <button>Button text</button>
                </evg-button>
              </evg-box-section>
            </evg-box>
          </Enter>
        </evg-grid-item>
      ))}
    </evg-grid>
  );
};

export const Fade = Template.bind({});

export const FadeInUp = Template.bind({});
FadeInUp.args = { type: 'fade-in-up' };

export const FadeInDown = Template.bind({});
FadeInDown.args = { type: 'fade-in-down' };

export const Boing = Template.bind({});
Boing.args = { type: 'boing' };
