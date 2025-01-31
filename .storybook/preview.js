import React from 'react';
import {
  Title,
  Subtitle,
  Primary,
  Controls,
  Stories,
  useOf,
  Description,
} from '@storybook/blocks';
import Button from 'components/react/controls/Button/Button'
import Grid from 'components/react/composition/Grid/Grid'
import Badge from 'components/react/content/Badge/Badge'

import '../src/docs/components/Placeholder/Placeholder.scss'

import './styles.scss'

export const parameters = {
  viewMode: 'docs',
  options: {
    storySort: {
      order: [
        'Getting started',
        'Migration',
        'Support',
        'Showroom',
        'Foundations',
        'Components',
        'Recipes',
      ],
    },
  },
  docs: {
    page: ({ of }) => {
      const resolvedOf = useOf(of || 'story', ['story', 'meta']);
      const name = resolvedOf.story.title?.split('/').slice(-1)[0] || 'Mobius';

      const themeSupport = resolvedOf.story?.parameters?.docs?.theming

      return (
        <>
          <Title />
          <Subtitle />
          {themeSupport && (
            <Badge className="m-theme-info">
              Theme support
            </Badge>
          )}
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />

          <h2>Help us improve this component</h2>

          <div className="sb-unstyled m-spacing-bottom-lg m-spacing-top-lg">
            <Grid>
              <Grid.Item>
                <Button
                  href={`https://github.com/etchteam/mobius/issues/new?labels=bug&template=bug_report.md&title=${name}+bug+report`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report a bug
                </Button>
              </Grid.Item>
              <Grid.Item>
                <Button
                  href={`https://github.com/etchteam/mobius/issues/new?labels=enhancement&template=feature_request.md&title=${name}+new+feature`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a feature
                </Button>
              </Grid.Item>
            </Grid>
          </div>

          <h2>Need help?</h2>

          <p>
            If you've got any questions or queries that need answering <a href="/?path=/story/about-get-in-touch--get-in-touch">get in touch</a>.
          </p>
        </>
      );
    },
  }
}

export const tags = ['autodocs'];
