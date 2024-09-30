import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const storyContext = await getStoryContext(page, context);

    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;

// /* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path');

// const { A11yTestRunner } = require('@shopify/storybook-a11y-test');

// const storybookTestA11y = async () => {
//   const buildDir = path.join(__dirname, '../storybook-static');

//   const testRunner = new A11yTestRunner(buildDir);

//   try {
//     // Grab all Story IDs
//     const storyIds = await testRunner.collectEnabledStoryIdsFromIFrame();

//     // Run tests on all stories in `storyIds`
//     const results = await testRunner.testStories({
//       storyIds,
//       timeout: 30000,
//     });

//     if (results.length) {
//       console.error('‼️  Accessibility violations found');
//       // eslint-disable-next-line no-console
//       console.log(results.join('\n'));
//       process.exitCode = 1;
//     } else {
//       // eslint-disable-next-line no-console
//       console.log('🧚  Accessibility tests passed');
//     }
//   } finally {
//     await testRunner.teardown();
//   }
// };

// storybookTestA11y();
