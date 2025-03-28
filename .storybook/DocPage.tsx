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
import Related from './blocks/Related';
import Meta from './blocks/Meta';

import '../src/components/content/Badge/Badge';
import '../src/components/composition/Grid/Grid';
import '../src/components/composition/Grid/GridItem';
import '../src/components/control/Button/Button';

export const DocPage = ({ of }: { of: any }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']) as { type: "story"; story: PreparedStory<Renderer>; };
  const name = resolvedOf.story.title?.split('/').slice(-1)[0] || 'Evergreen';

  const search = new URLSearchParams(window.location.search);
  const isRecipe = search.get('id')?.includes('recipe');
  const isTemplates = search.get('id')?.includes('showroom');
  const isComponent = search.get('id')?.includes('components');
  const showPrimary = !isRecipe && !isTemplates;
  const showMeta = isComponent;
  const themeSupport = resolvedOf.story?.parameters?.docs?.theming
  const componentId = resolvedOf.story.componentId.replace(/components-(content|canvas|composition|control)-/g, '');
  const element = isComponent && `evg-${componentId}`;

  return (
    <>
      <evg-grid>
        <evg-grid-item grow shrink>
          <Title />
          <Subtitle />
        </evg-grid-item>
        {showMeta && (
          <evg-grid-item>
            <Meta />
          </evg-grid-item>
        )}
      </evg-grid>

      <evg-grid gap="sm">
        {element && (
          <evg-grid-item>
            <evg-badge variant="sand">
              {element}
            </evg-badge>
          </evg-grid-item>
        )}
        {themeSupport && (
          <evg-grid-item>
            <evg-badge variant="sky-light">
              Theme support
            </evg-badge>
          </evg-grid-item>
        )}
      </evg-grid>

      <Description />
      {showPrimary && (
        <>
          <Primary />
          <Controls />
        </>
      )}
      <Stories includePrimary={!showPrimary} />

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

      <Related />

      <h2>Need help?</h2>

      <p>
        If you've got any questions or queries that need answering <a href="/?path=/docs/support--docs">get in touch</a>.
      </p>
    </>
  );
};
