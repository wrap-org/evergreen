import { useOf } from '@storybook/blocks';
import React, { useEffect, useState } from 'react';

import '../../src/components/composition/Grid/Grid';
import '../../src/components/control/Chip/Chip';

type IndexStory = {
  id: string;
}

function Item ({ story }) {
  const title = story.title.split('/').pop();

  return (
    <evg-chip>
      <a href={story.path}>
        {title}
      </a>
    </evg-chip>
  );
}

/**
 * Gets stories for related components by looking at the story source
 * and finding other components that are used in the story
 */
export default function Related({ of }: { of?: any }) {
  const [allStories, setAllStories] = useState([] as IndexStory[]);
  const resolvedOf = useOf(of || 'story', ['story']);

  const source = resolvedOf.story.parameters.docs.source.originalSource;

  if (!source) return null;

  // Get the other <evg-*> components from the source
  const otherComponents = (source.match(/<evg-[\w-]+/g) || []).map((match) => match.slice(1).replace('evg-', ''));

  const docs = allStories.filter((s) => s.id.includes('--docs'));

  const relatedStories = docs.filter((story) => {
    const componentName = story.id.split('--')[0].replace(/components-(content|canvas|composition|control)-/g, '');

    const sameStory = story.id.split('--')[0] === resolvedOf.story.id.split('--')[0];
    if (sameStory) return false
    return otherComponents.some(c => componentName === c);
  });

  useEffect(() => {
    // Fetch only the main index.json which should contain all the information we need
    fetch('/index.json').then((res) => res.json()).then((data) => {
      const stories = Object.values(data.entries) as IndexStory[];
      setAllStories(stories);
    }).catch(error => {
      console.error('Error fetching story index:', error);
    });
  }, []);

  if (!relatedStories.length) return null;

  return (
    <>
      <h2>Related components</h2>
      <div className="sb-unstyled">
        <evg-grid wrap="wrap" gap="sm">
          {relatedStories.map((story) => {
            return (
              <evg-grid-item key={story.id}>
                <Item
                  story={story}
                />
              </evg-grid-item>
            );
          })}
        </evg-grid>
      </div>
      <hr className="evg-spacing-top-lg evg-spacing-bottom-lg" />
    </>
  );
}
