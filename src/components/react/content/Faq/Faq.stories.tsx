import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import Faq from './Faq';

export default {
  title: 'React/Components/Content/Faq',
  component: Faq,
  parameters: {
    docs: {
      description: {
        component:
          'A convenience component for FAQs with embedded structured schema data',
      },
    },
  },
} satisfies Meta;

export const Default: StoryFn<{ question: React.ReactNode }> = ({
  question,
}) => <Faq question={question}>Answer goes here</Faq>;

Default.storyName = 'Faq';
Default.args = {
  question: 'Question goes here',
};
