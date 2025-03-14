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
import { PreparedStory, Renderer } from 'storybook/internal/types';

export const DocPage = ({ of }: { of: any }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']) as { type: "story"; story: PreparedStory<Renderer>; };
  const name = resolvedOf.story.title?.split('/').slice(-1)[0] || 'Evergreen';

  const themeSupport = resolvedOf.story?.parameters?.docs?.theming

  return (
    <>
      <Title />
      <Subtitle />
      {themeSupport && (
        <evg-badge type="info">
          Theme support
        </evg-badge>
      )}
      <Description />
      <Primary />
      <Controls />
      <Stories includePrimary={false} />

      <h2>Help us improve this component</h2>

      <div className="sb-unstyled evg-spacing-bottom-lg evg-spacing-top-lg">
        <evg-grid>
          <evg-grid-item>
            <evg-button>
              <a
                href={`https://github.com/wrap-org/evergreen/issues/new?labels=bug&template=bug_report.md&title=${name}+bug+report`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Report a bug
              </a>
            </evg-button>
          </evg-grid-item>
          <evg-grid-item>
            <evg-button>
              <a
                href={`https://github.com/wrap-org/evergreen/issues/new?labels=enhancement&template=feature_request.md&title=${name}+new+feature`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a feature
              </a>
            </evg-button>
          </evg-grid-item>
        </evg-grid>
      </div>

      <h2>Need help?</h2>

      <p>
        If you've got any questions or queries that need answering <a href="/?path=/story/about-get-in-touch--get-in-touch">get in touch</a>.
      </p>
    </>
  );
};
